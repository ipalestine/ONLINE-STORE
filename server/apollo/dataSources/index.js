const UserAPI = require('../../controllers/user')

module.exports = () => {
    return {
        user: new UserAPI()
    }
}