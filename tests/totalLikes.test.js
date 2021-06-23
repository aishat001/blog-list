const listHelper = require('../utils/list_helper')

describe('total likes', () => {
    const blogs = [
        {
          _id: "5a422a851b54a676234d17f7",
          title: "React patterns",
          author: "Michael Chan",
          url: "https://reactpatterns.com/",
          likes: 5,
          __v: 0
        }
]
  
    test('when list has only one blog, equals the likes of that', () => {
      expect(listHelper.totalLikes(blogs)).toBe(5)
    })
  })