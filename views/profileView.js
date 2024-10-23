
// BETHINA

function viewProfile(){  
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

                <div class="review"> 
                    <div class="reviewCatPhoto"> IMG </div>
                    <div> Kattens navn </div>
                    <div> 9/10 </div>
                </div>
            </div>

        </div>  

    </div>

    `;
    return html;
}

const currentAccount = model.app.currentUser;
const indexOfUserID = function(){};

// henter brukers katter basert på bruker-ID
function getUserCats(currentAccount){
    return model.data.cat.filter(function(cat){ 
        return model.data.user.cats;
    })
}


function printUsersCats(userID){
    let html = '';
    let userCats = getUserCats(userID); // henter kattene til brukeren
    console.log(userCats);

    for (let i = 0; i < userCats.length; i++) {
        let cat = userCats[i];
        html += /*HTML*/ `
        <div class="usersCats">
                <div class="userCatPhoto"> <img src="${cat.photo}"/> </div> 
                <div class="catNameScore">
                    <div> ${cat.name} </div>
                    <div> ${cat.rating} / 10 </div>
                </div>
            </div>
        `;
    }
    return html;
}