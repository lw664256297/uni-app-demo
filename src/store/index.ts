import Vue from "vue";
import Vuex from "vuex";

import { mutation } from "./utils/vuexUtil";
import app from "./modules/app";
import user from "./modules/user";
Vue.use(Vuex);
const state: Types.State.RootState = {};

const mutations = mutation(state, {});
export default new Vuex.Store({
  state,
  mutations,
  actions: {},
  modules: {
    app,
    user,
  },
});
