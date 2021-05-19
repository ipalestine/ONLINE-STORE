const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const fs = require('fs')

const privateKEY = fs.readFileSync('./auth/private.key', 'utf8')
const publicKEY = fs.readFileSync('./auth/public.key', 'utf8')

const i = 'jwt-node'
const s = 'jwt-node'
const a = 'jwt-node'

const verifyOptions = {
	issuer: i,
	subject: s,
	audience: a,
	expiresIn: '8784h',
	algorithm: ['RS256'],
}

const soltRound = 10
const solt = bcrypt.genSaltSync(soltRound)

const hashPassword = (password) => {
    const hashedPassword = bcrypt.hashSync(password, solt)
    return hashedPassword
}

const generateJWT = (payload) => {
    const signOptions = {
        issuer: i,
        subject: s,
        audience: a,
        expiresIn: '8784h',
        algorithm: 'RS256',
    }

    const options = signOptions
    if (payload && payload.exp) {
        delete options.expiresIn
    }
    return jwt.sign(payload, privateKEY, options)
}

verifyJWT = (token) => {
    return jwt.verify(token, publicKEY, verifyOptions)
}

/**
   * comparePassword
   * @param {string} hashPassword
   * @param {string} password
   * @returns {Boolean} return True or False
   */
 const comparePassword = (hashedPassword, password) => bcrypt.compareSync(password, hashedPassword)
 
module.exports = {
    hashPassword, generateJWT, verifyJWT, comparePassword
}