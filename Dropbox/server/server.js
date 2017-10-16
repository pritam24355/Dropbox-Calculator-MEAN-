var express = require('express'),
	routes = require('../routes'),
	config = require('../config/config'),
	path = require('path'),
	app = express(),
	fs = require('fs'),
	csession = require('client-sessions'),
	bodyparser = require('body-parser'),
	cors = require("cors");

if(!fs.existsSync(config.homeDir)) {
    fs.mkdirSync(config.homeDir);
}

app.use(cors({
	origin: "http://localhost:3000",
	allowedHeaders: ['Origin', 'Access-Control-Allow-Credentials', 'Content-Type'],
	credentials: true,
	allowedMethods: ['GET', 'POST', 'DELETE']
}));
app.use(csession(config.cookieOpts));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(process.cwd(), 'public')));

app.use('/', routes.home);
app.use('/', routes.signinRouter);
app.use('/', routes.fileHandlingRoutes);

app.use(function(req, res, next){
    if(req.path == "/") {
        return res.redirect("/home");
    }
    next();
});


app.listen(config.port, function(err) {
	if(err) {
		console.log("Error...");
		return;
	}

	console.log("Express server listening on " + config.port);
});