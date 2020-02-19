import faker from 'faker';

import Events from '../db/events';

export function createEvent({ organiserId, usersId, startDate, title, categoriesId }) {
  const address = faker.address;
  Events.insert({
    organiserId,
    usersId,
    startDate,
    categoriesId,
    title,
    description: faker.random.words(),
    location: {
      latitude: address.latitude(),
      longitude: address.longitude(),
      addressName: address.streetAddress(),
    },
  });
}
