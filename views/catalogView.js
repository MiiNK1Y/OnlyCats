function catalog() {
    function catalogElement(rating, img, name) {
        let html = /*HTML*/`
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
    <div class="home_container">
    <h1>Kattalog!</h1>
    <div class="header_underline"></div>
        <div class="top-cats_container_wrapper">
            <div class="top-cats_container">
                ${catalog()}
            </div>
        </div>
    </div>
    `;
