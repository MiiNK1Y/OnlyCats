// TODO:
// - set the search input in the model.
// - create a "searching?" bool in the model to to set if the result-card should show or not.
//      - when something is typed in the search-bar, the model is set to true, and false when empty.
//      - the card should only show if there is a result for the given query.

function analyzeInput() {
    const input = model.input.search;
    const convertInput = Number(input);
    if (convertInput === NaN) {
        console.log("not a number, setting string...");
        queryWithString(convertInput);
    } else {
        console.log("the input is a number, remaining a number...");
        queryWithNumber(convertInput);
    }
}


function queryWithNumber(num) {
    const birthdayResult = model.data.cat.filter(c => c.birthday.includes(num));
    const ratingResult = model.data.cat.filter(c => c.rating.includes(num));
}

function queryWithString(str) {
    //
}

// some view-code to pass to the site when a result is found
function queryResultView() {
    //
}
