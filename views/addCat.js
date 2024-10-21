
function updateAddCatView() {
 
    let html = /* HTML */ `
    ${viewNavigationBar()}
        <div class="addCatContainer">
            <div class="addCatPicBox">
                <label for="avatar">Legg til bilder:</label> 
                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
            </div>
            <div class="addCatBox">
                <input placeholder="Kattens navn"/>
                <input placeholder="Fødselsdato"/>
                <input placeholder="Kjønn"/>
                <div><input placeholder="Rase"/>
                <div><input placeholder="Farge"/></div>
                <div><form>
                <select id="dropDown" name="Pelstype">
                    <option value="shortHair">Korthåret</option>
                    <option value="longHair">Langhåret</option>
                    <option value="hairLess">Hårløs</option>
                </select>
                </form></div>
                <div><input placeholder="Fortell oss litt om katten din!"/></div>
            </div>
            <div> <button onclick="addCat()">Legg til</button> </div>
        </div>
        `;
        return html;
    }
