function viewProfile() {
    const selectedUser = model.app.selectedProfile;
    const userData = model.data.user[selectedUser];

    const html = /*HTML*/`
        <div class="profile_page" style="color: white;">

            <div class="user_photo_container"> 
                <div class="profile_photo">
                    <img src="${userData.photo}" />
                </div>
                <div> <button onclick="editProfile()"> Rediger profil </button> </div>
                <div> <button onclick="addCat()"> Legg til ny katt </button> </div>
            </div>

            <div class="vertical_seperator"></div>

            <div class="user_text_container">
                ${userData.username}
                <div class="break-line"></div>
                <div class="bio">
                    ${userData.about}
                </div>
                Dine katter:
                <div class="break-line"></div>
                <div class="users_cats">
                    ${printUserCats()}
                </div>
            </div>

            <div class="review_container">
                <div class="reviewHeader">Dine vurderinger:</div>
                <div class="reviewBody">
                </div>
            </div>
        </div>
    `;

    return html;
}

function printUserCats() {
    const selectedUser = model.app.selectedProfile;
    const userData = model.data.user[selectedUser];

    let html = "";

    for (const cat of userData.cats) {
        let indexOfCat = model.data.cat.findIndex(c => c.id === cat);
        const curCat = model.data.cat[indexOfCat];
        html += /*HTML*/`
            <div class="cat">
                <img src="${curCat.photo}main.jpg" />
                <div class="cat_text">
                    ${curCat.name}
                    <div class="break_line"></div>
                    ${curCat.rating} / 10
                </div>
            </div>
        `;
    }

    return html;
}
