<template>
  <sidebar-menu :menu="menu" />
  Hello
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          header: "Il jo Yoo",
          hiddenOnCollapse: true,
        },
        {
          href: "/about",
          title: "About Me",
          // icon: faIcon({ icon: "fa-solid fa-list-ul" }),
          child: [
            {
              href: "/about/education",
              title: "Education",
            },
            {
              href: "/about/expreience",
              title: "Experience",
            },
            {
              href: "/about/skill",
              title: "Skill",
            },
          ],
        },
        {
          href: "/portfolio",
          title: "Portfolio",
          child: [
            {
              href: "/portfolio/glt",
              title: "High-Frequency Trading",
            },
            {
              href: "/portfolio/finance",
              title: "Corporate Finance",
            },
            {
              href: "/portfolio/dna",
              title: "Data & Analytics",
            },
            {
              href: "/portfolio/mlengineering",
              title: "ML Engineering",
            },
          ],
        },
      ],
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