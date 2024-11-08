// TODO:
// - set the search input in the model.
// - create a "searching?" bool in the model to to set if the result-card should show or not.
//      - when something is typed in the search-bar, the model is set to true, and false when empty.
//      - the card should only show if there is a result for the given query.

function analyzeInput() {
    const input = model.input.search;
    const convertInput = Number(input);
    console.log("searching: ", input);
    console.log("converted value: ", convertInput);
    if (isNaN(convertInput)) {
        console.log("not a number, setting string...");
        queryWithString(input);
    } else if (convertInput === 0) {
        console.log("empty, removed card...")
    } else {
        console.log("the input is a number, remaining a number...");
        queryWithNumber(convertInput);
    }

    model.app.isSearching = (model.input.search === "") ? true : false;
    updateView();
    document.getElementById("search").focus();
    document.getElementById("search").value = model.input.search;
}

function queryWithNumber(num) {
    let strNum = String(num);
    const birthdayResult = model.data.cat.filter(c => formatBirthday(String(c.birthday)).includes(strNum));
    const ratingResult = model.data.cat.filter(c => String(c.rating).includes(strNum));
    let result;
    if (birthdayResult.length > 0 && ratingResult.length > 0) {
        const combine = birthdayResult.concat(ratingResult);
        result = combine.filter((obj1, i, arr) => arr.findIndex(obj2 => (obj2.id === obj1.id)) === i);
    } else if (birthdayResult.length > 0) {
        result = birthdayResult;
    } else if (ratingResult.length > 0) {
        result = ratingResult;
    }

    console.log("\nThis was found in the query\n", result);
    queryResultView(result);
}

function queryWithString(str) {
    console.log("filtering with: ", str);
    const nameResult = model.data.cat.filter(c => c.name.includes(str));
    const genderResult = model.data.cat.filter(c => c.gender.includes(str));
    let result;
    if (nameResult.length > 0 && genderResult.length > 0) {
        const combine = nameResult.concat(genderResult);
        result = combine.filter((obj1, i, arr) => arr.findIndex(obj2 => (obj2.id === obj1.id)) === i);
    } else if (nameResult.length > 0) {
        result = nameResult;
    } else if (genderResult.length > 0) {
        result = genderResult;
    }

    console.log("\nThis was found in the query\n", result);
    queryResultView(result);
}

// some view-code to pass to the site when a result is found
function queryResultView(items) {
    if (items === undefined) {
        model.data.searchResult = "";
    } else {
        console.log("building result...")
        const item = (i) => {
            return /*HTML*/`
                <div class="query_item" onclick="viewCatCard(${i.id})">
                    <img src="${i.photo}/main.jpg" />
                    ${i.name}<br>
                    ${formatBirthday(i.birthday)}<br>
                    ${i.rating} / 10
                </div>
            `;
        }

        model.data.searchResult = /*HTML*/`
            <div class="searching_card_wrapper">
                <div class="header">
                    <h1>Resultater</h1>
                    <button onclick="closeSearch()">x</button>
                </div>
                <div class="searching_card">
        `;

        for (const cat of items) {
            model.data.searchResult += /*HTML*/`
                ${item(cat)}
            `;
        }

        model.data.searchResult += "</div></div>";
    }
}

function closeSearch() {
    model.app.isSearching = false;
    model.input.search = "";
    model.data.searchResult = "";
    updateView();
}
