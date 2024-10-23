function catalogue() {
    function catalogueElement(img, name) {
        let html = /*HTML*/`
            <div>
                <div class="catalogue_container">
                    <div class="catalogue_img-container">
                        <img src="${img}/main.jpg" />
                    </div>
                    <div class="name">${name}</div>
                </div>
            </div>
        `;

        return html;
    };

    let cats = model.data.cat;
    let html = "";

    for (let i = 0; i < cats.length; i++) { // limit cap the cats, wait for more cats to be added in dirs.
        const img = cats[i].photo;
        const name = cats[i].name;

        html += catalogueElement(img, name);
    }

    return html;
}

function viewCatalogue() {
    const html = /*HTML*/`
        <div class="filter_buttons">
            <div> Sorter etter:
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
        <h1>Kattalog</h1>
        <div class="header_underline"></div>
            <div class="top-cats_container_wrapper">
                <div class="cats_container">
                    ${catalogue()}
                </div>
            </div>
        </div>
    `;

    return html;
}

