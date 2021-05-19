require('dotenv').config();

//Connect to the Mongo Database
require('./db/mongo').run();

//Apollo server structure
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./apollo/schema');
const resolvers = require('./apollo/resolvers');
const dataSources = require('./apollo/dataSources');
const auth = require('./auth')

const server = new ApolloServer({
    dataSources,
    typeDefs,
    resolvers,
    context: ({ req }) => auth(req)
})

server.listen().then(({ url }) => {
    console.log(`Server is ready at ${url}`)
})