<template>
  <div class="viewWrapper">
    <h1>Il Jo Yoo</h1>
    <p>
      I'm a full time Senior Data Scientist, and a Co-Founder of
      <a href="https://momo.town">Momo</a>. <br />
      I write about Programming, Data Science, MLOps, and Web Development in a
      Product Perspective. <br />
      Feel free to contact me with anything via following channels. <br />
      All views are my own.
    </p>
    <br />
    <div id="contacts">
      <a href="https://github.com/solduma/"
        ><font-awesome-icon icon="fa-brands fa-github" size="2x"
      /></a>
      <a href="https://www.linkedin.com/in/il-jo-yoo-58034720/"
        ><font-awesome-icon icon="fa-brands fa-linkedin" size="2x"
      /></a>
      <a href="mailto: iljo.joseph.yoo@gmail.com"
        ><font-awesome-icon icon="fa-solid fa-envelope" size="2x"
      /></a>
    </div>
  </div>
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

#contacts > a {
  color: $BumbleBeeYellow;
  position: relative;
  margin-right: 5px;
}
</style>
