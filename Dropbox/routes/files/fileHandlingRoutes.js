

var config = require('../../config/config'),
    upload = require('multer')({dest: config.uploadDir}),
    fileHandlingRoutes = require('express').Router(),
    fs = require('fs'),
    path = require('path');


fileHandlingRoutes.post('/upload', upload.single('file'), function(req, res) {
    var homeDir = path.join(config.homeDir, req.csession.email, req.file.originalname);
   console.log(homeDir);
    fs.createReadStream(req.file.path).pipe(fs.createWriteStream(homeDir));
    fs.unlink(req.file.path, function(err) {
        if(err) {
            return res.send("An error occured");
        }

        return res.send("file uploaded successfully!!");
    });
});

fileHandlingRoutes.get(/\/myfiles\/[.+\/]*/, function(req, res) {
    var dir = path.join(process.cwd(), 'home', req.csession.email, req.path.replace("/myfiles", ""));
    fs.readdir(dir, function(err, files){
        if(err) {
            console.log(err);
            return res.status(404);
        }
        var results = [];
        files.forEach(function(file){
            results.push({
                name: file,
                path: req.path + file
            });
        });
        res.json(results);
    });
});

fileHandlingRoutes.get('/share', function(req, res) {

});

fileHandlingRoutes.delete('/delete', function(req, res){
   var deleteDir = path.join(process.cwd(), 'home', req.csession.email, req.body.path.replace("myfiles/", ""));
   console.log();
   console.log(deleteDir);
   if(fs.existsSync(deleteDir)) {
       fs.unlink(deleteDir, function(err) {
            if(err) {
                return res.send("An Error occured!!");
            }
            res.status(200);
            res.send("FIle Deleted successfully");
       });
   } else {
       res.status(404);
       res.send("File not found!!");
   }


});

module.exports = fileHandlingRoutes;
