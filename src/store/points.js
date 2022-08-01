export default {
  state: {
    points: 0,
  },
  getters: {
    getPoints: (state) => {
      return state.points;
    },
  },
  mutations: {
    INCREMENT(state) {
      state.points += 20;
    },
    RESET(state) {
      state.points = 0;
    },
  },
  actions: {
    incrementPoint({ commit }) {
      commit("INCREMENT");
    },
    resetPoints({ commit }) {
      commit("RESET");
    },
  },
};
