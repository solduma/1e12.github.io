<template>
  <sidebar-menu :menu="menu" :theme="selectedTheme" :show-one-child="true" />
  Hello
</template>

<script>
import { h, markRaw } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const separator = {
  template: '<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">',
};

const faIcon = (props) => {
  return {
    element: markRaw({
      render: () => h("div", [h(FontAwesomeIcon, { size: "lg", ...props })]),
    }),
  };
};

export default {
  name: "App",
  data() {
    return {
      menu: [
        {
          header: "About Me",
          hiddenOnCollapse: true,
        },
        {
          href: "/education",
          title: "Education",
          icon: faIcon({ icon: "fas fa-graduation-cap" }),
        },
        {
          title: "Experience",
          icon: faIcon({ icon: "fas fa-briefcase" }),
          child: [
            {
              href: "/experience/project1",
              title: "project1",
            },
          ],
        },
        {
          href: "/skill",
          title: "Skill",
          icon: faIcon({ icon: "fas fa-gear" }),
        },
        {
          component: markRaw(separator),
        },
      ],
      selectedTheme: "white-theme",
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>