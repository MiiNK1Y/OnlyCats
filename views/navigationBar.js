function viewNavigationBar(){
    html = /*HTML*/`
        <div id="navbar">
            <button class="home">Hjem</button>
            <button class="catalogue">Kattalog</button>
            <input id="search" type="text" placeholder="Søk" />
            ${userNavbar()}
        </div>
    `;

    return html;
}

function userNavbar() {
    user = model.app.currentUser;

    if (user == null) {
        html = /*HTML*/`
            <button class="login">Logg på</button>
            <button class="new_user">Lag ny bruker</button>
        `;
    } else {
        userPicture = model.data.user[model.app.currentUser].photo;
        html = /*HTML*/`
            <img src="${userPicture}" />
            <button>profile</button>
        `;
    }

    return html;
}
