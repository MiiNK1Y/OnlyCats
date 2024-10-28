function viewCatRateCard(){
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
                                <div>Gi din vurdering til CAT NAME</div>
                                 </div>
                            <button onclick="selectRating()">1</button>
                            <button onclick="selectRating()">2</button>
                            <button onclick="selectRating()">3</button>
                            <button onclick="selectRating()">4</button>
                            <button onclick="selectRating()">5</button>
                            <button onclick="selectRating()">6</button>
                            <button onclick="selectRating()">7</button>
                            <button onclick="selectRating()">8</button>
                            <button onclick="selectRating()">9</button>
                            <button onclick="selectRating()">10</button>
                                </div> 
                                <button onclick="rateCat()"> Vurder katt </button>
                            </div>
                        </div> 
                    </div>
                    <div onclick="goRight()" style="cursor: pointer;"> ► </div> <!-- Arrow på utsiden av card (se slides)-->
                </div>
    `;
    return html;
}


















