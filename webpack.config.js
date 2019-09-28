// 这个配置文件，其实就是一个js文件，通过Node中的模块操作，向外暴露了一个配置对象
const path = require('path');
// 导入在内存中生成html页面的插件
// 1.自动在内存中根据指定页面生成一个内存的页面
// 2.自动把打包好的bundle.js追加到页面中去
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    // 在配置文件中，需要手动指定入口和出口
    // 入口，表示要使用webpack打包哪个文件
    entry: path.join(__dirname, './src/main.js'),
    // 输出文件相关的配置
    output: {
        // 指定打包好的文件，输出到哪个目录中去
        path: path.join(__dirname, './dist'),
        // 指定输出的文件的名称
        filename: 'bundle.js'
    },
    devServer: {
        // 自动打开浏览器
        open: false,
        // 运行端口
        port: 8081,
        // 指定托管的根目录
        // contentBase: 'src',
        // 启用热更新
        hot: true
    },
    plugins: [
        // 创建一个在内存中生成html页面的插件
        new htmlWebpackPlugin({
            // 指定模板页面，将来会根据指定的页面路径去生成内存中的页面
            template: path.join(__dirname, './src/index.html'),
            // 指定生成的页面名称
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            // 配置处理.css文件的第三方loader规则
            // loader调用顺序从右向左
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            // 处理图片路径的loader
            // limit给定的值，是图片的大小，单位是byte,
            // 如果我们引用的图片大于给定的大小，则不会被转为base64格式的字符串，
            // 如果图片小于或等于给定的limit值，则会被转为base64字符串
            {test: /\.(jpg|png|gif|jpeg)$/, use: 'url-loader?limit=15466&name=[hash:8]-[name].[ext]'},
            {test: /\.(ttf|eot|woff|woff2|svg)$/, use: 'url-loader'},
            {
                test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', options: {
                    presets: [
                        '@babel/preset-env',
                        {
                            plugins: [
                                '@babel/plugin-proposal-class-properties'
                            ]
                        }
                    ]
                }
            },
            // 处理.vue文件的vue-loader
            {test: /\.vue$/, use: ['vue-loader']},
        ]

    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.js'
        }
    }
};

// 当我们在控制台执行webpack命令时，
// 1.webpack发现没有指定入口和出口
// 2.wepack会去项目的根目录中，查找一个叫做'webpack.config.js'的配置文件
// 3.当找到配置文件后，webpack会去解析执行这个配置文件，解析执行完成后，就得到了配置文件中到处的配置对象
// 4.webpack拿到配置对象后，就拿到了配置对象中指定的入口和出口，然后进行打包构建

// 使用webpack-dev-server这个工具来实现自动打包编译的功能
// 1.运行npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
// 2.安装完毕后，这个工具的用法和webpack命令的用法完全一样
// 3.由于我们实在项目本地中安装的webpack-dev-server,所以无法把它当作脚本命令在终端中直接运行
//   只有那些安装到全局 -g的工具，才能在终端中正常运行
// 4.webpack-dev-server这个工具，如果想要正常运行，要求本地项目中必须安装webpack和webpack-cli
// 5.webpack-dev-server帮我们打包生成的bundle.js并没有存放到实际的物理磁盘上，而是直接托管到了电脑的内存中，所以我们
//   在项目根目录中，根本找不到这个打包好的bundle.js

