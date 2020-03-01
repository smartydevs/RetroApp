import moment from 'moment';

import { UploaderService } from '../../uploads/services';

export default class EventService {
  constructor(injection) {
    Object.assign(this, injection);
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


}
