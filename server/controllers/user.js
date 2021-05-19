const userModel = require('../db/mongo/models/user');
const { DataSource } = require('apollo-datasource');
const hashPassword = require('../helpers/utils')
const { generateJWT } = require('../auth/security')

class User extends DataSource {

    initialize(config) {

        this.context = config.context;
    }

    async getAll() {
        return await userModel.find()
    }

    async create(username, password, role) {
        try {

            //Check the validity of the username
            const username_pattern = /^[a-z][\w-._]+$/

            if (!username_pattern.test(username)) {
                return {
                    code: 400,
                    success: false,
                    message: `
                    The username structure is incorrect\n
                    username must have the following conditions:\n
                    .It must be English.\n
                    .The first character must be alphabet letter.\n
                    .Must contain only letters of the alphabet,
                     numbers and symbolssuch as (. - _)
                `,
                    user: null
                }
            }

            //Check the validity of the password
            const password_pattern = /^[\S]{6,12}$/

            if (!password_pattern.test(password)) {
                return {
                    code: 400,
                    success: false,
                    message: `
                            Password must be at least 6 and at most 12 characters long.
                            `,
                    user: null
                }
            }

            //Check for duplicate username
            var user = await userModel.findOne({
                name: username
            });

            if (user) {
                return {
                    code: 400,
                    success: false,
                    message: "There is an account with this username!",
                    user: null
                }
            }

            //Create User

            ////Hash user password
            password = hashPassword(password)

            user = await userModel.create({
                name: username,
                password,
                roles: role
            })

            user.token = generateJWT({ user })

            return {
                code: 200,
                success: true,
                message: "User successfully added.",
                user: user
            }

        } catch (error) {
            return {
                code: 500,
                success: false,
                message: `${error}`,
                user: null
            }
        }
    }
}

module.exports = User;
