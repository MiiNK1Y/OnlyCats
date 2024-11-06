function signIn() {
    model.app.currentPage = "home";
    updateView();
}

function logOut() {
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

function homePage() {
    model.app.currentPage = "home";
    updateView();
}

function viewProfilePage() {
    model.app.currentPage = "profilePage";
    updateView();
}

function viewCatalogue() {
    model.app.currentPage = "catalogue";
    updateView();
}

function viewHomeButton() {
    model.app.currentPage = "home";
}

function viewProfileButton() {
    model.app.currentPage = "profilePage";
}

function viewNewUserPage() {
    model.app.currentPage = "newUserPage";
    updateView();
}

function closeCatCardView() {
    model.app.selectedCat = null;
    model.app.isRating = null;
    updateView();
}

function viewCatCard(id) {
    model.app.selectedCat = id;
    catCardView(id);
    updateView();
}

function enableRating(id) {
    model.app.isRating = true;
    catRateView(id)
    updateView();
}

