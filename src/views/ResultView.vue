<template>
  <div class="result">
    <h1>Nilai: {{ getPoints }}</h1>
    <router-link to="/">
      <el-button class="result__button">Kembali ke Halaman Utama</el-button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getPoints"]),
  },
};
</script>

<style scoped lang="scss">
.result {
  background: white;
  margin: auto;
  width: fit-content;
  height: fit-content;
  padding: 10% 10%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}

.el-button {
  font-weight: bold;
  padding: 10px 20px;
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
