function catalogue() {
    function catalogueElement(img, name, id) {
        let html = /*HTML*/`
            <div class="catalogue_item" style: z-index: 1;>
                <div class="top-cats_img-container" onclick="viewCatCard(${id})">
                    <img src="${img}/main.jpg" />
                </div>
                <div class="name">${name}</div>
            </div>
        `;

        return html;
    };

    let cats = model.data.cat;
    //let cats = catalogueSorted();
    let html = "";

    for (let i = 0; i < cats.length; i++) { // limit cap the cats, wait for more cats to be added in dirs.
        const img = cats[i].photo;
        const name = cats[i].name;
        const id = cats[i].id;

        html += catalogueElement(img, name, id);
    }

    return html;
}

function viewCatalogue() {
    const html = /*HTML*/`
        <div class="catalogue-view_container">
            <div class="filter_buttons">
                Sorter etter:
                <button onclick="lastAdded()">Sist lagt til</button>
                <button onclick="mostPopular()">Mest populær</button>
                <button onclick="random()">Tilfeldig</button>
                <button onclick="sortAge()">Alder</button>
                <button onclick="sortGender()">Kjønn</button>
                <button onclick="sortColour()">Farge</button>
                <button onclick="sortNameAlphabetical()">Navn A-Å</button>
                <button onclick="sortNameReverse()">Navn Å-A</button>
                <button onclick="sortBreed()">Rase</button>
            </div> 
            <div class="catalogue_container">
                ${catalogue()}
            </div>
            ${catCardView(model.app.selectedCat)}
        </div>
    `;

    return html;
}

