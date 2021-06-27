const { gql } = require('apollo-server');

module.exports = gql`
scalar Date

type Query {
  users:[User]!
}

type User {
	id: ID!
	name: String!
  token: String
  roles: [String]
  created: Date!
  updated: Date!
}

type Mutation {
  create_user(username: String, password: String, role: String!): CreateUserMutationResponse
}

interface MutationResponse {
  code: Int!
  success: Boolean!
  message: String!
}

type CreateUserMutationResponse implements MutationResponse {
  code: Int!
  success: Boolean!
  message: String!
  user: User
}


`;