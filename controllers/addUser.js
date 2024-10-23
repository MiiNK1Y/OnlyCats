function addNewUser() {
    let signUp = model.input.signUp;

    if (!signUp.username || !signUp.email || !signUp.password || !signUp.repeatPassword) {
        // Husk å fylle inn alle felter
        return;
    }
    if (signUp.password === signUp.repeatPassword) {
        let newUser = {
            username: signUp.username,
            id: model.data.user.length + 1,
            email: signUp.email,
            password: signUp.password,
        };
        model.data.user.push(newUser);

        signUp.username = "";
        signUp.email = "";
        signUp.password = "";
        signUp.repeatPassword = "";

        model.app.currentPage = "add user";
        updateView();
    } else {
        // ikke samme passord
    }
}
