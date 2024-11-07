function toggleRatingDemo() {
    model.app.demoMode = model.app.demoMode ? false : true;
    updateView();
}

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


// catalogue sorting types --------------------------------
function catalogueSortStandard() {
    console.log("sorting standard (last added, oldest first)");
    model.app.currentCatalogueSorting = "default";
    updateView();
}

function catalogueSortAlphabetical() {
    console.log("sorting alphabeticaly");
    model.app.currentCatalogueSorting = "alphabetical";
    updateView();
}

function catalogueSortAlphabeticalReverse() {
    console.log("sorting reverse alphabeticaly");
    model.app.currentCatalogueSorting = "alphabeticalReverse";
    updateView();
}

function catalogueSortAge() {
    console.log("sorting by age (oldest to youngest)");
    model.app.currentCatalogueSorting = "age";
    updateView();
}

function catalogueSortPopular() {
    console.log("sorting by popularity (higest first)");
    model.app.currentCatalogueSorting = "popularity";
    updateView();
}

function catalogueSortGender() {
    console.log("sorting by gender (ladies first)");
    model.app.currentCatalogueSorting = "gender";
    updateView();
}
