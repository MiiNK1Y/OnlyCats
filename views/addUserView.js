function addUserView() {
    let html = /* HTML */ `
        <div class="addUserContainer">
            <div>Lag ny bruker</div>
            <div class="addUserbox">
                <div>Brukernavn:</div>
                <input placeholder="Ditt brukernavn" onchange="model.input.signUp.username = this.value" />
                <div>Mailadresse:</div>
                <input placeholder="Din mailadresse" onchange="model.input.signUp.email = this.value" />
                <div>Passord:</div>
                <input placeholder="Ditt passord" onchange="model.input.signUp.password = this.value" />
                <input placeholder="Gjenta passord" onchange="model.input.signUp.repeatPassword = this.value" />
            </div>
            <div><button onclick="addNewUser()">Lag ny bruker</button></div>
            <div>${model.app.errorMessage}</div>
        </div>
    `;

    return html;
}
