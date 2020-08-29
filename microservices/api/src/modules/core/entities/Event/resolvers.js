import { AppUploads } from '../../../uploads/db';
import { Categories, Events, Reviews } from '../../db';
import { EventService } from '../../services';

export default {
  Event: {
    photo: ({ _id }) => {
      const event = Events.findOne(_id);
      return AppUploads.findOne(event.photoId);
    },
    reviews: ({ _id }) => {
      return Reviews.createQuery({
        $filters: {
          eventId: _id,
        },
        _id: 1,
        createdAt: 1,
        title: 1,
        description: 1,
        stars: 1,
        author: {
          _id: 1,
          profile: {
            firstName: 1,
            lastName: 1,
            avatarId: 1,
            avatar: {
              _id: 1,
              path: 1,
              fullPath: 1,
            },
          },
        },
      }).fetch();
    },
    categories: ({ _id }) => {
      const event = Events.findOne(_id);
      const categories = Categories.find({
        _id: { $in: event.categoriesId },
      }).fetch();
      return categories;
    },
    averageStars: ({ _id }) => {
      return EventService.getAverageStars(_id);
    },
  },
};
