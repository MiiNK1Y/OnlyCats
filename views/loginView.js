

// BETHINA

function loginView(){
    model.app.html.innerHTML = /*HTML*/ `
    ${viewNavigationBar()}
        <div class="logInContainer">
            <div> Login </div>
            <div class="loginBox">
                <div> Brukernavn: </div>
                <div> <input placeholder="Ditt brukernavn"/> </div>
                <div> Passord: </div>
                <div> <input placeholder="Ditt passord"/> </div>
            </div>
            <div> <button onclick="signIn()"> Logg inn </button> </div>
        </div>

    `;
} 