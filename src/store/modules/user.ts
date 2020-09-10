/**
 * user store
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-09-10 10:06:27
 * @since 0.1.0
 */

import keymirror from "@/store/utils/keymirror";
import {
  State as vState,
  Getter as vGetter,
  Mutation as vMutation,
  Action as vAction,
  namespace,
} from "vuex-class";

import { getter, mutation, action, decorator } from "@/store/utils/vuexUtil";

export const storeName = "user";

/*** state ***/
const state = {
  userName: "测试名字",
};

/*** getters ***/
const getters = getter(state, {});

/*** mutations ***/
const mutations = mutation(state, {
  SET_USERNAME(state, data) {
    state.userName = data;
  },
});

/*** actions ***/
const actions = action(state, {});

/*** module store ***/
const store = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

/*** exports ***/
export const types = {
  state: keymirror(state),
  getter: keymirror(getters),
  mutation: keymirror(mutations),
  action: keymirror(actions),
};

export let State = decorator(namespace(storeName, vState), types.state);
export let Getter = decorator(namespace(storeName, vGetter), types.getter);
export let Mutation = decorator(
  namespace(storeName, vMutation),
  types.mutation
);
export let Action = decorator(namespace(storeName, vAction), types.action);

export default store;
