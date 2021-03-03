var express = require('express');
var router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/:plug', newsController.show);
// always invoked
// router.use(newsController.index); //or
router.get('/', newsController.index);

module.exports = router;

// router.use will check from the first one to the last so '/' should be put at last router.use
