const newsRouter = require('./news.route');
const sitesRouter = require('./sites.route');
const coursesRouter = require('./courses.route');

function route(app) {
    app.use('/course', coursesRouter);
    // clients call server/news
    // app.get('/news',(request, response)=>{
    //     response.render('Pages/news');
    // });
    app.use('/news', newsRouter);

    // clients call server/
    // app.get('/',(request, response)=>{
    //     response.render('Pages/home');
    // });
    app.use('/', sitesRouter);
}

module.exports = route;
