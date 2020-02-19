import Categories from './collection';

import Events from '../events';

Categories.addLinks({
  events: {
    collection: Events,
    inversedBy: 'categories',
  },
});
