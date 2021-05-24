import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//TODO store user data here, it is a global storage

export default new Vuex.Store({
  state: {
    username: "test",
    password: "secretPW"
  },
  mutations: {
  },
  actions: {},
  modules: {},
});
