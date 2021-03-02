var express = require('express');
var router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/:plug', newsController.show);
// always invoked
// router.use(newsController.index); //or
router.use('/', newsController.index);

module.exports = router;

// router.use will check from the first one to the last so '/' should be put at last router.use
