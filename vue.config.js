module.exports = {
  // lintOnSave: false,
  pages: {
    'index': {
      entry: './src/main.js',
      template: 'public/index.html',
      title: 'home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index']
    },
    // 'course': {
    //   entry: './src/course/main.js',
    //   template: 'public/index.html',
    //   title: 'course',
    //   chunks: [ 'chunk-vendors', 'chunk-common', 'course']
    // }
  },
  // publicPath: '/course/index.html'
}

// module.exports = {
//   publicPath: '/myWork/course/index.html'
// }