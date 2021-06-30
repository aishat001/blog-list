const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', (request, response) => {
  const body = request.body
  console.log(body)

  Blog
    .find({})
    .then(blogs => {
      console.log(blogs)
      response.json(blogs)
    })
})

blogRouter.post('/',async (req, response) => {
    const blog = new Blog({
      title: req.body.title,
      author: req.body.author || "",
      url: req.body.url,
      likes: req.body.likes || 0,
      name: "aishah"
  })
  console.log(blog)
  
  const savedBlog = await blog.save()
    response.status(201).json(savedBlog)

})

module.exports = blogRouter