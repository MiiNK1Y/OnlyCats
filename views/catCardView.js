
// BETHINA

function catCardView(id) {
    if (id !== null) {
        model.app.selectedCat = id;
        let cat = model.data.cat.find(cat => cat.id === id);

        return `
            <div class="outer_card_container floating">
                <div class="card">
                    <div class="card_main_image">
                        <img src="${cat.photo}/main.jpg" />
                    </div>
                    <div class="text_container">
                        <div class="header">
                            ${cat.name}
                            ${cat.rating} / 10
                        </div>
                        <div class="horizontal_break"></div>
                        <div class="specs">
                            Fødselsdato: ${cat.birthday}<br>
                            Kjønn: ${cat.gender}<br>
                            Rase: ${cat.race}<br>
                            Farge: ${cat.color}<br>
                            Pelslengde: ${cat.furLength}<br>
                            Litt om katten: ${cat.about}
                        </div>
                        <div class="card_bottom">
                            Tilhører:
                            <button>Vurder katt</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        //return `
        //    <div class="outer_card_container floating" style: z-index: 10;>
        //        <div onclick="goLeft()" style="cursor: pointer;"> ◄ </div> <!-- Arrow på utsiden av card (se slides)-->
        //        <div class="card">
        //            <div class="cardIMGContainer">
        //                <img src="${cat.photo}/main.jpg" />
        //                <div class="imgRow">
        //                    Bilde row
        //                </div>
        //            </div>
        //            <div class="txtContainer"> 
        //                <div class="exitCard" onclick="exitCard()" style="cursor: pointer;" > ❌ </div>
        //                <div class="cardHeader"> 
        //                    <div> ${cat.name} </div>
        //                    <div> ${cat.rating} </div>
        //                </div>
        //                <div class="cardTxt">
        //                    <p> Fødselsdato: ${cat.birthday}</p> 
        //                    <p> Kjønn: ${cat.gender} </p> 
        //                    <br>
        //                    <p> Rase: ${cat.race} </p> 
        //                    <p> Farge: ${cat.color} </p> 
        //                    <p> Pelslengde: ${cat.furLength}</p> 
        //                    <br>
        //                    <p>
        //                        ${cat.about}
        //                    </p>
        //                    <div> 
        //                        Tilhører: 
        //                        <div onclick="viewAnotherUsersProfile()" style="cursor: pointer;"> 
        //                            <u> @brukernavn </u> 
        //                        </div>
        //                    </div> 
        //                    <button onclick="viewRatingCardButton()"> Vurder katt </button>
        //                </div>
        //            </div> 
        //        </div>
        //        <div onclick="goRight()" style="cursor: pointer;"> ► </div> <!-- Arrow på utsiden av card (se slides)-->
        //    </div>
        //`;
    } else {
        return "";
    }
}
