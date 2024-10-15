
function updateAddCatView() {
    model.app.html.innerHTML = /* HTML */ `
    
        <div class="addCatContainer">
            <div class="addCatPicBox">
                <label for="avatar">Legg til bilder:</label>
                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
            </div>
            <div class="addCatBox">
                <div><input placeholder="Kattens navn:"/></div>
                <br>
                <div><input placeholder="Fødselsdato:"/></div>
                <br>
                <div><input placeholder="Kjønn"/></div>
                <br>
                <div><input placeholder="Rase"/></div>
                <br>
                <div><input placeholder="Farge"/></div>
                <br>
                <div><input placeholder="Pelslengde:"/></div>
            
                <br>
                <div><input placeholder="Fortell oss litt om katten din!:"/></div>
                <br>
            </div>
            <div> <button onclick="addCat()">Legg til</button> </div>
        </div>
        `;
    }