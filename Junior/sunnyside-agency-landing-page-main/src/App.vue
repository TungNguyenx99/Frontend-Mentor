<template>
  <Header />
  <MainContent />
  <SubContent />
  <ClientTestimonials/>
  <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import MainContent from "./components/MainContent.vue";
import SubContent from "./components/SubContent.vue";
import ClientTestimonials from "./components/ClientTestimonials.vue";
import Footer from "./components/Footer.vue"
export default {
  name: "App",
  components: {
    Header,
    MainContent,
    SubContent,
    ClientTestimonials,
    Footer,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app{
  width: 100%;
}
</style>
