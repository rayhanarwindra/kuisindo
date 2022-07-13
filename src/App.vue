<template>
  <div id="app">
    <NavigationBar />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
export default {
  components: { NavigationBar },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap");

#app {
  font-family: "Roboto", sans-serif;
  height: 100vh;
  overflow: hidden;
  max-height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(244, 0, 0, 1) 0%,
    rgba(242, 145, 145, 1) 100%
  );
}
</style>
