<template>
  <main>
    <div v-for="content in contents" :key="content">
      <div class="content">
        <h1>{{ content.title }}</h1>
        <p>{{ content.text }}</p>
        <p>LEARN MORE</p>
      </div>
      <img :src="content.image" alt="img" />
    </div>
  </main>
</template>

<script>
import imageTransform from "../assets/desktop/image-transform.jpg";
import imageStandOut from "../assets/desktop/image-stand-out.jpg";
export default {
  data() {
    return {
      contents: [
        {
          title: "Transform your brand",
          text: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
          image: imageTransform,
        },
        {
          title: "Stand out to the right audience",
          text: "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.",
          image: imageStandOut,
        },
      ],
      
    };
  },
};
</script>

<style scoped>
main {
  position: relative;
  bottom: 4px;
}
main > div {
  display: flex;
}

main > div:nth-child(2) {
  flex-direction: row-reverse;
}

div .content,
div img {
  width: 50%;
}

div .content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 9em;
  padding-left: 7em;
}

.content h1,
.content p {
  margin-bottom: 1em;
}

div:nth-child(1) .content p:nth-child(3) {
  text-decoration: 3px underline hsl(51, 100%, 49%);
}

div:nth-child(2) .content p:nth-child(3) {
  text-decoration: 3px underline hsl(7, 99%, 70%);
}
</style>
