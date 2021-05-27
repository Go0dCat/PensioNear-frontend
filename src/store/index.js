import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//TODO store user data here, it is a global storage

export default new Vuex.Store({
  state: {
    username: "Love",
    userInfo: {
      gender: "non-binary",
      age: 62,
      city: "Umeå",
      country: "Sweden",
      hobbies: [
        {name: "poodles", value: true},
        {name: "cats", value: false},
        {name: "gardening", value: true},
        {name: "food", value: false},
        {name: "politics", value: false},
        {name: "sports", value: false},
        {name: "horses", value: false},
        {name: "traveling", value: true}
      ],
    }, 
    friends: [
      {username: "Isaac", gender: "male"}, 
      {username: "Marie", gender:"female"},
      {username: "Niels", gender:"male"}, 
      {username: "Darwin", gender:"male"}, 
      {username: "Ada", gender:"female"}, 
      {username: "Christine", gender:"female"}
    ],
    categories: [
      {name:"Sports", id:"1"},
      {name:"Music", id:"2"},
      {name:"Games", id:"3"},
      {name:"Movie", id:"4"},
      {name:"News", id:"5"},
      {name:"Art", id:"6"},
      {name:"Food", id:"7"},
      {name:"Chatt", id:"8"}
    ],
    events: [
      {index:"1", category_id:"1", name: "Run in center park", time:"8 am", when:"Today"},
      {index:"2",category_id:"1", name: "Run in center park", time:"10 am", when:"Today"},
      {index:"3",category_id:"2", name: "Music quiz", time:"10 am", when:"Today"},
      {index:"4",category_id:"3", name: "Chess reunion", time:"9 am", when:"Today"},
      {index:"5",category_id:"3", name: "Chess reunion", time:"12 am", when:"today"}
    ],
    allUsers: [
      {username: "Angie", age: 67, gender: "female", city: "Umeå", country: "Sweden", 
        hobbies: [{name: "poodles", value: true},{name: "cats", value: true},{name: "gardening", value: false},{name: "food", value: false},
        {name: "politics", value: false},{name: "sports", value: true},{name: "horses", value: false},{name: "traveling", value: true}]
      }, 
      {username: "Christopher", age: 65, gender: "male", city: "Kalix", country: "Sweden", 
        hobbies: [{name: "poodles", value: true},{name: "cats", value: false},{name: "gardening", value: false},{name: "food", value: false},
        {name: "politics", value: true},{name: "sports", value: false},{name: "horses", value: true},{name: "traveling", value: false}]
      },
      {username: "Reuel", age: 85, gender: "other", city: "Haparanda", country: "Sweden", 
        hobbies: [{name: "poodles", value: true},{name: "cats", value: false},{name: "gardening", value: false},{name: "food", value: false},
        {name: "politics", value: false},{name: "sports", value: false},{name: "horses", value: true},{name: "traveling", value: true}]
      }, 
      {username: "Clive Staples", age: 74, gender: "male", city: "Vasa", country: "Finland", 
        hobbies: [{name: "poodles", value: true},{name: "cats", value: false},{name: "gardening", value: true},{name: "food", value: true},
        {name: "politics", value: false},{name: "sports", value: false},{name: "horses", value: false},{name: "traveling", value: false}]
      }, 
      {username: "Guy Gavriel", age: 71, gender: "male", city: "Jakobstad", country: "Finland", 
        hobbies: [{name: "poodles", value: true},{name: "cats", value: true},{name: "gardening", value: false},{name: "food", value: false},
        {name: "politics", value: false},{name: "sports", value: false},{name: "horses", value: true},{name: "traveling", value: false}]
      },
      {username: "Naomi", age: 92, gender: "female", city: "Adelaide", country: "Australia", 
        hobbies: [{name: "poodles", value: true},{name: "cats", value: true},{name: "gardening", value: false},{name: "food", value: false},
        {name: "politics", value: false},{name: "sports", value: true},{name: "horses", value: false},{name: "traveling", value: true}]
      },
      {username: "Nevo", age: 98, gender: "other", city: "Melbourne", country: "Australia", 
        hobbies: [{name: "poodles", value: true},{name: "cats", value: false},{name: "gardening", value: false},{name: "food", value: true},
        {name: "politics", value: true},{name: "sports", value: false},{name: "horses", value: true},{name: "traveling", value: false}]
      },
      {username: "Xiran", age: 88, gender: "non-binary", city: "Sydney", country: "Australia", 
        hobbies: [{name: "poodles", value: true},{name: "cats", value: false},{name: "gardening", value: false},{name: "food", value: false},
        {name: "politics", value: true},{name: "sports", value: false},{name: "horses", value: false},{name: "traveling", value: true}]
      },
      {username: "Agatha", age: 79, gender: "female", city: "Örnskölkdsvik", country: "Sweden", 
        hobbies: [{name: "poodles", value: true},{name: "cats", value: false},{name: "gardening", value: true},{name: "food", value: false},
        {name: "politics", value: false},{name: "sports", value: true},{name: "horses", value: false},{name: "traveling", value: true}]
      },
    ]
  },
    
  mutations: {
    setUserInfo (state, payload) {
      Vue.set(state, 'userInfo', payload)
    }
  },
  actions: {},
  modules: {},
});
