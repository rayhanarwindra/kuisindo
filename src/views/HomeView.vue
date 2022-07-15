<template>
  <div class="home">
    <el-row>
      <el-col class="home__text" :span="width < 768 ? 24 : 12">
        <h1>Uji pengetahuan kamu tentang Indonesia!</h1>
        <router-link to="question/1">
          <el-button @click="resetPoints">Mulai Kuis</el-button>
        </router-link>
      </el-col>
      <el-col :span="width < 768 ? 0 : 12">
        <img
          v-show="width > 768"
          class="home__image"
          src="../assets/banner.png"
          alt="banner"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "HomeView",
  data() {
    return {
      width: window.innerWidth,
    };
  },
  // Source: https://stackoverflow.com/questions/47219272/how-can-i-use-window-size-in-vue-how-do-i-detect-the-soft-keyboard
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      this.width = window.innerWidth;
    },
    ...mapActions(["resetPoints"]),
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding: 1.4% 5%;
  height: 92.5vh;
  background: white;
}

.home__text {
  margin: 13% 0;
  color: black;

  & h1 {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 768px) {
    margin: 40% 0;
    text-align: center;
  }
}

.home__image {
  max-width: 100%;
  height: auto;
}

.el-button {
  margin-top: 30px;
  background: crimson;
  border: none;
  color: white;
  font-weight: bold;
  padding: 15px 30px;
  font-size: 2rem;
  transition: 0.2s;

  &:hover {
    background: firebrick;
    color: white;
  }
}
</style>
