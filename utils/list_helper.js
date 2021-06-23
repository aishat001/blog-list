const totalLikes = (blogs) => {
    return blogs.length === 0
     ? 0
     : blogs.reduce((a, blog) => a + blog.likes, 0)
}


// const mostBlogs = (blogs) => {
//     if (blogs.length === 0) {
//         return {}
//     } else {
//         const countAuthors = blogs.reduce((countAuthor, blog) => {
//             countAuthor[blog.author] === (countAuthor[blog.author] || 0 ) + 1
//             return countAuthor
//         }, {})
//         const maxCount = Math.max(...Object.values(countAuthors))
//         const mostFrequent = Object.keys(countAuthors).filter(author => countAuthors[author] === maxCount)
//         return {
//             author: mostFrequent[0],
//             blogs: maxCount
//         }
//     }

// }

const favouriteBlog = (blogs) => {
    return blogs.length === 0
     ? {}
     : blogs.reduce((maxLikes, blog) => blog.likes > maxLikes 
        ? blog 
        : maxLikes, blogs[0].likes
)
}

module.exports = {totalLikes, favouriteBlog}