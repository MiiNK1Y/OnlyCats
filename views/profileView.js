
// BETHINA

function viewProfile() {
    let html = /*HTML*/`
    
    <div class="userContainer" style="color: white;">
        
        <div class= "userPhotoContainer"> 
            <div class="profilePhoto"> Profilbilde </div>
            <div> <button onclick="editProfile()"> Rediger profil </button> </div>
            <div> <button onclick="addCat()"> Legg til ny katt </button> </div>
        </div>

        <div class="userTxtContainer">
            <div> @brukernavn </div>
            <hr>
            <div class="bio"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <br><br>
            <div> 
                @brukernavns katter: 
            </div>
            <hr>
            
            ${printUsersCats()}
            
        </div>
        
        <br><br>

        <div class="reviewContainer">
            <div class="reviewHeader"> Dine vurderinger </div>

            <div class="reviewBody">
                ${printUserReviews()}
            </div>

        </div>  

    </div>

    `;
    return html;
}

function printUsersCats() {
    const userID = model.app.currentUser;
    const indexOfUser = model.data.user.findIndex(user => user.id === userID);
    const cats = model.data.user[indexOfUser].cats;

    let html = '';
    for (let i = 0; i < cats.length; i++) {

        // finding the cat
        const cat = cats[i];
        const indexOfCats = model.data.cat.findIndex(c => c.id === cat);

        // getting the cat object
        const curCat = model.data.cat[indexOfCats];

        html += /*HTML*/ `
            <div class="usersCats">
                <div class="userCatPhoto"> <img src="${curCat.photo}/main.jpg"/> </div> 
                <div class="catNameScore">
                    <div> ${curCat.name} </div>
                    <div> ${curCat.rating} / 10 </div>
                </div>
            </div>
        `;
    }

    return html;
}

function printUserReviews() {
    const userID = model.app.currentUser; 
    let html = '';

    // Looper gjennom alle katter i modellen
    for (let i = 0; i < model.data.cat.length; i++) {
        const curCat = model.data.cat[i];

        // Filtrerer vurderinger som er gitt av currentUserID
        const userRatings = curCat.givenRatings.filter(rating => rating.userID === userID);

        // Hvis currentUserID har gitt en vurdering 
        if (userRatings.length > 0) {
            html += /*HTML*/ `
                <div class= "outerContainer">
                    `;
                    // Looper gjennom alle vurderinger som den nåværende brukeren har gitt
                    userRatings.forEach(rating => {

                        html += /*HTML*/ `
                            <div class="review">
                                <div> <img src="${curCat.photo}/main.jpg"/> </div>
                                <div> ${curCat.name} </div>
                                <div> ${rating.ratingGiven} / 10 </div>
                            </div>
                        `;
                    });
                    html += /*HTML*/ `
                </div>
            `;
        }
    }
    return html;
}

