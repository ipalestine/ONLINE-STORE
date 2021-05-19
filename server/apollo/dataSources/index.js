const User = require('../../controllers/user')

module.exports = () => {
    return {
        user: new User()
    }
}