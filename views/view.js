updateView();
function updateView() {
    model.app.html.innerHTML = /*HTML*/ `
        ${viewNavigationBar()}
        ${mainBody()}
    `;
}

// this validates what to show in the main part of the site.
function mainBody() {
    // here we get the content to show,
    // based on what page we are viewing.
    
    // logic goes here to check what to show.

    if(model.app.currentPage == "home"){
        homeView();
    }else if (model.app.currentPage == "login"){
        loginView();
    }else if (model.app.currentPage == "add user"){
        updateAddUserView();
    }else if (model.app.currentPage == "user profile"){
        viewProfile();
    }else if (model.app.currentPage == "catalogue"){
        viewCatalogue();
    }


}