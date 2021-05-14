const jwt = require('jsonwebtoken')
const fs = require('fs')

const privateKEY = fs.readFileSync('/private.key', 'utf8')
const publicKEY = fs.readFileSync('./public.key', 'utf8')

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

module.exports = { generateJWT, verifyJWT }