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
                    <div class="card_main_image">
                        <img src="${cat.photo}/main.jpg" />
                    </div>
                    <div class="text_container">
                        <div class="header">
                            ${cat.name}
                            ${cat.rating} / 10
                        </div>
                        <div class="horizontal_break"></div>
                        <div class="specs">
                            Fødselsdato: ${cat.birthday}<br>
                            Kjønn: ${cat.gender}<br>
                            Rase: ${cat.race}<br>
                            Farge: ${cat.color}<br>
                            Pelslengde: ${cat.furLength}<br>
                            Litt om katten: ${cat.about}
                        </div>
                        <div class="card_bottom">
                            Tilhører:
                            <button onclick="enableRating(${cat.id})">Vurder katt</button>
                        </div>
                    </div>
                    <button class="close_cat_card" onclick="closeCatCardView()">x</button>
                </div>
            </div>
        `;
    } else {
        return "";
    }
}
