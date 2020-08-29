import { db } from 'meteor/cultofcoders:apollo';

import AppReviewServiceModel from './AppReviewService';
import CategoryServiceModel from './CategoryService';
import EventServiceModel from './EventService';
import NotificationServiceModel from './NotificationService';
import QuestionServiceModel from './QuestionService';
import ReviewServiceModel from './ReviewService';
import SecurityServiceModel from './SecurityService';
import ValidationServiceModel from './ValidationService';

export const AppReviewService = new AppReviewServiceModel({
  db,
});
export const CategoryService = new CategoryServiceModel({
  db,
});
export const EventService = new EventServiceModel({
  db,
});
export const NotificationService = new NotificationServiceModel({
  db,
});
export const QuestionService = new QuestionServiceModel({
  db,
});
export const ReviewService = new ReviewServiceModel({
  db,
});
export const SecurityService = new SecurityServiceModel({
  db,
});
export const ValidationService = new ValidationServiceModel();
