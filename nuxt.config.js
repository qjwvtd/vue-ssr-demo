// const webpack = require("webpack");
module.exports = {
    mode: 'universal',
    /*
	** Headers of the page
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
    /**
	 * 个性化配置 Nuxt.js 应用的路由
	 */
    router:{
        base:'/'
    },
    /*
	** 所有页面都会引用的CSS
	*/
    css: [],
    /*
	** 所有页面都会引用的js
	*/
    script: [],
    /*
	** Plugins to load before mounting the App
	*/
    plugins: [],
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
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(vue|js)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/,
                    options: {
                        formatter: require('eslint-friendly-formatter')
                    }
                });
            }
        }
    },
    env:{}
};
