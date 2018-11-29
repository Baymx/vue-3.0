<template>
  <div class="home">
    hello
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
