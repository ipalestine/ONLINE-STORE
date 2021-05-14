require('dotenv').config();

//Connect to the Mongo Database
require('./db/mongo').run();

//Apollo server structure
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./apollo/schema');
const resolvers = require('./apollo/resolvers');
const dataSources = require('./apollo/dataSources');

const server = new ApolloServer({
    dataSources,
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Server is ready at ${url}`)
})