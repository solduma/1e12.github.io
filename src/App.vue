<template>
  <sidebar-menu v-model:collapsed="collapsed" :menu="menu" :theme="selectedTheme" :show-one-child="true"/>
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
      collapsed: false,
      selectedTheme: "white-theme",
      isOnMobile: false,
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onResize() {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true;
        this.collapsed = true;
      } else {
        this.isOnMobile = false;
        this.collapsed = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600");
body,
html {
  margin: 0;
  padding: 0;
}
body {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;
  background-color: #f2f4f7;
  color: #262626;
}
#demo {
  padding-left: 290px;
  transition: 0.3s ease;
}
#demo.collapsed {
  padding-left: 65px;
}
#demo.onmobile {
  padding-left: 65px;
}
.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}
.demo {
  padding: 50px;
}
.container {
  max-width: 900px;
}
</style>