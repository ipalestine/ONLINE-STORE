const { verifyJWT } = require("../../helpers/security")

module.exports = ({ req }) => {

    const token = req.headers.authorization || req.headers['x-access-token'] || req.body.token

    if(!token) return null

    const { user } = verifyJWT(token)

    return { user }

}