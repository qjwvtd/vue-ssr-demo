
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
	** Global CSS
	*/
	css: [],
	/*
	** Global js
	*/
	script: [
		{type:'text/javascript',src: ""}
	],
	/*
	** Plugins to load before mounting the App
	*/
	plugins: [],
	/*
	** Nuxt.js modules
	*/
	modules: [],
	/*
	** Build configuration
	*/
	build: {
		/*
		** You can extend webpack config here
		*/
		extend(config, ctx) {},
		/**
		 * 
		 */
		plugins:[],
		analyze: false,//是否开启浏览器构建性能分析
        optimization:{
            minimize: true,
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

	},
	env:{}
}
