function signIn() {
    let user = getUserByUsername(model.input.signIn.username)
    if(user != undefined && user.password === model.input.signIn.password) {
        model.app.currentPage = 'home'
        updateView();
    }
    else {
        model.app.errorMessage = 'Feil brukernavn eller passord';
        // updateView();
    }
}

function getUserByUsername(username) {
    let users = model.data.user;    
    for(let i = 0; i < users.length; i++) {
        if (users[i].username == username) {
            return users[i]
        }
    }
}
