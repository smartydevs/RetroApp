import { initialize } from 'meteor/cultofcoders:apollo';

const { server } = initialize(
    {
        cors: false,
    },

    { cors: false }
);

export { server };
