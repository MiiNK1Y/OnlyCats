

function ViewNavBar(){
    model.app.html.innerHTML = /*HTML*/`
    <div id="navbar">
        <button class="home">Hjem</button>
        <button class="catalogue">Kattalog</button>
        <input id="search" type="text" />
        <button class="login">Logg på</button>
        <button class="new_user">Lag ny bruker</button>
    </div>
`;
}