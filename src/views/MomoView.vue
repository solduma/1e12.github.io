<template>
  <div class="momowWrapper">
    <h1>
      <a href="https://momo.town" aria-label="Momo"
        ><img src="../assets/img/momologo.png" alt="Momo Link"
      /></a>
    </h1>
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