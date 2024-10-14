const model = {
    app: {
        html: document.getElementById("app"),

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
    
    loggedIn: false, // check if the current user is logged in or not.

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
        furLength: ["long", "short"],   // list of path-strings, only two values are to be used.
        
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
                name: null,         // string
                photo: [String],    // list of path-strings
                rating: null,       // float
                birthday: null,     // number
                gender: null,       // string
                race: null,         // string
                color: null,        // string
                furLength: null,    // string
                about: null,        // string
            },
        ],

        user: [
            {
                id: 0,
                username: null,     // string
                photo: null,        // path-string
                about: null,        // string
                cats: [Number],     // list of ID numbers
                ratingsGiven: [
                    {
                        catID: 0,
                        rating: null,   // number
                    },
                ],
            },
        ],
    },
}
