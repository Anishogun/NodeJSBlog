var express = require('express');
var router = express.Router();

const coursesController = require('../app/controllers/CoursesController');

router.get('/:slug', coursesController.show);

module.exports = router;

// router.use will check from the first one to the last so '/' should be put at last router.use
