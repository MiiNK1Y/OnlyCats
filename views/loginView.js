

// BETHINA

loginView()
function loginView(){
    model.app.html.innerHTML = /*HTML*/ `

        <div> NAVIGASJONS BAR HER </div>

        <div class="logInContainer">
            <div> Login </div>
            <div class="loginBox">
                <div> Brukernavn: </div>
                <div> <input placeholder="Ditt brukernavn"/> </div>
                <br>
                <div> Passord: </div>
                <div> <input placeholder="Ditt passord"/> </div>
                <br>
            </div>
            <div> <button onclick="signIn()"> Logg inn </button> </div>
        </div>

    `;

} 