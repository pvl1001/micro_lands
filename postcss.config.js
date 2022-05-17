const glob = require( "glob-all" );
const paths = require( "react-scripts/config/paths" );


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
            content: [
               './pages/**/*.{js,jsx}',
               './components/**/*.{js,jsx}',
               // node_modules style
               ...glob.sync( `${ paths.appNodeModules }/tippy.js/**/*.css`, {
                  nodir: true
               } )
            ],
            css: ['public/styles/main.sass'],
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