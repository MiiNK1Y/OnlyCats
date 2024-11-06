function signIn() {
    model.app.currentPage = "home";
    updateView();
}

function logOut() {
    model.app.currentUser = null;
    model.app.currentPage = "home"
    updateView();
}

function loginPageButton() {
    model.app.currentError = "";
    model.app.currentPage = "login";
    updateView();
}

function newUserPageButton() {
    model.app.currentError = "";
    model.app.currentPage = "newUserPage";
    updateView();
}

function addNewUserButton() {
    if (validateInput()) {
        createAndAddUser();
        resetInputs();
        model.app.currentPage = "home";
    }

    updateView();
}

function homePageButton() {
    model.app.currentPage = "home";
    updateView();
}

function profilePageButton() {
    model.app.selectedProfile = model.app.currentUser;
    model.app.currentPage = "profilePage";
    updateView();
}

function cataloguePageButton() {
    model.app.currentPage = "catalogue";
    updateView();
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

