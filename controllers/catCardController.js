function closeCatCardView() {
    model.app.selectedCat = null;
    model.app.isRating = null;
    updateView();
}

function viewCatCard(id) {
    model.app.selectedCat = id;
    catCardView(id);
    updateView();
}

function enableRating(id) {
    model.app.isRating = true;
    catRateView(id)
    updateView();
}

