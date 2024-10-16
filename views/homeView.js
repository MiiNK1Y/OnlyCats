function homeView(){
    let html = /*HTML*/`
    <div class="home_container">
        <h1>Topp Katter!</h1>
        <div class="header_underline"></div>
        <div class="top-cats_container_wrapper">
            <div class="top-cats_container">
                ${topTen()}
            </div>
        </div>
    </div>
    `;

    return html;
}


function topTen() {
    let topTenItemHtml = function(rating, img, name) {
       let html = /*HTML*/`
            <div class="top-ten-item_container">
                <div class="rating">${rating} / 10</div>
                <img src="${img}/main.jpg" />
                <div class="name">${name}</div>
            </div>
        `;

        return html;
    };

    let html = "";

    let cats = model.data.cat;
    let sortedCats = cats.sort((a, b) => b.rating - a.rating);

    // demo for sorting based on name instead of rating:
    //let sortedCats = cats.sort((a, b) => a.name.localeCompare(b.name));

    for (let i = 0; i < 6; i++) {

        // remember to include funcionality to check for top 3 cats
        // to give them stars above their images in the view.

        let rating = sortedCats[i].rating;
        let img = sortedCats[i].photo;
        let name = sortedCats[i].name;

        html += topTenItemHtml(rating, img, name);
    }

    return html;
}
