var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Lab4',
    message: 'This is the Lab4 homepage'
   });
  });
  /* GET users page. */
  router.get('/users', function(req, res, next) {
    res.render('users', {
      title: 'Lab4 Users',
      message: 'This is the Lab4 homepage'
    });
  });
    /* GET John page. */
    router.get('/john', function (req, res, next) {
      res.render('john', {
        title: 'John',
        message: 'I am Ryans father John, I work in the Change Management field as a consultant. I never stop watching sports when I am home'
      });
    });

/* GET Ann page. */
router.get('/ann', function (req, res, next) {
  res.render('ann', {
    title: 'Ann',
    message: 'this is Ryans mother Ann, I take care of my father with alzheimers. I love to watch fantasy netflix shows'
  });
});

/* GET Lindsay page. */
router.get('/lindsay', function (req, res, next) {
  res.render('lindsay', {
    title: 'Lindsay',
    message: 'I am Ryans older sister Lindsay, I am a pharmacist with a family of my own in the USA'
  });
});

/* GET Matthew page. */
router.get('/matthew', function (req, res, next) {
  res.render('matthew', {
    title: 'Matthew',
    message: 'I am Ryans younger brother Matt, I work at Georgian Hospital in HR. ' +
    'Also, Ryan and I watch the UFC and lift weights together'
  });
});

/* GET Jonathan page. */
router.get('/jonathan', function (req, res, next) {
  res.render('jonathan', {
    title: 'Jonathan',
    message: 'I am Ryans youngest brother Jonathan, I am a personal trainer in Ohio training to get my PhD in physical therapy'
  });
});

/* GET Ryan page. */
router.get('/ryan', function (req, res, next) {
  res.render('ryan', {
    title: 'Ryan',
    message: 'I am Ryan, a junior computer programmer, gamer, and lead guitarist'
});

});
module.exports = router;