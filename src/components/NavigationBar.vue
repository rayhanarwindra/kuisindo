<template>
  <nav class="navbar">
    <router-link to="/" class="navbar__logo">KuisIndo</router-link>
  </nav>
</template>

<script></script>

<style lang="scss" scoped>
.navbar {
  padding: 1.5% 5%;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  background: white;
}

.navbar__logo {
  color: red;
  font-weight: bold;
  font-size: 2.3rem;
  margin: 0;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    color: crimson;
  }
}
</style>
