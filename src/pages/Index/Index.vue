<!--
 * Index
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-09-10 11:37:08
 * @since 0.1.0
 -->
<template>
  <view class="Index-main">
    <h1 class="title">{{ title }}</h1>
    <button type="primary" @click="goHome">goHome</button>
    <button type="primary" @click="goclick">goclick</button>
    <h3>{{ userName }}</h3>
    <Test :title="titles"></Test>
  </view>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Test from "@/views/Test/Test.vue";
import { State, Getter, Action, Mutation, namespace } from "vuex-class";
@Component({
  name: "App",
  components: {
    Test,
  },
})
export default class Index extends Vue {
  //#region datas ******************************/
  protected title: string = "Hello";
  protected titles: string = "这是index的数据";
  @State((state) => state.app.appTitle) protected appTitle: string | undefined;
  @Getter("appName") protected appName: string | undefined;
  @State((state) => state.user.userName) protected userName: string | undefined;
  //#endregion datas ***************************/

  //#region props ******************************/
  //#endregion props ***************************/

  //#region vuex *******************************/
  //#endregion vuex ****************************/

  //#region computed ***************************/
  //#endregion computed ************************/

  //#region watchers ***************************/
  //#endregion watchers ************************/

  //#region life cycle *************************/
  protected created() {
    console.log(this.appName);
    console.log(this.appTitle);
  }
  //#endregion life cycle **********************/

  //#region hooks ******************************/
  //#endregion hooks ***************************/

  //#region event handler **********************/
  //#endregion event handler *******************/

  //#region methods ****************************/
  protected goHome() {
    uni.navigateTo({
      url: "/pages/Home/Home",
    });
  }
  protected goclick() {
    const userName: string = "张德帅";
    // 存储用户信息
    this.$store.commit("user/SET_USERNAME", userName);
  }
  //#endregion methods *************************/
}
</script>
<style src="./Index.scss" lang="scss" scoped></style>
