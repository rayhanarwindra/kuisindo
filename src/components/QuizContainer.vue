<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background: white;
  margin: auto;
  width: 50vw;
  height: fit-content;
  padding: 1% 5%;
  position: absolute;
  top: 40px;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
