import { db } from 'meteor/cultofcoders:apollo';

import ValidationServiceModel from './ValidationService';
import SecurityServiceModel from './SecurityService';
import EventServiceModel from './EventService';
import CategoryServiceModel from './CategoryService';

export const ValidationService = new ValidationServiceModel();
export const SecurityService = new SecurityServiceModel();
export const EventService = new EventServiceModel({
  db,
});
export const CategoryService = new CategoryServiceModel({
  db,
});
