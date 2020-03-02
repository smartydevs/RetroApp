import EventEmitter from 'events';

// Read more: https://nodejs.org/docs/latest-v8.x/api/events.html
export const Emitter = new EventEmitter();

export const Events = {
  EVENT_EDITED: 'event.edited',
  EVENT_IN_1_DAY: 'event.in_1_day',
};

export default Emitter;
