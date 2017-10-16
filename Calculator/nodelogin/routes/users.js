var express = require('express');
var router = express.Router();



/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/doLogin', function (req, res) {
console.log(req.body.num1)
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);
    var result = num1 + num2;

    res.json({
        value: result
    });
});

router.post('/doSub', function (req, res) {
    //console.log(req.body.num1)
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);
    var result = num1-num2;

    res.json({
        value: result
    });
});

router.post('/doMul', function (req, res) {
    //console.log(req.body.num1)
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);
    var result = num1*num2;
    console.log(result)

    res.json({
        value: result
    });
});

router.post('/doDiv', function (req, res) {
  //  console.log(req.body.num1)
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);
    var result = num1/num2;

    res.json({
        value: result
    });
});

module.exports = router;
