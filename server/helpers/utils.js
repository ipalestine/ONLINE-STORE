const bcrypt = require('bcrypt')
const soltRound = 10
const solt = bcrypt.genSaltSync(soltRound)
const hashPassword = (password) => {
    const hashedPassword = bcrypt.hashSync(password, solt)
    return hashedPassword
}
module.exports = hashPassword