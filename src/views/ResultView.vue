<template>
  <QuizContainer>
    <div class="result">
      <h1>Nilai: {{ getPoints }}</h1>
      <router-link to="/">
        <el-button>Kembali ke Halaman Utama</el-button>
      </router-link>
    </div>
  </QuizContainer>
</template>

<script>
import QuizContainer from "@/components/QuizContainer.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getPoints"]),
  },
  components: { QuizContainer },
};
</script>

<style scoped lang="scss">
.result {
  text-align: center;
}
.el-button {
  font-weight: bold;
  padding: 10px 15px;
  font-size: 1.5rem;
  border: none;
  margin-top: 30px;
  background: crimson;
  border: none;
  color: white;
  font-weight: bold;
  transition: 0.2s;

  &:hover {
    background: firebrick;
    color: white;
  }
}
</style>
