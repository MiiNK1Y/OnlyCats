function viewNavigationBar() {
    html = /*HTML*/`
        <div id="navbar">
            <button class="home" onclick="homePage()">Hjem</button>
            <button class="catalogue" onclick="viewCataloguePage()">Kattalog</button>
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
            <button class="login" onclick="viewLoginPage()">Logg på</button>
            <button class="new_user" onclick="viewNewUserPage()">Lag ny bruker</button>
        `;
    } else {
        userIndex = model.data.user.findIndex(a => a.id === user);
        userPicture = model.data.user[userIndex].photo;
        html = /*HTML*/`
            <img src="${userPicture}" />
            <button onclick="viewProfilePage()">Profil</button>
        `;
    }

    return html;
}
