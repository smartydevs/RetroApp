import { Categories } from '../../db';
import { AppUploads } from '../../../uploads/db';

export default {
  Category: {
    photo: ({ _id }) => {
      const category = Categories.findOne(_id);
      return AppUploads.findOne(category.photoId);
    },
  },
};
