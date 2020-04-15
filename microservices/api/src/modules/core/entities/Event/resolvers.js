import { AppUploads } from '../../../uploads/db';
import { Categories, Events } from '../../db';

export default {
  Event: {
    photo: ({ _id }) => {
      const event = Events.findOne(_id);
      return AppUploads.findOne(event.photoId);
    },
    categories: ({ _id }) => {
      const event = Events.findOne(_id);
      const categories = Categories.find({
        _id: { $in: event.categoriesId },
      }).fetch();
      return categories;
    },
  },
};
