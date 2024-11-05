
// BETHINA

function viewCatCard(id){
    model.app.selectedCat = id;
    let cat = model.data.cat.find(cat => cat.id === id);
 
    let html = /*HTML*/ `
        
        <div class="outerCardContainer"> 
            <div onclick="goLeft()" style="cursor: pointer;"> ◄ </div> <!-- Arrow på utsiden av card (se slides)-->
            <div class="card">
                <div class="cardIMGContainer">
                    <div> MAIN IMG </div>
                    <div class="imgRow">
                        Bilde row
                    </div>
                </div>
                <div class="txtContainer"> 
                    <div class="exitCard" onclick="exitCard()" style="cursor: pointer;" > ❌ </div>
                    <div class="cardHeader"> 
                        <div> ${cat.name} </div>
                        <div> ${cat.rating} </div>
                    </div>
                    <div class="cardTxt">
                        <p> Fødselsdato: ${cat.birthday}</p> 
                        <p> Kjønn: ${cat.gender} </p> 
                        <br>
                        <p> Rase: ${cat.race} </p> 
                        <p> Farge: ${cat.color} </p> 
                        <p> Pelslengde: ${cat.furLength}</p> 
                        <br>
                        <p> 
                            ${cat.about}
                        </p>
                        <div> 
                            Tilhører: 
                            <div onclick="viewAnotherUsersProfile()" style="cursor: pointer;"> 
                                <u> @brukernavn </u> 
                            </div>
                        </div> 
                        <button onclick="viewRatingCardButton()"> Vurder katt </button>
                    </div>
                </div> 
            </div>
            <div onclick="goRight()" style="cursor: pointer;"> ► </div> <!-- Arrow på utsiden av card (se slides)-->
        </div>
    
    `;
    return html;
}