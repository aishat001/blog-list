const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
  }
  const password = process.argv[2]

const mongoUrl = `mongodb+srv://fullstack:${password}@cluster0.fkubm.mongodb.net/blog-list?retryWrites=true&w=majority`

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)
const blog = new Blog({
    title: "onbecoming",
    author: "aishat",
    url: "aishat.com",
    likes: 10
})

  blog.save().then(result => {
    console.log('person saved!')
    mongoose.connection.close()
  })