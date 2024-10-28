function getMedian(ratings) {
    const rating = Object.values(ratings);
    let num = 0;
    for (const rate of rating) {
        num += (rate.ratingGiven);
    }

    const median = num / ratings.length;

    return median;
}

function setRatings() {
    let cats = Object.values(model.data.cat);
    for (const cat of cats) {
        cat.rating = getMedian(cat.givenRatings);
        console.log(cat.name, cat.rating);
    }

    updateView();
}

window.onload = () => {
    setTimeout(setRatings(), 500);
}
