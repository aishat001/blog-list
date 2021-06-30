const bcrypt = require('bcrypt')
const User = require('../models/user')
const usersRouter = require('express').Router()

usersRouter.get('/', async (request, response) => {
    const users = await User.find({})
    response.json(users)
  })
  
usersRouter.post('/', async (request, response) => {
    const user = new User(request.body)

    const savedUser = await user.save()
    response.status(200).json(savedUser)
})

module.exports = usersRouter