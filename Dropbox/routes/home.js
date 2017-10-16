var home = require('express').Router();

// home.get("/home", function(req, res){
// 	if(!req.csession || !req.csession.email) {
// 		req.csession = {};
// 		return res.redirect("/signup");
// 	}
// 	res.render("../views/home.ejs");
// });

module.exports = home;

