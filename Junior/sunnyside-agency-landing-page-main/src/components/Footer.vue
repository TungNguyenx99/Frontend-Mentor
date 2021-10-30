<template>
  <main>
    <div class="images">
      <img
        v-for="image in images"
        :key="image"
        :src="image.url"
        :alt="image.alt"
      />
    </div>
    <footer>
      <img class="logo" src="../assets/logo.svg" />
      <div class="menu">
          <p v-for="menu in menus" :key="menu">
              {{menu.title}}
          </p>
      </div>
      <div class="icons"></div>
    </footer>
  </main>
</template>

<script>
import imageGalleryCone from "../assets/desktop/image-gallery-cone.jpg";
import imageGalleryMilkbottles from "../assets/desktop/image-gallery-milkbottles.jpg";
import imageGalleryOrange from "../assets/desktop/image-gallery-orange.jpg";
import imageGallerySugarcubes from "../assets/desktop/image-gallery-sugarcubes.jpg";
import iconFacebook from "../assets/icon-facebook.svg";
import iconInstagram from "../assets/icon-instagram.svg";
import iconPinterest from "../assets/icon-pinterest.svg";
import iconTwitter from "../assets/icon-twitter.svg";

export default {
  data() {
    return {
      images: [
        { url: imageGalleryMilkbottles, alt: "" },
        { url: imageGalleryOrange, alt: "" },
        { url: imageGalleryCone, alt: "" },
        { url: imageGallerySugarcubes, alt: "" },
      ],
      menus: [{ title: About }, { title: Services }, { title: Projects }],
      icons: [
        { icon: iconFacebook },
        { icon: iconInstagram },
        { icon: iconPinterest },
        { icon: iconTwitter },
      ],
    };
  },
};
</script>

<style scoped>
main {
  position: relative;
  top: 30em;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.images {
  display: flex;
  width: 100%;
}

.images img {
  width: 25%;
}

footer {
  background-color: #90d4c5;
}
</style>
