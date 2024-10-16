const model = {
    app: {
        html: document.getElementById("app"),

        currentUser: 0, // user ID of user.

        page: [
            "home",
            "search",
            "catalogue",
            "rate",
            "cat profile",
            "user profile",
            "login",
            "add user",
            "edit user",
            "add cat",
            "edit cat",
        ],
    },

    input:  {
        constantInput: {
            searchBar: null, // string
        },
        
        signIn: {
            userName: null, // string
            password: null, // string
        },

        signUp: {
            userName: null,         // string
            password: null,         // string
            repeatPassword: null,   // string
            email: null,            // string
            profilePhoto: null,     // path-string
        },

        newCat: {
            name: null,         // string
            birthday: null,     // number
            gender: null,       // string
            race: null,         // string
            color: null,        // string
            furLength: null,    // list of path-strings
            about: null,        // string
            photos: [String],   // list of path-strings
        },
    },

    data: {
        maxRating: 10,                  // the max rating allowed for a cat, may be edited later.
        furLength: ["langhåret", "korthåret", "hårløs"],   // list of path-strings, only two values are to be used.
        
        catalogueSort: [
            "Sist lagt til",
            "Mest populær",
            "Tilfeldige",
            "Alder",
            "Kjønn",
            "Farge",
            "Navn A-Å",
            "Rase",
        ],

        cat: [
            {
                id: 0,
                name: "thiccy boi",             // string
                photo: "img/UserID_0/CatID_0/",
                rating: 8.3,           // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 7,
                    },
                    {
                        userID: 2,
                        ratingGiven: 8,
                    },
                ],
                birthday: 20220811,     // number
                gender: "Female",       // string
                race: "Bengal",         // string
                color: "White",         // string
                furLength: "Long",      // string
                about: "Cuddely as fuck", // string
            },
            {
                id: 0,
                name: "thiccy boi",             // string
                photo: "img/UserID_0/CatID_0/",
                rating: 8.3,           // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 7,
                    },
                    {
                        userID: 2,
                        ratingGiven: 8,
                    },
                ],
                birthday: 20220811,     // number
                gender: "Female",       // string
                race: "Bengal",         // string
                color: "White",         // string
                furLength: "Long",      // string
                about: "Cuddely as fuck", // string
            },
            {
                id: 0,
                name: "thiccy boi",             // string
                photo: "img/UserID_0/CatID_0/",
                rating: 8.3,           // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 7,
                    },
                    {
                        userID: 2,
                        ratingGiven: 8,
                    },
                ],
                birthday: 20220811,     // number
                gender: "Female",       // string
                race: "Bengal",         // string
                color: "White",         // string
                furLength: "Long",      // string
                about: "Cuddely as fuck", // string
            },
            {
                id: 0,
                name: "thiccy boi",             // string
                photo: "img/UserID_0/CatID_0/",
                rating: 8.3,           // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 7,
                    },
                    {
                        userID: 2,
                        ratingGiven: 8,
                    },
                ],
                birthday: 20220811,     // number
                gender: "Female",       // string
                race: "Bengal",         // string
                color: "White",         // string
                furLength: "Long",      // string
                about: "Cuddely as fuck", // string
            },
            {
                id: 0,
                name: "thiccy boi",             // string
                photo: "img/UserID_0/CatID_0/",
                rating: 8.3,           // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 7,
                    },
                    {
                        userID: 2,
                        ratingGiven: 8,
                    },
                ],
                birthday: 20220811,     // number
                gender: "Female",       // string
                race: "Bengal",         // string
                color: "White",         // string
                furLength: "Long",      // string
                about: "Cuddely as fuck", // string
            },
        ],

        user: [
            {
                id: 0,
                username: "thicclover88",           // string
                photo: "img/UserID_0/profile.jpg",  // path-string
                about: "love my thicc boi.",        // string
                cats: [0],                          // list of ID numbers
                ratingsGiven: [
                    {
                        catID: 0,
                        rating: 10,   // number
                    },
                ],
            },
        ],
    },
}
