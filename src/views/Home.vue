<template>
  <div class="home">
    <div class="header">

    </div>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class Home extends Vue {
  //data
  @Provide() obj: Object = {};
  @Provide() msg: string = "";
}
</script>
<style lang="scss" scoped>
.home{
  .header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 102;
    width: 100%;
    height: 30px;
    padding: 10px;
    background: rgba(255,255,255,0.9);
  }
}
</style>
