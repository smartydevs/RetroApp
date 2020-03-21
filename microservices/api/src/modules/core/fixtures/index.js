/**
 * Inside this folder we'll store the logic for generating demo data within the app
 */

import { Meteor } from 'meteor/meteor';
import _ from 'lodash';

import business from '../business';
import { createAdmin } from './admin';
import { createMember } from './member';
import { createOrganiser } from './organiser';
import { createCategory } from './category';
import { createEvent } from './event';
import RolesEnum from '../../accounts/db/users/enums/RolesEnum';
import { Categories } from '../db';
import { Users } from '../../accounts/db';

async function loadUsers() {
  for (let i = 1; i <= 10; i++) {
    createMember(`retro-user${i}@retro.com`);
  }
}

async function loadAdmins() {
  for (let i = 1; i <= 3; i++) {
    createAdmin(`retro-admin${i}@retro.com`);
  }
}

async function loadOrganiser() {
  for (let i = 1; i <= 7; i++) {
    createOrganiser(`retro-organiser${i}@retro.com`);
  }
}

async function loadCategories() {
  const { defaultCategories } = business;

  defaultCategories.map(category => createCategory(category));
}

async function loadEvents() {
  const categories = Categories.find({}, { fields: { _id: 1 } }).fetch();
  //Array that contains only _id
  const categoriesIds = categories.map(category => category._id);
  const users = Users.find({ roles: { $in: [RolesEnum.USER] } }).fetch();
  //Array that contains only _id
  const usersIds = users.map(user => user._id);
  const organisers = Users.find({ roles: { $in: [RolesEnum.ORGANISER] } }).fetch();
  for (let i = 1; i <= 20; i++) {
    //Random number that gives the number of users and categories that the event will have
    const randomNumber = _.random(1, _.min([usersIds.length, organisers.length]));
    const organiserId = organisers[i % organisers.length]._id;
    const usersId = _.sampleSize(usersIds, randomNumber);
    const eventCategories = _.sampleSize(categoriesIds, randomNumber);
    const title = `Event-${i}`;
    const date = new Date();
    createEvent({
      organiserId,
      usersId,
      categoriesId: eventCategories,
      title,
      startDate: date,
    });
  }
}

async function loadAllFixtures() {
  // await loadRoles();
  await loadUsers();
  await loadAdmins();
  await loadOrganiser();
  await loadCategories();
  await loadEvents();
}

Meteor.startup(async () => {
  if (Meteor.users.find().fetch().length === 0) {
    console.log('Started loading fixtures...');

    await loadAllFixtures();
  }
});
