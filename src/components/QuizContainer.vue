<template>
  <div :style="{ width: width }" class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["width"],
};
</script>

<style lang="scss" scoped>
.container {
  background: white;
  margin: auto;
  height: fit-content;
  padding: 1% 5%;
  position: absolute;
  top: 40px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
