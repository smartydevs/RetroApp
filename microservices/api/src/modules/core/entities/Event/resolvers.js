import { AppUploads } from '../../../uploads/db';
import { Events } from '../../db';

export default {
  Event: {
    photo: ({ _id }) => {
      const event = Events.findOne(_id);
      return AppUploads.findOne(event.photoId);
    },
  },
};
