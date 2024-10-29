function addNewUser() {
    if (validateInput()) {
        createAndAddUser();
        resetInputs();
        model.app.currentPage = "login"; //?
    }
    updateView();
}

function createAndAddUser() {
    let signUp = model.input.signUp;
    let newUser = {
        username: signUp.username,
        id: model.data.user.length + 1,
        email: signUp.email,
        password: signUp.password,
    };
    model.data.user.push(newUser);
}

function validatePassword() {
    let signUp = model.input.signUp;

    if (signUp.password === signUp.repeatPassword) {
        return true;
    } else {
        return false;
    }
}

function validateSignUpFields() {
    let signUp = model.input.signUp;

    if (!signUp.username || !signUp.email || !signUp.password || !signUp.repeatPassword) {
        return true;
    } else {
        return false;
    }
}

function validateInput() {
    if (validateSignUpFields()) {
        model.app.errorMessage = "Husk å fylle inn alle felter";
        return false;
    } else if (validatePassword()) {
        return true;
    } else {
        model.app.errorMessage = "Passord matcher ikke";
        return false;
    }
}

function resetInputs() {
    model.input.signUp.username = "";
    model.input.signUp.email = "";
    model.input.signUp.password = "";
    model.input.signUp.repeatPassword = "";
}
