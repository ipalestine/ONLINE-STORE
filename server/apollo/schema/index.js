const { gql } = require('apollo-server');

module.exports = gql`

type Account {
  username: String!
  token: String
}

type User {
  id: ID
  account: Account
}

type Query {
  login(username: String!, password: String!): User
}

type Mutation {
  create_user(username: String, password: String): AddUserMutationResponse
}

interface MutationResponse {
  code: Int!
  success: Boolean!
  message: String!
}

type AddUserMutationResponse implements MutationResponse {
  code: Int!
  success: Boolean!
  message: String!
  user: User
}

scalar Date
`;