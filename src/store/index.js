import Vue from "vue";
import Vuex from "vuex";
import questions from "./questions";
import points from "./points";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { questions, points },
});
