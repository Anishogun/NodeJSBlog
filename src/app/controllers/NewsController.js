class NewsController {
    // [GET] "/news"
    index(request, response) {
        response.render('Pages/news');
    }

    show(request, response) {
        response.send('Pages/news:plug');
    }
}

module.exports = new NewsController();
