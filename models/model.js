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

  input: {
    constantInput: {
      searchBar: null, // string
    },

    signIn: {
      userName: null, // string
      password: null, // string
    },

    signUp: {
      userName: null, // string
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
        name: "thiccy boi", // string
        photo: "img/UserID_0/CatID_0/",
        rating: 8.3, // float
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
        birthday: 20220811, // number
        gender: "Female", // string
        race: "Bengal", // string
        color: "White", // string
        furLength: "Long", // string
        about: "Cuddely as fuck", // string
      },
      {
        id: 1,
        name: "Sir MeowsallotThe First", // string
        photo: "img/UserID_1/CatID_4/",
        rating: 8.3, // float
        givenRatings: [
          {
            userID: 1,
            ratingGiven: 10,
          },
          {
            userID: 2,
            ratingGiven: 10,
          },
        ],
        birthday: 20010710, // number
        gender: "Han", // string
        race: "Blandet", // string
        color: "Oransje", // string
        furLength: "Lang", // string
        about: "Siste overlevende fra den store atom krisen", // string
      },
      {
        id: 2,
        name: "Nyamaster", // string
        photo: "img/UserID_2/CatID_1/",
        rating: 8.3, // float
        givenRatings: [
          {
            userID: 1,
            ratingGiven: 8,
          },
          {
            userID: 2,
            ratingGiven: 7,
          },
        ],
        birthday: 20200613, // number
        gender: "Hun", // string
        race: "Maine Coon", // string
        color: "White", // string
        furLength: "Long", // string
        about: "Skriker som en jævla banshee, men er veldig god.", // string
      },
      {
        id: 3,
        name: "Larry the cat&puss", // string
        photo: "img/UserID_3/CatID_5/",
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
        birthday: 20150918, // number
        gender: "Han", // string
        race: "Norsk Skogskatt", // string
        color: "Grå", // string
        furLength: "Long", // string
        about: "Liker å putte på en hatt og forsvinne tilfeldig, sover mye ellers", // string
      },
      {
        id: 4,
        name: "Princess", // string
        photo: "img/UserID_4/CatID_3/",
        rating: 8.3, // float
        givenRatings: [
          {
            userID: 1,
            ratingGiven: 2,
          },
          {
            userID: 2,
            ratingGiven: 1,
          },
        ],
        birthday: 20230215, // number
        gender: "Hun", // string
        race: "Chinchilla", // string
        color: "White", // string
        furLength: "Kort", // string
        about: "Den mest nydelig og perfekte katten av alle :) Spiser bare laks og elsker å klatre på sofaen", // string
      },
      {
        id: 5,
        name: "McFeast", // string
        photo: "img/UserID_5/CatID_2/",
        rating: 8.3, // float
        givenRatings: [
          {
            userID: 1,
            ratingGiven: 9,
          },
          {
            userID: 2,
            ratingGiven: 8,
          },
        ],
        birthday: 20200518, // number
        gender: "Han", // string
        race: "Blandet", // string
        color: "Gul&Oransje", // string
        furLength: "Long", // string
        about: "Han elsker det.", // string
      },
    ],

    user: [
      {
        id: 0,
        username: "thicclover88", // string
        photo: "img/UserID_0/profile.jpg", // path-string
        about: "love my thicc boi.", // string
        cats: [0], // list of ID numbers
        ratingsGiven: [
          {
            catID: 0,
            rating: 10, // number
          },
        ],
      },
      {
        id: 1,
        username: "thicclover88", // string
        photo: "img/UserID_1/profile.jpg", // path-string
        about: "love my thicc boi.", // string
        cats: [0], // list of ID numbers
        ratingsGiven: [
          {
            catID: 0,
            rating: 10, // number
          },
        ],
      },
      {
        id: 2,
        username: "thicclover88", // string
        photo: "img/UserID_2/profile.jpg", // path-string
        about: "love my thicc boi.", // string
        cats: [0], // list of ID numbers
        ratingsGiven: [
          {
            catID: 0,
            rating: 10, // number
          },
        ],
      },
      {
        id: 3,
        username: "thicclover88", // string
        photo: "img/UserID_3/profile.jpg", // path-string
        about: "love my thicc boi.", // string
        cats: [0], // list of ID numbers
        ratingsGiven: [
          {
            catID: 0,
            rating: 10, // number
          },
        ],
      },
      {
        id: 4,
        username: "thicclover88", // string
        photo: "img/UserID_4/profile.jpg", // path-string
        about: "love my thicc boi.", // string
        cats: [0], // list of ID numbers
        ratingsGiven: [
          {
            catID: 0,
            rating: 10, // number
          },
        ],
      },
      {
        id: 5,
        username: "thicclover88", // string
        photo: "img/UserID_5/profile.jpg", // path-string
        about: "love my thicc boi.", // string
        cats: [0], // list of ID numbers
        ratingsGiven: [
          {
            catID: 0,
            rating: 10, // number
          },
        ],
      },
    ],
  },
};
