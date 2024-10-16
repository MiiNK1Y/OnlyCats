
// BETHINA

function viewProfile(){   
    let html = /*HTML*/`
    ${viewNavigationBar()}

    <div class="userContainer">
        
        <div class= "userPhotoContainer"> 
            <div class="profilePhoto"> Her kommer profilbilde </div>
            <div> <button> Rediger profil </button> </div>
            <div> <button> Legg til ny katt </button> </div>
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
            <br><br>
            <div class="usersCats">
                <div class="userCatPhoto"> IMG </div> 
                <div class="catNameScore">
                    <div> Kattens navn </div>
                    <div> 9/10 </div>
                </div>
            </div>
            <br><br>
            <div class="usersCats">
                <div class="userCatPhoto"> IMG </div> 
                <div class="catNameScore">
                    <div> Kattens navn </div>
                    <div> 9/10 </div>
                </div>
            </div>
            <br><br>
            <div class="usersCats">
                <div class="userCatPhoto"> IMG </div> 
                <div class="catNameScore">
                    <div> Kattens navn </div>
                    <div> 9/10 </div>
                </div>
            </div>
        </div>

        <div class="reviewContainer">
            <div class="reviewHeader"> Dine vurderinger </div>

            <br><br>

            <div class="reviewBody">

                <div class="review"> 
                    <div class="reviewCatPhoto"> IMG </div>
                    <div> Kattens navn </div>
                    <div> 9/10 </div>
                </div>

                <div class="review"> 
                    <div class="reviewCatPhoto"> IMG </div>
                    <div> Kattens navn </div>
                    <div> 10/10 </div>
                </div>

                <div class="review"> 
                    <div class="reviewCatPhoto"> IMG </div>
                    <div> Kattens navn </div>
                    <div> 4/10 </div>
                </div>

                <div class="review"> 
                    <div class="reviewCatPhoto"> IMG </div>
                    <div> Kattens navn </div>
                    <div> 7/10 </div>
                </div>

                <div class="review"> 
                    <div class="reviewCatPhoto"> IMG </div>
                    <div> Kattens navn </div>
                    <div> 2/10 </div>
                </div>

            </div>

        </div>  

    </div>

    `;
    return html;
}