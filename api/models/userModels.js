const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const SALT_ROUNDS = 11

const UserSchema = Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
})

UserSchema.pre('save', function(next) {
  bcrypt.hash(password, SALT_ROUNDS)
    .then( hash => {
      this.password = hash
      return next()
    })
    .catch( err => {
      return next(err)
    })
})

UserSchema.methods.checkPassword = function(plainTextPW, callBack) {
  return bcrypt.compare(plainTextPW, this.password)
}

module.exports = mongoose.model('User', UserSchema)
