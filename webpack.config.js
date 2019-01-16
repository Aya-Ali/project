const webpack = require('webpack');

module.exports=
{
    entry:'./src/js/index1.js',
    optimization: {
        minimize: false
      },
    output:{
        filename:'bundle.js',
        path:__dirname+'/dist',
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    module: {
        
        rules: [
          {
            
             test: /\.js$/,
            use: [{
                loader: 'babel-loader',
             }]
         },
        {
            test: /\.css$/,
            
            use: ['style-loader', 'css-loader'],
                // options: {
                //   minimize: true,
                //   import: true,
                // }
                //options: { url: false }
        },
        {test: /\.(png|jpeg|jpg|woff|woff2|eot|ttf|svg)$/, use: { loader: 'url-loader?limit=100000', }, }
        // {
        //     test: /\.(png|jpg|gif)$/,
        //     use: [
        //       {
        //         loader: 'file-loader',
        //         options: {}  
        //       }
        //     ]
        //   }
    ]}
}