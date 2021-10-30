<template>
  <main>
    <h1>Client testimonials</h1>
    <div class="container">
      <div v-for="client in clients" :key="client">
        <img :src="client.avatar" alt="client" />
        <p class="comment">{{ client.comment }}</p>
        <p class="name">{{ client.name }}</p>
        <p class="description">{{ client.description }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import imageEmily from "../assets/image-emily.jpg";
import imageJennie from "../assets/image-jennie.jpg";
import imageThomas from "../assets/image-thomas.jpg";

export default {
  data() {
    return {
      clients: [
        {
          avatar: imageEmily,
          comment:
            "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
          name: "Emily R.",
          description: "Marketing Director",
        },
        {
          avatar: imageJennie,
          comment:
            "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
          name: "Thomas S.",
          description: "Chief Operating Officer",
        },
        {
          avatar: imageThomas,
          comment:
            "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
          name: "Jennie F.",
          description: "Business Owner",
        },
      ],
    };
  },
};
</script>

<style scoped>
main {
  position: relative;
  top: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.container {
  position:absolute;
  top:5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
}

.container div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
}

.container div img {
  border-radius: 50%;
  width: 20%
}

.container div .comment,.container div .name{
    margin-top:2.5em;
    text-align: center;
}

.container div .name{
    font-weight: bold;
    font-size:20px;
    margin-bottom:0.5em ;
}

</style>