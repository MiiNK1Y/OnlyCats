const model = {
    app: {
        html: document.getElementById("app"),

        currentUser: 2, // user ID of user.

        currentPage: "login",

        page: [
            "home",
            "search",
            "catalogue",
            "rate",
            "cat profile",
            "profilePage",
            "login",
            "newUserPage",
            "edit user",
            "add cat",
            "edit cat",
        ],
    },

    input: {
        constantInput: {
            searchBar: null, // string
        },

        signIn: {
            username: null, // string
            password: null, // string
        },

        signUp: {
            username: null, // string
            password: null, // string
            repeatPassword: null, // string
            email: null, // string
            profilePhoto: null, // path-string
        },

        newCat: {
            name: null, // string
            birthday: null, // number
            gender: null, // string
            race: null, // string
            color: null, // string
            furLength: null, // list of path-strings
            about: null, // string
            photos: [String], // list of path-strings
        },
    },

    data: {
        maxRating: 10, // the max rating allowed for a cat, may be edited later.
        furLength: ["langhåret", "korthåret", "hårløs"], // list of path-strings, only two values are to be used.

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
                name: "thiccest boy", // string
                photo: "img/UserID_0/CatID_0/",
                birthday: 20220811, // number
                gender: "Han", // string
                race: "Bengal", // string
                color: "Hvit", // string
                furLength: "langhåret", // string
                about: "Kosen som faen.", // string
                rating: 8.3, // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 7,
                    },
                    {
                        userID: 4,
                        ratingGiven: 10,
                    },
                ],
            },
            {
                id: 1,
                name: "Sir Meowsallot The First", // string
                photo: "img/UserID_1/CatID_4/",
                birthday: 20010710, // number
                gender: "Han", // string
                race: "Blandet", // string
                color: "Oransje", // string
                furLength: "langhåret", // string
                about: "Siste overlevende fra den store atom krisen", // string
                rating: 8.3, // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 10,
                    },
                    {
                        userID: 2,
                        ratingGiven: 8,
                    },
                ],
            },
            {
                id: 2,
                name: "Kairo", // string
                photo: "img/UserID_2/CatID_2/",
                birthday: 20230324, // number
                gender: "Hann", // string
                race: "Bengal", // string
                color: "Brun og sort", // string
                furLength: "korthåret", // string
                about: "Favoritt hobby: Rive ned stua.", // string
                rating: 9.9, // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 8,
                    },
                    {
                        userID: 2,
                        ratingGiven: 10,
                    },
                ],
            },
            {
                id: 3,
                name: "Larry the Cat&puss", // string
                photo: "img/UserID_3/CatID_5/",
                birthday: 20150918, // number
                gender: "Han", // string
                race: "Norsk Skogskatt", // string
                color: "Grå", // string
                furLength: "langhåret", // string
                about: "Liker å putte på en hatt og forsvinne tilfeldig, sover mye ellers", // string
                rating: 8.3, // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 7,
                    },
                    {
                        userID: 2,
                        ratingGiven: 9,
                    },
                ],
            },
            {
                id: 4,
                name: "Princess", // string
                photo: "img/UserID_4/CatID_3/",
                birthday: 20230215, // number
                gender: "Hun", // string
                race: "Perser", // string
                color: "Hvit", // string
                furLength: "langhåret", // string
                about: "Den mest nydelig og perfekte katten av alle :) Spiser bare laks og elsker å klatre på sofaen", // string
                rating: 8.3, // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 2,
                    },
                    {
                        userID: 3,
                        ratingGiven: 1,
                    },
                ],
            },
            {
                id: 5,
                name: "McFeast", // string
                photo: "img/UserID_5/CatID_1/",
                birthday: 20200518, // number
                gender: "Han", // string
                race: "Blandet", // string
                color: "Gul og Oransje", // string
                furLength: "langhåret", // string
                about: "Han elsker det.", // string
                rating: 8.3, // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 9,
                    },
                    {
                        userID: 5,
                        ratingGiven: 8,
                    },
                ],
            },
            {
                id: 6,
                name: "Bilbo Baggins", // string
                photo: "img/UserID_8/CatID_6/",
                birthday: 20200117, // number
                gender: "Han", // string
                race: "Blandet", // string
                color: "Grå", // string
                furLength: "langhåret", // string
                about: "Elsker Fisk.", // string
                rating: 8.3, // float
                givenRatings: [
                    {
                        userID: 6,
                        ratingGiven: 2,
                    },
                    {
                        userID: 7,
                        ratingGiven: 5,
                    },
                ],
            },
            {
                id: 7,
                name: "Mr Fluffy Paws", // string
                photo: "img/UserID_10/CatID_7/",
                birthday: 20200518, // number
                gender: "Han", // string
                race: "Blandet", // string
                color: "Svart", // string
                furLength: "korthåret", // string
                about: "Har myke og fantastiske poter.", // string
                rating: 8.3, // float
                givenRatings: [
                    {
                        userID: 8,
                        ratingGiven: 9,
                    },
                    {
                        userID: 9,
                        ratingGiven: 9,
                    },
                ],
            },
            {
                id: 8,
                name: "Snarly Mc.Clawkins", // string
                photo: "img/UserID_7/CatID_8/",
                birthday: 20210811, // number
                gender: "Hun", // string
                race: "Blandet", // string
                color: "Svart og Hvit", // string
                furLength: "langhåret", // string
                about: "Jeg får hun ikke ut av huset mitt.", // string
                rating: 8.3, // float
                givenRatings: [
                    {
                        userID: 10,
                        ratingGiven: 5,
                    },
                    {
                        userID: 4,
                        ratingGiven: 10,
                    },
                ],
            },
            {
                id: 9,
                name: "Bubbsy", // string
                photo: "img/UserID_6/CatID_9/",
                birthday: 20170518, // number
                gender: "Han", // string
                race: "Blandet", // string
                color: "Brun", // string
                furLength: "hårløs", // string
                about: "Something something, katt.", // string
                rating: 8.3, // float
                givenRatings: [
                    {
                        userID: 5,
                        ratingGiven: 6,
                    },
                    {
                        userID: 2,
                        ratingGiven: 7,
                    },
                ],
            },
            {
                id: 10,
                name: "Lefse", // string
                photo: "img/UserID_9/CatID_10/",
                birthday: 20200518, // number
                gender: "Han", // string
                race: "Blandet", // string
                color: "Gul og Hvit", // string
                furLength: "korthåret", // string
                about: "Mofse Mofse.", // string
                rating: 8.3, // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 4,
                    },
                    {
                        userID: 5,
                        ratingGiven: 8,
                    },
                ],
            },
            {
                id: 11,
                name: "Oscar", // string
                photo: "img/UserID_2/CatID_11/",
                birthday: 20240320, // number
                gender: "Han", // string
                race: "Ragdoll, hellig birma", // string
                color: "Hvit og Sort", // string
                furLength: "langhåret", // string
                about: "Matvrak. Halvt banshee.", // string
                rating: 10.0, // float
                givenRatings: [
                    {
                        userID: 8,
                        ratingGiven: 8,
                    },
                    {
                        userID: 2,
                        ratingGiven: 7,
                    },
                ],
            },
            {
                id: 12,
                name: "Oompa", // string
                photo: "img/UserID_9/CatID_12/",
                birthday: 20240316, // number
                gender: "Hun", // string
                race: "Blandet", // string
                color: "Gul og Lilla", // string
                furLength: "langhåret", // string
                about: "Loompa.", // string
                rating: 8.3, // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 9,
                    },
                    {
                        userID: 5,
                        ratingGiven: 8,
                    },
                ],
            },
            {
                id: 13,
                name: "Poptart", // string
                photo: "img/UserID_7/CatID_13/",
                birthday: 20200212, // number
                gender: "Hun", // string
                race: "Blandet", // string
                color: "Rosa", // string
                furLength: "hårløs", // string
                about: "Sweet and thick.", // string
                rating: 8.3, // float
                givenRatings: [
                    {
                        userID: 7,
                        ratingGiven: 9,
                    },
                    {
                        userID: 9,
                        ratingGiven: 8,
                    },
                ],
            },
            {
                id: 14,
                name: "Potet", // string
                photo: "img/UserID_8/CatID_14/",
                birthday: 20240802, // number
                gender: "Han", // string
                race: "Blandet", // string
                color: "Brun", // string
                furLength: "langhåret", // string
                about: "Vokser fra jorden.", // string
                rating: 8.3, // float
                givenRatings: [
                    {
                        userID: 1,
                        ratingGiven: 8,
                    },
                    {
                        userID: 5,
                        ratingGiven: 8,
                    },
                ],
            },
            {
                id: 15,
                name: "Corn", // string
                photo: "img/UserID_10/CatID_15/",
                birthday: 20200518, // number
                gender: "Han", // string
                race: "Blandet", // string
                color: "Gul", // string
                furLength: "korthåret", // string
                about: "Ser lik ut på vei inn, og på vei ut.", // string
                rating: 8.3, // float
                givenRatings: [
                    {
                        userID: 3,
                        ratingGiven: 9,
                    },
                    {
                        userID: 7,
                        ratingGiven: 8,
                    },
                ],
            },
        ],

        user: [
            {
                id: 0,
                username: "thicclover88", // string
                photo: "img/UserID_0/profile.jpg", // path-string
                about: "love my thicc boi.", // string
                cats: [0], // list of ID numbers
            },
            {
                id: 1,
                username: "BeatriceTheQueen3", // string
                photo: "img/UserID_1/profile.jpg", // path-string
                about: "Katte ekspert og frilufts pro.", // string
                cats: [4], // list of ID numbers
            },
            {
                id: 2,
                username: "bbthina", // string
                photo: "img/UserID_2/profile.jpg", // path-string
                about: "Slowly making my way to becoming a crazy catlady", // string
                cats: [2, 11], // list of ID numbers
            },
            {
                id: 3,
                username: "McLover", // string
                photo: "img/UserID_3/profile.jpg", // path-string
                about: "Jeg elsker katter mest av alt, eller, nesten like mye som jeg elsker en god burger", // string
                cats: [5], // list of ID numbers
            },
            {
                id: 4,
                username: "Average_Pussy_Enjoyer_69", // string
                photo: "img/UserID_4/profile.jpg", // path-string
                about: " I love a good pussy.", // string
                cats: [3], // list of ID numbers
            },
            {
                id: 5,
                username: "Nyamaster_Master", // string
                photo: "img/UserID_5/profile.jpg", // path-string
                about: "Liker katter, spesielt den som ikke er min.", // string
                cats: [1], // list of ID numbers
            },
            {
                id: 6,
                username: "Feline_Fellow06", // string
                photo: "img/UserID_6/profile.jpg", // path-string
                about: "?", // string
                cats: [9], // list of ID numbers
            },
            {
                id: 7,
                username: "TheOneWhoMeows1999", // string
                photo: "img/UserID_7/profile.jpg", // path-string
                about: "meow meow", // string
                cats: [8, 13], // list of ID numbers
            },
            {
                id: 8,
                username: "Purrfect_Owner", // string
                photo: "img/UserID_8/profile.jpg", // path-string
                about: "Kvinne. 54. Akershus. Bilbo <3 ", // string
                cats: [6, 14], // list of ID numbers
            },
            {
                id: 9,
                username: "FurryFuzzman", // string
                photo: "img/UserID_9/profile.jpg", // path-string
                about: "Jeg liker å kle meg som en katt og hilse på andre som har kledd seg som katter", // string
                cats: [10, 12], // list of ID numbers
            },
            {
                id: 10,
                username: "NotAClosetFurry_2", // string
                photo: "img/UserID_10/profile.jpg", // path-string
                about: "Jeg kler meg ikke ut som en katt.", // string
                cats: [7, 15], // list of ID numbers
            },
        ],
    },
};
