var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'Home' });
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', {title: 'Home' });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', {title: 'About' });
});

// /* GET Movies page. */
// router.get('/movies', function(req, res, next) {
//   res.render('index', {title: 'Movies' });
// });

/* GET Setting page. */
router.get('/setting', function(req, res, next) {
  res.render('index', {title: 'Setting' });
});

/* GET Activities page. */
router.get('/activities', function(req, res, next) {
  res.render('index', {title: 'Activities' });
});
/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('index', {title: 'Contact' });
});
module.exports = router;
