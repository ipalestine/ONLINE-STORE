const { verifyJWT } = require('./security')

module.exports = ( req ) => {
    var user = null

    var token = req.headers['x-access-token'] || req.headers.authorization || req.body.token

    if(!token) return { user } 

    user = verifyJWT(token)

    return  user 
}