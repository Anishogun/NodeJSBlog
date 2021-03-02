class SitesController{
    
    // [GET] /
    index(request,response){
        response.render("Pages/home");
    }

    // [GET] /search
    search(request,response){
        response.render("Pages/search");
    }
}

module.exports = new SitesController;
