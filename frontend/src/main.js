import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueCookies from "vue-cookies";
import ContentHeader from "./components/ContentHeader.vue";
import Content from "./components/Content.vue";
import setupInterceptors from './services/setupInterceptor';

setupInterceptors(store);

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;

const app = createApp(App);

app
  .component("content-header", ContentHeader)
  .component("content", Content)
  .use(store)
  .use(router)
  .use(VueCookies)
  .mount("#app");
