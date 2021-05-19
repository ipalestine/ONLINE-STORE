const { gql } = require('apollo-server');

module.exports = gql`

type Query {
  users:[User]!
}

type User {
	id: ID!
	name: String!
  token: String
  roles: [String]
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

scalar Date
`;