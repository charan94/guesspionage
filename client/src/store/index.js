import { createStore } from "vuex";
import dashboard from "./modules/dashboard";
import user from "./modules/user";
import game from "./modules/game";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    dashboard,
    user,
    game
  },
});
