`gridsome develop` to start a local dev server at `http://localhost:8080`

# 1 Add Medium Posts
#### 1 Execute
> yarn add gridsome-source-rss

**1.2**

> (in case mime is not found)
> npm install mime (in case it is not found)
> yarn add gridsome-source-rss
#### 2 Add the plugin 
```js
    {
      use: 'gridsome-source-rss',
      options: {
        feedUrl: 'https://medium.com/feed/@HugoMatilla',
        typeName: 'MediumPost'
      }
    },
```
#### 3 Add the template
```js
templates: {
    MediumPost: [
      {
        path: '/blog/:title',
        component: './src/templates/Post.vue'
      }
    ],
```    
#### 4 Create the `Post.vue` in templates folder
#### 5 Create the `Blog.vue` in pages folder
