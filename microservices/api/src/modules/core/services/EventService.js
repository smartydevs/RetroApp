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
    const title = eventDetails.title.trim();
    const description = eventDetails.description.trim();
    //Checks that the endDate is not earlier than the startDate
    if (moment(endDate).diff(moment(startDate)) <= 0) {
      throw new Error('startDate-after-endDate');
    }

    return {
      ...eventDetails,
      title,
      description,
    };
  }

  async uploadEventPhoto(uploadPhoto) {
    return await UploaderService.upload(uploadPhoto, null);
  }

  async createEvent(organiserId, eventDetails) {
    const { db } = this;
    const details = this.validateEventDetails(eventDetails);

    if (details.uploadPhoto) {
      const photoId = await this.uploadEventPhoto(details.uploadPhoto.originFileObj);
      delete details.uploadPhoto;
      details.photoId = photoId;
    }

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

    const user = event.usersId.find(userId);
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

  getUserEvents(userId) {
    const { db } = this;

    const events = db.events
      .find({
        usersId: {
          $in: [userId],
        },
      })
      .fetch();

    return events;
  }
}
