
function catalog() {
    function catalogElement(img, name) {
        let html = /*HTML*/`
        <div class="filterButtons">
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
        </div>
            <div class="catalog_container">
                <div class="catalog_img-container">
                    <img src="${img}/main.jpg" />
                </div>
                <div class="name">${name}</div>
            </div>
        `;

        return html;
    };

    let cats = model.data.cat;
    
    let html = "";

    for (let i = 0; i < cats.length; i++) {
        let rating = cats[i].rating;
        let img = cats[i].photo;
        let name = cats[i].name;

        html += catalogElement(rating, img, name);
    }
    
    return html;
}

model.app.html.innerHTML = /*HTML*/ `
    <div class="catalog_container">
    <h1>Kattalog!</h1>
    <div class="header_underline"></div>
        <div class="top-cats_container_wrapper">
            <div class="top-cats_container">
                ${catalog()}
            </div>
        </div>
    </div>
    `;
