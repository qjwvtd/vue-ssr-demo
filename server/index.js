const express = require("express");
const bodyParser = require("body-parser");
const session = require('express-session');

const http = require("http");
const https = require("https");
const fs = require("fs");

const { Nuxt, Builder } = require("nuxt");
const app = express();
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 3000;
const router = require("./router");


// Import and Set Nuxt.js options
const config = require("../nuxt.config.js");
config.dev = !(process.env.NODE_ENV === "production");

// Configuare https
const httpsOption = {
	key: fs.readFileSync("./server/keys/2329317_www.b91.com.key","utf8"),
	cert: fs.readFileSync("./server/keys/2329317_www.b91.com.pem","utf8")
}

async function start() {
	// Init Nuxt.js
	const nuxt = new Nuxt(config);

	// Build only in dev mode
	if (config.dev) {
		const builder = new Builder(nuxt);
		await builder.build();
	}
	// bodyparser
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json());
	// session
	app.use(session({
		name: 'b91token',
		secret: 'AsecretB91-',
		resave: true,
		rolling: true,
		saveUninitialized: false,
	}))
	app.use(router);

	// Give nuxt middleware to express
	app.use(nuxt.render);


	//一般服务
	// Listen the server
	//app.set("port", port);
	//app.listen(port, host);
	//console.log("Server listening on http://127.0.0.1:" + port); // eslint-disable-line no-console
	
	//ssl服务
	const httpPort = port;
	const httpsPort = +(port + 1);
	const httpServer = http.createServer(app);
	const httpsServer = https.createServer(httpsOption, app);
	httpServer.listen(httpPort, host, function() {
		console.log('HTTP Server is running on: http://'+ host +':' + httpPort);
	});
	httpsServer.listen(httpsPort, host, function() {
		console.log('HTTPS Server is running on: https://'+ host +':' + httpsPort);
	});
}
console.log('Welcome to my app, the service is starting, please wait...');
start();
