var ejs = require("ejs"),
	mysql = require('./mysql'),
	signInRouter = require('express').Router(),
	path = require("path"),
	fs = require("fs"),
	config = require('../config/config'),
	parser = require('multer')();

signInRouter.get('/signup', function signup(req,res) {

	if(req.csession && req.csession.email) {
		return res.redirect("/home");
	}

	ejs.renderFile('./views/signup.ejs',function(err, result) {
	   // render on success
	   if (!err) {
	            res.end(result);
	   }
	   // render or error
	   else {
	            res.end('An error occurred');
	            console.log(err);
	   }
   });
});

signInRouter.post('/signup', parser.any(), function signup(req,res) {
	console.log(req.body);
	fs.mkdir(path.join(config.homeDir, req.body.email), 0o644, function(err) {
		create(req, res);
    });
});

signInRouter.post('/signin', parser.any(), function(req, res) {
	console.log(req.body);
	signIn(req, res);
});

signInRouter.get('/logout', function(req, res){
    delete req.csession.email;// invalidating session
    res.redirect("/");
});

signInRouter.get('/checkLogin', function (req, res) {
	console.log("Checking login");
	if(req.csession && req.csession.email) {
		return res.json({
			loggedIn: true
		});
	}

	res.status(401);
	res.end();
})


function signIn(req,res)
{
	// check user already exists
	var getUser="select * from users where email='"+req.body.email+"' and password=SHA2('" + req.body.password +"', 224)";

	mysql.fetchData(function(err,results){
		if(err || !results.length){
			delete req.csession.email;
			res.status(401);
			return res.end();
		}

		req.csession.email = results[0].email;
		res.json({result: "Ohk"});
	},getUser);
}

function getAllUsers(req,res)
{
	var getAllUsers = "select * from users";
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			if(results.length > 0){
				
				var rows = results;
				var jsonString = JSON.stringify(results);
				var jsonParse = JSON.parse(jsonString);
				
				console.log("Results Type: "+(typeof results));
				console.log("Result Element Type:"+(typeof rows[0].emailid));
				console.log("Results Stringify Type:"+(typeof jsonString));
				console.log("Results Parse Type:"+(typeof jsString));
				
				console.log("Results: "+(results));
				console.log("Result Element:"+(rows[0].emailid));
				console.log("Results Stringify:"+(jsonString));
				console.log("Results Parse:"+(jsonParse));
				
				ejs.renderFile('./views/successLogin.ejs',{data:jsonParse},function(err, result) {
			        // render on success
			        if (!err) {
			            res.end(result);
			        }
			        // render or error
			        else {
			            res.end('An error occurred');
			            console.log(err);
			        }
			    });
			}
			else {    
				
				console.log("No users found in database");
				ejs.renderFile('./views/failLogin.ejs',function(err, result) {
			        // render on success
			        if (!err) {
			            res.end(result);
			        }
			        // render or error
			        else {
			            res.end('An error occurred');
			            console.log(err);
			        }
			    });
			}
		}  
	},getAllUsers);
}

function create(req, res) {
	var putUser="INSERT INTO users (firstname, lastname, email, password) VALUES ('" + req.body.firstname + "', '" + req.body.lastname + "', '" + req.body.email + "', SHA2('" + req.body.password + "', 224));";
	console.log(putUser);
	mysql.insertData(function(err, results, fields) {
        req.csession.email = req.body.email;
		res.json({
			status: "Created"
		});
	}, putUser);
}

signInRouter.post('/logout', function(req, res){
	delete req.csession.email;
	res.json({
		message: "Logged Out!!!"
	});
});

module.exports = signInRouter;