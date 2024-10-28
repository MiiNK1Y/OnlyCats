
function viewCatCard(){
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
                        <div> Kattens navn her </div>
                        <div> Score her </div>
                    </div>
                    <div class="cardTxt">
                        <p> Fødselsdato: </p> 
                        <p> Kjønn: </p> 
                        <br>
                        <p> Rase: </p> 
                        <p> Farge: </p> 
                        <p> Pelslengde: </p> 
                        <br>
                        <p> 
                            Kattens bio..............
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