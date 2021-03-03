var express = require('express');
var router = express.Router();

const sitesController = require('../app/controllers/SitesController');

router.get('/search', sitesController.search);
// always invoked
// router.use(sitesController.index); //or
router.get('/', sitesController.index);
router.get('/home', sitesController.index);

module.exports = router;

// router.use will check from the first one to the last so '/' should be put at last router.use
