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
    incrementPoint(context) {
      context.commit("INCREMENT");
    },
    resetPoints(context) {
      context.commit("RESET");
    },
  },
};
