require('dotenv').config();

//Connect to the Mongo Database
require('./db/mongo').run();

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const dataSources = require('./graphql/dataSources');

const server = new ApolloServer({
    dataSources,
    typeDefs,
    resolvers
})

server.listen().then(() => {
    console.log('Server app is running')
})