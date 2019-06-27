const webpack = require("webpack");
module.exports = {
	//默认universal，{universal:同构（服务端渲染）,spa:非服务端渲染}
	mode: 'universal',
	//将项目目录定位到src下面
	srcDir: 'src/',
    /*
	** 每个页面都会默认使用这个head,也可以在页面组件中重写
	*/
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
	** Customize the progress-bar color
	*/
    loading: { color: '#fff' },
    /*
	** 所有页面都会引用的CSS
	*/
    css: [
		{src: "~/assets/style/common.scss",lang: "scss"}
	],
    /*
	** 所有页面都会引用的js
	*/
    script: [],
    /*
	** 集成elementui
	*/
    plugins: [
		{src:'~/plugins/use-element.js',ssr:true}
	],
    /*
	** Nuxt.js modules
	*/
    modules: [],
    /*
	** Build 配置
	*/
    build: {
        plugins:[],
        analyze: false,//是否开启浏览器构建性能分析
        optimization:{
            minimize: true
        },
        extractCSS:true,
        html:{
            minify:{
                collapseBooleanAttributes: false,
                collapseWhitespace: false,
                decodeEntities: true,
                minifyCSS: true,
                minifyJS: true,
                processConditionalComments: true,
                removeAttributeQuotes: false,
                removeComments: false,
                removeEmptyAttributes: false,
                removeOptionalTags: false,
                removeRedundantAttributes: false,
                removeScriptTypeAttributes: false,
                removeStyleLinkTypeAttributes: false,
                removeTagWhitespace: false,
                sortClassName: false,
                trimCustomFragments: false,
                useShortDoctype: false
            }
        },
        cssSourceMap:true,
        /*
		** 扩展webpack配置
		*/
        extend(config, ctx) {
            // Run ESLint on save
            // if (ctx.isDev && ctx.isClient) {
			// 	//eslint loader
			// 	const eslintLoader = {
            //         enforce: "pre",
            //         test: /\.(vue|js)$/,
            //         loader: "eslint-loader",
            //         exclude: /(node_modules)/,
            //         options: {
            //             formatter: require('eslint-friendly-formatter')
            //         }
			// 	};
			// 	//自定义eslint配置
			// 	const defineEslintRules = new webpack.LoaderOptionsPlugin({
			// 		test: /\.(js|jsx)$/,
			// 		options:{
			// 			eslint: './.eslintrc.js'
			// 		}
			// 	});
            //     config.module.rules.push(eslintLoader);
			// 	config.plugins.push(defineEslintRules);
            // }
        }
    },
    env:{}
};
