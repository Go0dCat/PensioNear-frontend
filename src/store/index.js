import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//TODO store user data here, it is a global storage

export default new Vuex.Store({
  state: {
    username: "Love",
    gender: "non-binary",
    age: 62,
    city: "Umeå",
    country: "Sweden",
    hobbies: ["poodles", "coffee"],
    friends: [{username: "Boris", gender: "male"}, {username: "Bertha", gender:"female"}, {username: "Luther", gender:"male"}, {username: "Darwin", gender:"male"}, {username: "Agatha", gender:"female"}, {username:"Christine", gender:"female"}]
  },
  mutations: {
  },
  actions: {},
  modules: {},
});
