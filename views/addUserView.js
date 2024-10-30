function addUserView() {
    let html = /* HTML */ `
        <div class="login_container">
            <h1>Lag ny bruker</h1>
            <div class="login_box">
                <div>Brukernavn:</div>
                <input
                    placeholder="Ditt brukernavn"
                    onchange="model.input.signUp.username = this.value"
                    value="${model.input.signUp.username ?? ""}"
                />
                <h2>Mailadresse:</h2>
                <input 
                    placeholder="Din mailadresse" 
                    onchange="model.input.signUp.email = this.value" 
                    value="${model.input.signUp.email ?? ""}" 
                />
                <h2>Passord:</h2>
                <input 
                    placeholder="Ditt passord"
                    onchange="model.input.signUp.password = this.value"
                    value="${model.input.signUp.password ?? ""}"
                />
                <input
                    placeholder="Gjenta passord"
                    onchange="model.input.signUp.repeatPassword = this.value"
                    value="${model.input.signUp.repeatPassword ?? ""}"
                />
            </div>
            <button onclick="addNewUser()">Lag ny bruker</button>
            <div class="input_error">${model.app.errorMessage}</div>
        </div>
    `;

    return html;
}
