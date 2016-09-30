/**
 * Created by Ryan on 2016-09-29.
 */
var express = require('express');
var router = express.Router();

/* GET John listing. */
router.get('/john', function(req, res, next) {
    // res.send('respond with a resource');

    //load john.ejs and pass-in the john array
    res.render('John', {
        title: 'John',     //the title name

    });

});
    module.exports = router;
