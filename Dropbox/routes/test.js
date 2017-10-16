var testRouter = require('express').Router();

testRouter.get("/test", function(req, res){
    res.render('../views/signup.ejs');
});

module.exports = testRouter;