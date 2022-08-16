import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueSidebarMenu from "vue-sidebar-menu";
import "vue-sidebar-menu/dist/vue-sidebar-menu.css";
import "./assets/js/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(VueSidebarMenu)
  .mount("#app");
