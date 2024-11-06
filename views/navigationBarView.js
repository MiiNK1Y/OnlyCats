function viewNavigationBar() {
    html = /*HTML*/`
        <div id="navbar">
            <button class="home" onclick="homePageButton()">Hjem</button>
            <button class="catalogue" onclick="cataloguePageButton()">Kattalog</button>
            <input id="search" type="text" placeholder="Søk" />
            ${userNavbar()}
        </div>
    `;

    return html;
}

function userNavbar() {
    let user = model.app.currentUser;

    if (user == null) {
        html = /*HTML*/`
            <button class="login" onclick="loginPageButton()">Logg på</button>
            <button class="new_user" onclick="newUserPageButton()">Lag ny bruker</button>
        `;
    } else {
        userPicture = model.data.user[model.app.currentUser].photo;
        userIndex = model.data.user.findIndex(a => a.id === user);
        userPicture = model.data.user[user].photo;
        html = /*HTML*/`
            <img src="${userPicture}" />
            <button onclick="profilePageButton()">Profil</button>
        `;
    }

    return html;
}
