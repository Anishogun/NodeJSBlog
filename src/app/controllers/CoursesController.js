const Course = require('../models/Course');

class CoursesController {
    // [GET] /course/:slug
    show(request, response, next) {
        Course.findOne({slug: request.params.slug})
            .lean()
            .then((course) =>{
                response.render('Pages/course',{course: course})
            })
            .catch(next);
    }
    // show(request, response) {
    //     response.send('Course detail:' + request.params.slug);
    // }
}

module.exports = new CoursesController();
