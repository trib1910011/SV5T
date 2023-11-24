import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store/index";
// import Vue from "vue";

import excel from "vue-excel-export";


const app = createApp(App);
app.use(excel);

app.use(router);
app.use(store);

app.mount("#app");
