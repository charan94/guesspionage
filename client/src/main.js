import './assets/styles/custom.scss';


import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";



router.beforeEach(function (to, from, next) {
    window.scrollTo(0, 0);
    next();
});

const app = createApp(App);


app.use(store);
app.use(router);

app.mount("#app")
