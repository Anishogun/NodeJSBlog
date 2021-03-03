const Course = require('../models/Course');
const {mutipleMongooseToObjects} = require('../../util/mongoose')

class SitesController {
    // [GET] /
    index(request, response, next) {
        // Course.find({}, function (err, courses) {
        //     if(!err){
        //         response.json(courses);
        //     } 
        //     else{
        //         response.status(400).json({error: 'ERROR!'});
        //     }
        // });
        // response.render('Pages/home');

        // always be mindful you only can do one res.send in your each REST block...
        // 
        Course.find({})
            .lean()
            .then(courses => response.render('Pages/home',{title: "HOME",courses}))
            .catch(next);
    }

    // [GET] /search
    search(request, response) {
        response.render('Pages/search');
    }
}

module.exports = new SitesController();
