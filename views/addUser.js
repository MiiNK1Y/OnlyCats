
// KAMILLA

function updateAddUserView() {
    model.app.html.innerHTML = /* HTML */`
        <div class="addUserContainer">
            <div>Lag ny bruker</div>
            <div class="addUserbox">
                <div>Brukernavn:</div>
                <div><input placeholder="Ditt brukernavn"/></div>
                <br>
                <div>Mailadresse:</div>
                <div><input placeholder="Din mailadresse"/></div>
                <br>
                <div>Passord:</div>
                <div><input placeholder="Ditt passord"/></div>
                <br>
                <div><input placeholder="Gjenta passord"/></div>
                <br>
            </div>
            <div> <button onclick="addUser()">Lag ny bruker</button> </div>
        </div>
    `;
}
