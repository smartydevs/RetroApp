import moment from 'moment';

import { UploaderService } from '../../uploads/services';

export default class EventService {
  constructor(injection) {
    Object.assign(this, injection);
  }

  getEvent(eventId) {
    const { db } = this;

    const events = db.events
      .createQuery({
        $filters: {
          _id: eventId,
        },
        _id: 1,
        title: 1,
        location: {
          addressName: 1,
        },
        description: 1,
        startDate: 1,
        endData: 1,
        organiser: {
          _id: 1,
          profile: {
            firstName: 1,
            lastName: 1,
            avatar: 1,
          },
        },
        users: {
          _id: 1,
          profile: {
            firstName: 1,
            lastName: 1,
            avatar: 1,
          },
        },
      })
      .fetch();
    return events.length ? events[0] : {};
  }

  getEventsOnDate(date) {
    const { db } = this;

    return db.events
      .createQuery({
        $filters: {
          startDate: date,
        },
        _id: 1,
        title: 1,
        startDate: 1,
        users: {
          _id: 1,
          profile: {
            pushToken: 1,
          },
        },
      })
      .fetch();
  }

  searchEvents({ userId, searchInput }) {
    const { db } = this;
    const user = db.users.findOne(userId);
    const { categoryIds = [] } = user.profile;
    const finalSearchInput = searchInput ? searchInput.trim() : '';

    const events = finalSearchInput.length
      ? this.searchEventsByInput(finalSearchInput)
      : this.searchEventsByCategories(categoryIds);

    return events;
  }

  searchEventsByInput(searchInput) {
    const { db } = this;

    return db.events
      .find({
        title: {
          $regex: searchInput,
          $options: 'i',
        },
        startDate: {
          $gte: new Date(),
        },
      })
      .fetch();
  }

  searchEventsByCategories(categoryIds) {
    const { db } = this;

    return db.events
      .find({
        categoriesId: {
          $in: categoryIds,
        },
        startDate: {
          $gte: new Date(),
        },
      })
      .fetch();
  }

  validateEventDetails(eventDetails) {
    const { startDate, endDate } = eventDetails;

    const validatedStartDate = moment(startDate)
      .second(0)
      .toDate();
    const title = eventDetails.title.trim();
    const description = eventDetails.description.trim();
    //Checks that the endDate is not earlier than the startDate
    if (endDate && moment(endDate).diff(moment(startDate)) <= 0) {
      throw new Error('startDate-after-endDate');
    }

    return {
      ...eventDetails,
      startDate: validatedStartDate,
      title,
      description,
    };
  }

  async uploadEventPhoto(eventId, uploadPhoto) {
    const { db } = this;
    const uploadedPhoto = await UploaderService.handleFileUpload(uploadPhoto, null);
    await db.events.update(eventId, {
      $set: {
        photoId: uploadedPhoto._id,
      },
    });
    return uploadedPhoto;
  }

  async createEvent(organiserId, eventDetails) {
    const { db } = this;
    const details = this.validateEventDetails(eventDetails);

    const eventId = db.events.insert({
      organiserId,
      ...details,
    });

    return eventId;
  }

  joinEvent(userId, eventId) {
    const { db } = this;

    const event = db.events.findOne(eventId);
    if (!event) {
      throw new Error('Something went wrong');
    }

    const user = event.usersId.find(_id => _id === userId);
    if (user) {
      throw new Error('user-alreadyJoined');
    }

    return db.events.update(eventId, {
      $push: {
        usersId: userId,
      },
    });
  }

  leaveEvent(userId, eventId) {
    const { db } = this;

    const event = db.events.findOne(eventId);
    if (!event) {
      throw new Error('Something went wrong');
    }
    const user = event.usersId.find(u => u === userId);
    if (!user) {
      throw new Error('user-notJoined');
    }

    const newUsersId = event.usersId.filter(u => u !== userId);

    return db.events.update(eventId, {
      $set: {
        usersId: newUsersId,
      },
    });
  }

  getAverageStars(eventId) {
    const { db } = this;

    const reviews = db.reviews
      .find(
        {
          eventId,
        },
        {
          fields: {
            stars: 1,
          },
        }
      )
      .fetch();
    const reviewsWithScore = reviews.filter(review => review.score);
    if (!reviewsWithScore.length) {
      return 0;
    }
    const nrOfStars = reviewsWithScore.reduce((sum, review) => (sum += review.stars));
    return nrOfStars / reviewsWithScore.length;
  }

  getUserEvents(userId, offset = 5) {
    const { db } = this;

    const filters = {
      usersId: {
        $in: [userId],
      },
      startDate: {
        $gte: new Date(),
      },
    };

    const events = db.events
      .find(
        {
          ...filters,
        },
        {
          limit: offset,
        }
      )
      .fetch();

    const eventNr = db.events.find({ ...filters }).count();

    return {
      events,
      eventsNumber: eventNr,
      hasMore: eventNr - offset > 0,
    };
  }
}
