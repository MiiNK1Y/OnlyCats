function mostPopular() {
    let cats = model.data.cat;

    cats.sort((a, b) => {
        if (a.givenRatings > b.givenRatings) {
            return -1; // hvis a er høyest, plasseres den før b
        } else if (a.givenRatings < b.givenRatings) {
            return 1; // hvis b er høyest +plasseres den før a
        } else {
            return 0; // hvis de er like gjøres det ingenting
        }
    });
    return cats;
}


function sortNameAlphabetical() {
    let sortedCats = cats.sort((a, b) => b.rating - a.rating);
}


function setSortBy(type) { // sorting type goes here...
    model.app.cataloguePage.sort.by = type;
    switch (type) {
        case "name":
            break;
        case "age":
            break;
    }
}


function catalogueSorted() {
    const cats = model.data.cat;
    return cats.sort((a, b) => a.name.localeCompare(b.name));
}


function viewCataloguePage() {
    model.app.currentPage = "catalogue";
    updateView();
}
