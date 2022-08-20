<template>
  <div class="momowWrapper">
    <h1>
      <a href="https://momo.town" aria-label="Momo"
        ><img src="../assets/img/momologo.png" alt="Momo Link"
      /></a>
    </h1>
    <p>
      Momo aims to become the greatest Mobility Community someday. <br />
      It's still on a pre-launch state, but you can sign-up, post your ideas, or share funny memes. <br/>
      I intend to keep a Dev Journal on this page, so I can share my exprience of full-stack web and DevOps development. <br/>
      Any thoughts are welcome, especially if you are interested in joining the team Momo.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: "MomoView",
  components: {},
});
</script>

<style lang="scss">
.momowWrapper {
  display: flex;
  flex-flow: column;
  align-content: center;
}
.momowWrapper > h1 > a > img {
  width: 400px;
}
</style>