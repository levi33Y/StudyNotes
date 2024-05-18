## css module



`<link src="./index.css"/>`



`import  "./index.css"`



`Import  "./index.scss"`



`import "./index.module.scss"`



`import style "./index.module.scss"`



### `#`

css module

mode: "local"



### `#`

`css-loader`

```js
module.exports = {
  module: {
    rules: [
      // ...
      // --------
      // SCSS ALL EXCEPT MODULES
      {
        test: /\.scss$/i,
        exclude: /\.module\.scss$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                mode: "icss",
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      // --------
      // SCSS MODULES
      {
        test: /\.module\.scss$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                mode: "local",
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      // --------
      // ...
    ],
  },
};
```

