<template>
  <QuizContainer :width="'50vw'">
    <div class="question__title">
      <p>Pertanyaan {{ questionNo }}</p>
      <h1>{{ question.question }}</h1>
    </div>
    <div class="question__options">
      <el-radio
        v-for="option in question.options"
        :key="option.letter"
        v-model="pickedAnswer"
        :label="option.letter"
        border
      >
        {{ `${option.letter}: ${option.answer}` }}
      </el-radio>
    </div>
    <router-link
      v-if="questionNo < getNumberofQuestion"
      :to="{
        name: 'question',
        params: { number: parseInt(this.$route.params.number) + 1 },
      }"
    >
      <el-button
        class="question__nextBtn"
        @click="submitAnswer"
        :disabled="pickedAnswer === ''"
      >
        Next
      </el-button>
    </router-link>
    <router-link v-else to="/result">
      <el-button
        class="question__finishBtn"
        @click="submitAnswer"
        :disabled="pickedAnswer === ''"
      >
        Finish
      </el-button>
    </router-link>
    <p class="question__points">Points: {{ getPoints }}</p>
  </QuizContainer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import QuizContainer from "@/components/QuizContainer.vue";

export default {
  data() {
    return {
      question: {},
      questionNo: 1,
      pickedAnswer: "",
    };
  },
  methods: {
    ...mapActions(["incrementPoint"]),
    submitAnswer: function () {
      if (this.pickedAnswer === this.question.correctAnswer) {
        this.incrementPoint();
      }
      this.pickedAnswer = "";
    },
  },
  mounted() {
    this.question = this.getQuestion(this.questionNo);
  },
  updated() {
    this.questionNo = this.$route.params.number;
    this.question = this.getQuestion(this.questionNo);
  },
  computed: {
    ...mapGetters(["getQuestion", "getNumberofQuestion", "getPoints"]),
  },

  components: { QuizContainer },
};
</script>

<style scoped lang="scss">
.question__options {
  margin-top: 50px;
}

::v-deep .el-radio__input.is-checked .el-radio__inner {
  background: red;
  border-color: red;
}

::v-deep .el-radio__input.is-checked + .el-radio__label {
  color: red;
}

.el-radio.is-bordered {
  &.is-checked {
    border-color: red;
  }
  display: block;
  margin-left: 0 !important;
  margin: 30px 0;
  height: 40px;
}
.question__title {
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 2vh;
  }
}
.question__points {
  margin-top: 20px;
  text-align: center;
}

.el-button {
  font-weight: bold;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  margin-top: 5px;
}

.el-button:not(:disabled) {
  background: crimson;
  color: white;
  transition: 0.2s;
  &:hover {
    background: red;
  }
}
</style>
