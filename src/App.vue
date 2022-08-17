<template>
  <picture>
    <source srcset="./assets/img/background.webp" type="image/webp" />
  </picture>
  <header>
    <h1>
      <a href="/"><img src="./assets/img/logo.png" alt="Main Logo" /></a>
    </h1>
    <nav>
      <h1 class="hide">This is a nav area</h1>
      <router-link to="about">About Me</router-link>
      <router-link to="project">Project</router-link>
      <a href="http://momo.town">Momo</a>
    </nav>
  </header>
  <div id="wrapper">
    <h1 class="hide">This is a wrapper area</h1>
    <main>
      <h1 class="hide">This is a main area</h1>
      <router-view />
    </main>
  </div>
</template>

<script>
import { h, markRaw } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./assets/css/variables.scss";
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600");
@import url("https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap");

body {
  font-family: Roboto, Noto Sans, sans-serif;
  margin: 0;
  font-size: 16px;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
b,
strong {
  margin: 0;
}
ol,
ul,
li,
dl,
dt,
dd {
  margin: 0;
  padding: 0;
  list-style: none;
}
.hide {
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;
  font-size: 0;
  opacity: 0;
}

header {
  display: flex;
  flex-flow: row-wrap;
  justify-content: space-between;
  align-items: stretch;
  top: 0;
  background: $BumbleBeeYellow;
  margin: 0px;
  box-shadow: 0px 1px 2px rgba(141, 141, 141, 0.5);
}

header a {
  display: flex;
  flex-flow: row-wrap;
  align-items: center;
}

header img {
  width: 32px;
  height: 32px;
  margin: 4px;
}

nav {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: stretch;
  margin-right: 20px;
  flex-basis: 250px;
}
nav a {
  font-size: 18px;
  font-weight: bold;
  line-height: 30px;
  text-decoration: none;
  color: black;
}
.router-link-active {
  color: white;
  text-shadow: -1px 0 #ffc72b, 0 1px #ffc72b, 1px 0 #ffc72b, 0 -1px #ffc72b;
}
#wrapper {
  display: flex;
  flex-flow: row;
  justify-content: center;
}
main {
  flex-basis: 940px;
}
</style>