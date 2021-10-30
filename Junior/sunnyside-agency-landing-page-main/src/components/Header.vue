
<template>
  <div class="container">
    <img
      class="img-background"
      src="../assets/desktop/image-header.jpg"
      alt="logo"
    />
    <nav>
      <img class="img-logo" src="../assets/logo.svg" alt="logo" />
      <Menu />
    </nav>
    <h1>WE ARE CREATIVES</h1>
    <img
      class="img-arrow-down"
      src="../assets/icon-arrow-down.svg"
      alt="arrow down"
    />
  </div>
</template>

<script>
import Menu from "./Menu.vue";
export default {
  name: "Header",
  components: {
    Menu,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  position: relative;
}

.container .img-background {
  width: 100%;
}

.container nav {
  width: 90%;
  display: flex;
  justify-content: space-around;
}

.container nav .img-logo {
  position: absolute;
  left: 50px;
  top: 50px;
}

.container h1 ,.container .img-arrow-down{
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}

.container .img-arrow-down{
  top: 50%;
}
</style>