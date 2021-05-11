const { gql } = require('apollo-server')

const typeDefs = gql`
type Admin {
    id: ID!
    email: String!
}

type Query {
    login(email:String):Admin
}

type Mutation {
    addAdmin(email: String):Admin
}
`

module.exports = typeDefs