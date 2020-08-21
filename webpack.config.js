const path = require('path');



module.exports ={
    entry: path.resolve(__dirname, 'src', 'index.js'), //Carrega o principal arquivo da nossa aplicação, o qual seria o "index.js" dentro da pasta "src".
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    }
}