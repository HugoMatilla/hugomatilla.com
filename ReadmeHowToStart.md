`gridsome develop` to start a local dev server at `http://localhost:8080`
# FAQ
## Update libraries
> yarn upgrade
> yarn -global upgrade
> Delete node folder and .lock files
> npm install
## Error: Could not generate HTML for "/":
> Could not generate HTML for "/":
> ReferenceError: HTMLImageElement is not defined
Wrap client componentes in <ClientOnly></ClientOnly>
Wrap client Functions in: https://gridsome.org/docs/client-api/#process-injections

https://github.com/gridsome/gridsome/issues/408

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


# Errors on M1 and how to fix them
1. https://github.com/gridsome/gridsome/issues/1596#issuecomment-1007702516
2. https://stackoverflow.com/questions/72467077/cant-solve-error-node-sass-version-7-0-1-is-incompatible-with-4-0-0