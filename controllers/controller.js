
// functionality ------------------------------------------


function signIn() {
    model.app.currentPage ="home";
    updateView();
}

function logOut(){
    model.app.currentUser = null;
    model.app.currentPage = "home"
    updateView();
}

function viewLoginPage() {
    model.app.currentError = "";
    model.app.currentPage = "login";
    updateView();
}

function viewNewUserPage() {
    model.app.currentError = "";
    model.app.currentPage = "newUserPage";
    updateView();
}


function homePage(){
    model.app.currentPage = "home";
    updateView();
}



function compileRating() {
    // code here
}


function viewProfilePage() {
    model.app.currentPage = "profilePage";
    updateView();
}



function search() {
    // code here
}

function viewCatalogue() {
    model.app.currentPage = "catalogue";
    updateView();
}

