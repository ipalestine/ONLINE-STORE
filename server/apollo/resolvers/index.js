const dateScalar = require('../scalars');

module.exports = {
    Date: dateScalar,

    Query: {

    },

    Mutation: {
        create_user(_, { username, password } , { dataSources }){
            return dataSources.user.create(username, password)
        }
    }
}