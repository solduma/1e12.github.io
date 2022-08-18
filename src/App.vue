<template>
  <picture>
    <source srcset="./assets/img/background.webp" type="image/webp" />
  </picture>
    <header>
      <h1>
        <a href="/"><img src="./assets/img/logo.png" alt="Main Logo" /></a>
      </h1>
      <nav>
        <h2 class="hide">This is a nav area</h2>
        <router-link to="about">About Me</router-link>
        <router-link to="project">Past Projects</router-link>
        <router-link to="blog">ML Stuffs</router-link>
        <router-link to="momo">Momo?</router-link>
      </nav>
    </header>
  <div id="wrapper">
    <main>
      <h2 class="hide">This is a main area</h2>
      <router-view />
    </main>
  </div>
</template>

<script>
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
p,
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
  position: fixed;
  display: flex;
  flex-flow: row-wrap;
  justify-content: space-between;
  align-items: stretch;
  top: 0;
  min-width: 100vw;
  background: $BumbleBeeYellow;
  margin: 0px;
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
  flex-basis: 420px;
}
nav a {
  font-size: 18px;
  font-weight: bold;
  line-height: 32 px;
  text-decoration: none;
  color: black;
}

nav a:last-child {
  color: $MomoGrotto;
}

.router-link-active {
  color: white;
  text-shadow: -1px 0 #ffc72b, 0 1px #ffc72b, 1px 0 #ffc72b, 0 -1px #ffc72b;
}

#wrapper {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: stretch;
  min-height: 100vh;
  z-index: 2;
}



main {
  flex-basis: 940px;
  padding: 40px 0px 0px 0px;
  box-shadow: 0px 0px 2px rgba(141, 141, 141, 0.5);
}
.viewWrapper {
  padding: 32px;
}
#wrapper h1{
  position:flex;
  justify-content: center;
  // align-items: stretch;
  top: 40px;
  font-family: Leckerli One, sans-serif;
  min-height: 100px;
  min-width: 100%;
  text-align: center;
  font-size: 50px;
  color: $BumbleBeeYellow;
  text-shadow: -1px 0 #ffc72b, 0 1px #ffc72b, 1px 0 #ffc72b, 0 -1px #ffc72b;
}
</style>