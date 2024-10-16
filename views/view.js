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
    return homeView();
}