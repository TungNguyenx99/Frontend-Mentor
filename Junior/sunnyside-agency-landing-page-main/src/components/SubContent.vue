<template>
  <main>
    <div v-for="content in contents" :key="content">
      <img :src="content.image" alt="img" />
      <div class="content">
        <h1>{{ content.title }}</h1>
        <p>{{ content.text }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import imageGraphicDesign from "../assets/desktop/image-graphic-design.jpg";
import imagePhotography from "../assets/desktop/image-photography.jpg";
export default {
  data() {
    return {
      contents: [
        {
          image: imageGraphicDesign,
          title: "Graphic design",
          text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.",
        },
        {
          image: imagePhotography,
          title: "Photography",
          text: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
        },
      ],
    };
  },
};
</script>

<style scoped>
main {
  position: relative;
  display: flex;
  bottom: 4px;
  width: 100%;
}

main div {
  width: 50%;
}

main div img {
  width: 100%;
}

main div .content {
  position: absolute;
  transform: translate(0%, -170%);
  text-align: center;
  padding: 0 9em;
}

main div .content p {
  margin-top: 1em;
}
</style>
