<!--
 * Test
 * @author zhangds <zhudachang0832@gmail.com>
 * @date 2020-09-10 11:43:03
 * @since 0.1.0
 -->
<template>
  <view class="Test-main">
    <h1>Test</h1>
    <h2>{{ title }}</h2>
  </view>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
@Component
export default class Index extends Vue {
  //#region datas ******************************/
  //#endregion datas ***************************/

  //#region props ******************************/
  @Prop({
    type: String, // type: [String , Number]
    default: () => {
      return "测试Prop";
    },
  })
  protected title: string | undefined;
  //#endregion props ***************************/

  //#region vuex *******************************/
  //#endregion vuex ****************************/

  //#region computed ***************************/
  //#endregion computed ************************/

  //#region watchers ***************************/
  //#endregion watchers ************************/

  //#region life cycle *************************/
  protected created() {}
  //#endregion life cycle **********************/

  //#region hooks ******************************/
  //#endregion hooks ***************************/

  //#region event handler **********************/
  //#endregion event handler *******************/

  //#region methods ****************************/
  //#endregion methods *************************/
}
</script>
<style src="./Test.scss" lang="scss" scoped></style>
