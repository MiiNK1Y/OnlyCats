
// KAMILLA

function updateAddUserView() {
    let html = /* HTML */`
    ${viewNavigationBar()}
        <div class="addUserContainer">
            <div>Lag ny bruker</div>
            <div class="addUserbox">
                <div>Brukernavn:</div>
                <input placeholder="Ditt brukernavn"/>
                <div>Mailadresse:</div>
                <input placeholder="Din mailadresse"/>
                <div>Passord:</div>
                <input placeholder="Ditt passord"/>
                <input placeholder="Gjenta passord"/>
            </div>
            <div> <button onclick="addUser()">Lag ny bruker</button> </div>
        </div>
    `;
    return html;
}
