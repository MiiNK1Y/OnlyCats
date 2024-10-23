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
            <button>Sist lagt til</button>
            <button>Mest populær</button>
            <button>Tilfeldig</button>
            <button>Alder</button>
            <button>Kjønn</button>
            <button>Farge</button>
            <button>Navn A-Å</button>
            <button>Navn Å-A</button>
            <button>Rase</button>
        </div> 
        <div class="catalogue_container">
        <h1>Kattalog!</h1>
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

