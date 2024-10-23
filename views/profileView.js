
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

        <div class="reviewContainer">
            <div class="reviewHeader"> Dine vurderinger </div>

            <br><br>  <!-- Loop med brukerens vurderinger ? -->

            <div class="reviewBody">
                ${printUserReview()}
            </div>

        </div>  

    </div>

    `;
    return html;
}

//const indexOfUserID = function(){};
//
//// henter brukers katter basert på bruker-ID
//function getUserCats(currentAccount){
//    return model.data.cat.filter(function(cat){ 
//        return model.data.user.cats;
//    })
//}


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

function printUserReview(){
    const userID = model.app.currentUser;
    const indexOfUser = model.data.user.findIndex(user => user.id === userID);
    const ratingsGiven = model.data.user[indexOfUser].ratingsGiven;

    let html = '';
    for (let i = 0; i < ratingsGiven.length; i++){
        const rating = ratingsgiven[i];
        const indexOfRating = model.data.ratingsGiven.findIndex(a => a.id === ratingsGiven)


        html += /*HTML*/ `
            <div class="review"> 
                    <div class="reviewCatPhoto"> IMG </div>
                    <div> Kattens navn </div>
                    <div> 9/10 </div>
            </div>
        `;
    }
    return html;
}