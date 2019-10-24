/**
 * @file 默认配置
 */
module.exports = () => ({
    // project deployment base
    baseUrl: '/',

    // where to output built files
    outputDir: 'dist',

    // where to put static assets (js/css/img/font/...)
    assetsDir: '',

    // filename for index.html (relative to outputDir)
    indexPath: 'index.html',
    // 插件，包括 markdown 和 posthtml
    plugins: [],
    // chainWebpack: [],

    // whether filename will contain hash part
    filenameHashing: true,

    // boolean, use full build?
    runtimeCompiler: false,

    // deps to transpile
    transpileDependencies: [
        /* string or regex */
    ],

    // rules:[
    //     {
    //         test: '/\.(png|jpg|gif|svg)$/',
    //         loader: 'file-loader',
    //         options: {
    //             name: '../img/[name].[ext]?[hash]'
    //         }
    //     }
    // ],

    // rules: [{    //rules里面可以配置各种文件处理的规则
    //     test: '/\.jpg|png|jpeg|gif$/',     //匹配以jpg|png|jpeg|gif结尾的文件
    //     use: [{             //使用的loader
    //                loader: 'url-loader',    //这里用url-loader来处理图片
    //              options: {                
    //                  name: '[name].[ext]?[hash]',     
    //                  publicPath: './dist/img',        
    //                  outputPath: 'img',               
    //                    limit: 200   //  当打包的图片文件小于204800Byte时, 将图片编译成base64的形式，进行打包。如果大于204800Byte时，则使用file-loader进行打包
    //              }
    //        },
    //     ]
    // }],

    // sourceMap for production build?
    productionSourceMap: true,

    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: () => {
        try {
            return require('os').cpus().length > 1;
        } catch (e) {
            return false;
        }
    },

    // multi-page config
    pages: undefined,

    // <script type="module" crossorigin="use-credentials">
    // #1656, #1867, #2025
    crossorigin: undefined,

    // subresource integrity
    integrity: false,

    css: {
        extract: true
        // modules: false,
        // localIdentName: '[name]_[local]_[hash:base64:5]',
        // sourceMap: false,
        // loaderOptions: {}
    },

    devServer: {
        /*
      host: '0.0.0.0',
      port: 8080,
      https: false,
      proxy: null, // string | Object
      before: app => {}
    */
    }
});