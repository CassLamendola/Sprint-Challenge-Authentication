const jwt = require('jsonwebtoken')
const { mysecret } = require('../../config')
const User = require('../models/userModels')

const login = (req, res) => {
  const { username, password } = req.body
  User.findOne({ username })
    .then ( user => {
      if (user) {
        user.checkPassword(password)
          .then( verifiedUser => {
            if (verifiedUser) {
              const payload = {
                username: user.username
              }
              const token = jwt.sign(payload, mysecret)
              res.status(200).json({ token })
            } else {
              res.status(422).json({ error: 'passwords dont match' })
            }
          })
          .catch( err => {
            //res.status(500).json({ error: 'there was a problem comparing passwords' })
            res.status(500).json(err.message)
          })
      } else {
        res.status(422).json({ error: "no user with that username in the database" })
      }
    })
}


module.exports = { login }
