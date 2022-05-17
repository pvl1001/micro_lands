module.exports = {
   "plugins": [
      "postcss-flexbugs-fixes",
      [
         "postcss-preset-env",
         {
            "autoprefixer": {
               "flexbox": "no-2009"
            },
            "stage": 3,
            "features": {
               "custom-properties": false
            }
         }
      ],
      [
         '@fullhuman/postcss-purgecss',
         {
            content: [ // файлы сравнения селекторов
               'pages/**/*.{js,jsx}',
               'components/**/*.{js,jsx}',
            ],
            css: [
               'public/styles/main.{css,scss,sass}',
            ],
            defaultExtractor: content => content.match( /[\w-/:]+(?<!:)/g ) || [],
            safelist: { // список исключений
               standard: [
                  "html",
                  "body",
                  "path",
                  "fade",
                  /^modal/,
                  /^tippy/,
               ]
            },
         }
      ],
   ]
}