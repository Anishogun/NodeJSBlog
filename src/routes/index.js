const newsRouter = require('./news.route');
const sitesRouter = require('./sites.route');

function route(app) {
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

  // app.post('/news',(request, response)=>{
  //     console.log(request.body.k);
  //     response.render('Pages/news');
  // });
  // app.get('/home',(request, response)=>{
  //     // console.log(request.query);
  //     response.render('Pages/home');
  // });
}

module.exports = route;
