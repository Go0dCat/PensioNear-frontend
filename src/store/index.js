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
    //No need to be nested prob
    friends: [
      {username: "Boris", gender: "male"}, 
      {username: "Bertha", gender:"female"},
      {username: "Luther", gender:"male"}, 
      {username: "Darwin", gender:"male"}, 
      {username: "Agatha", gender:"female"}, 
      {username:"Christine", gender:"female"}
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
