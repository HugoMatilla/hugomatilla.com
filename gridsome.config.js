// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Hugo Matilla',
  plugins: [{
    use: 'gridsome-source-rss',
    options: {
      feedUrl: 'https://medium.com/feed/@HugoMatilla',
      typeName: 'MediumPost'
    }
  },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './src/blog/**/*.md',
        typeName: 'LocalPost',
      },
    },
  ],
  templates: {
    MediumPost: [
      {
        path: '/blog/:title',
        component: './src/templates/MediumPost.vue'
      }
    ],
    LocalPost: [
      {
        path: '/blog/:title',
        component: './src/templates/LocalPost.vue'
      }
    ]}
}
