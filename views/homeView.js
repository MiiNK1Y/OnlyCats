function homeView(){
    let html = /*HTML*/`
    <div class="home_container">
        <h3>Topp Katter!</h3>
        <div class="header_underline"></div>
        <div class="top-cats_container">
            ${topTen()}
        </div>
    </div>
    `;

    return html;
}

function topTen() {
    let topTenItemHtml = function(rating, img, name) {
       let html = /*HTML*/`
            <div class="top-ten-item_container">
                <div class="rating">${rating}</div>
                <img src="${img}" />
                <div class="name">${name}</div>
            </div>
        `;

        return html;
    };

    let cCat = model.data.cat;
    let html = "";

    for (let i = 0; i < 10; i++) {

        // remember to include funcionality to check for top 3 cats
        // to give them stars above their images in the view.

        let rating = cCat[i].rating;
        let img = cCat[i].photo;
        let name = cCat[i].name;

        html += topTenItemHtml(rating, img, name);
    }
}