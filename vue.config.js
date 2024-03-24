module.exports = {
  // lintOnSave: false,
  pages: {
    'ingex': {
      entry: './src/main.js',
      template: 'public/index.html',
      title: 'home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'ingex']
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