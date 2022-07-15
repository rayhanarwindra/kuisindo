import questions from "../data/questions.json";

export default {
  state: {
    questions: questions,
  },
  getters: {
    getQuestion: (state) => (number) => {
      return state.questions[number - 1];
    },
    getNumberofQuestion: (state) => {
      return state.questions.length;
    },
  },
};
