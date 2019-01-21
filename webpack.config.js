const path = require('path');

module.exports = {
    entry:"./app/index.js",
    output:{
        path:path.join(__dirname,'public'),
        filename:"bundle.js"
    },
    module:{
        rules:[
            {
                use:"babel-loader",
                test: /\.js$/,
                exclude:/node_modules/
            }
        ]
    }
}