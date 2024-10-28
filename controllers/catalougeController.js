
function lastAdded(){
    // code here
}

function mostPopular(){
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

function random(){
    // code here
}

function sortAge(){
    // code here
}

function sortGender(){
    // code here
}

function sortColour(){
    // code here
}

function sortNameAlphabetical(){
    let cats = model.data.cat;

    cats.sort((a,b) => {
        if (a.name < b.name) return -1; //a er før b
        if (a.name > b.name) return 1; // a er etter b
        return 0; // hvis a og b er like
    });
    return cats;
}

function sortNameReverse(){
    // code here
}

function sortBreed(){
    // code here
}
