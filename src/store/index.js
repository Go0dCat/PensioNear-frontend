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
      {username: "Boris", gender: "male"}, 
      {username: "Bertha", gender:"female"},
      {username: "Luther", gender:"male"}, 
      {username: "Darwin", gender:"male"}, 
      {username: "Agatha", gender:"female"}, 
      {username:"Christine", gender:"female"}
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
  },
    
  mutations: {
    setUserInfo (state, payload) {
      Vue.set(state, 'userInfo', payload)
    }
  },
  actions: {},
  modules: {},
});
