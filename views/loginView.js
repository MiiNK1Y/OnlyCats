function loginView(){
    let html = /*HTML*/ `
        <div class="login_container">
            <h1>Login</h1>
            <div class="login_box">
                <h2>Brukernavn:</h2>
                <input placeholder="Ditt brukernavn"/>
                <h2>Passord:</h2>
                <input type="password" placeholder="Ditt passord"/>
            </div>
            <button onclick="signIn()">Logg inn</button>
        </div>
    `;

    return html;
}
