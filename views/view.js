updateView();
function updateView() {
    model.app.html.innerHTML = /*HTML*/ `
        ${viewNavigationBar()}
        ${mainBody()}
    `;
}

function mainBody() {
    const curView = model.app.currentPage;
    switch (curView) {
        case "home":
            return homeView();
        case "login":
            return loginView();
        case "add user":
            return updateAddUserView();
        case "profilePage":
            return viewProfile();
        case "catalogue":
            return viewCatalogue();
    }
}

