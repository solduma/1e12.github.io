<template>
  <h1>Il Jo Yoo</h1>
  <p>
    I'm a Senior Data Scientist at Hyundai Capital, and a Co-Founder of
    <a href="https://momo.town">Momo</a>. <br />
    I write about Programming, Data Science, MLOps, and Web Development in a
    product perspective. <br />
    All views are my own.<br />
    Feel free to contact me with anything via following channels. <br />
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {},
});
</script>
<style scoped lang="scss">
@import "../assets/css/variables.scss";
p {
  position: relative;
  z-index: 1;
}

a {
  color: $MomoGrotto;
  font-weight: bold;
  line-height: 32 px;
  text-decoration: none;
}

</style>
