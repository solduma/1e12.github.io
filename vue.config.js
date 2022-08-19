const { defineConfig } = require("@vue/cli-service");
const path = require("path");
const PrerenderSpaPlugin = require("@dreysolano/prerender-spa-plugin");

const productionPlugins = [
  new PrerenderSpaPlugin({
    staticDir: path.join(__dirname, "dist"),
    routes: ["/", "/about", "/project", "/blog", "/momo"],
    renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
      renderAfterElementExists: "#app",
    }),
  }),
];

module.exports = defineConfig({
  outputDir: "dist",
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(...productionPlugins);
    }
  },
  publicPath: "/",
  transpileDependencies: true,
});
