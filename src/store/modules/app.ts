export default {
  state: {
    appName: "这是appstore的值111111",
    appTitle: "应用title",
  },
  getters: {
    appName: (state: any) => state.appName,
  },
  mutations: {
    setAppName(state: any, data: any) {
      state.appName = data;
      console.log("设置值成功" + state.appName);
    },
  },
  actions: {
    changeNameApp({ commit }: { commit: any }, data: any) {
      commit("setAppName", data);
    },
  },
  modules: {},
};
