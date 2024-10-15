updateView();
function updateView() {
    model.app.html.innerHTML = /*HTML*/ `
        ${viewNavigationBar()}
    `;
}

function main() {
    // here we get the content to show,
    // based on what page we are viewing.
    
    // logic goes here to check what to show.
}