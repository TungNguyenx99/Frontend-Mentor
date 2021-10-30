<template>
  <ul>
    <li v-for="title in titles" :key="title">
      <p>{{ title }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      titles: ["About", "Services", "Projects", "CONTACT"],
    };
  },
};
</script>

<style scoped>
ul {
  display: inline-flex;
  list-style: none;
  align-items: flex-end;
  position: absolute;
  top: 50px;
  right: 50px;
  justify-content: space-around;
}

ul li {
  margin: 0px 10px;
  padding: 10px 15px;
  border-radius: 15px;
}

ul li:last-child {
    background-color: hsl(0, 0%, 100%);
}

ul li p {
  font-weight: bold;
  color: white;
}

ul li:nth-child(4) p {
  color: black;
}

ul li:hover {
  background-color: #6ecefe;
  cursor: pointer;

}

ul li:hover p {
  color:white;
}
</style>
