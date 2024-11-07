function catCardView(id) {
    model.app.selectedCat = id;

    if (id !== null && model.app.isRating) {
        return catRateView(id);

    } else if (id !== null) {
        model.app.selectedCat = id;
        let cat = model.data.cat.find(cat => cat.id === id);

        return `
            <div class="outer_card_container floating">
                <div class="card">
                    <button class="close_cat_card" onclick="closeCatCardView()">&#10005;</button>
                    <div class="card_content">
                        <div class="card_main_image">
                            <img src="${cat.photo}/main.jpg" />
                        </div>
                        <div class="text_container">
                            <div class="header">
                                ${cat.name}
                                <div class="rating">${cat.rating}</div> / 10
                            </div>
                            <div class="horizontal_break"></div>
                            <div class="specs">
                                <u><strong>Fødselsdato</strong></u>: ${cat.birthday}<br>
                                <u><strong>Kjønn</strong></u>: ${cat.gender}<br><br>
                                <u><strong>Rase</strong></u>: ${cat.race}<br>
                                <u><strong>Farge</strong></u>: ${cat.color}<br>
                                <u><strong>Pelslengde</strong></u>: ${cat.furLength}<br><br>
                                <u><strong>Litt om katten</strong></u>: ${cat.about}<br><br>
                            </div>
                            <div class="card_bottom">
                                <u><strong>Tilhører</strong></u>: <div class="owner_of">${ownerOf(cat.id)}</div>
                                <button class="rate" onclick="enableRating(${cat.id})">Vurder katt</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        return "";
    }
}

function ownerOf(cat) {
    for (const user of model.data.user) {
        for (const c of user.cats) {
            if (c === cat) {
                return user.username;
            }
        }
    }
}
