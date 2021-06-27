const { AuthenticationError } = require('apollo-server-errors');
const dateScalar = require('../scalars');

module.exports = {
    Date: dateScalar,

    Query: {
        users: (root, args, { user, dataSources }) => {
            if (!user || !user.roles.includes('admin')) 
                return new AuthenticationError('You must logged in!');
            return dataSources.user.getAll();
        }
    },
    Mutation: {
        create_user(_, { username, password, role }, { dataSources }) {
            return dataSources.user.create(username, password, role)
        }
    },
    MutationResponse: {
        __resolveType(mutationResponse, context, info) {
            return null;
        },
    },
}