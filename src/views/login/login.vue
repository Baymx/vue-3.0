<template>
  <div class="login" :style="getStyle">
      <form>
          <div class="form-item">
                <label>用户名</label>
                <input placeholder='请输入用户名'   v-model="chang"/>
          </div>
          <div class="form-item">
                <label>密码</label>
                <input placeholder='请输入密码' />
          </div>
      </form>
  </div>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { Provide, Vue } from "vue-property-decorator";
import { State, Getter, Action, Mutation } from "vuex-class";
@Component({
  components: {}
})
export default class Login extends Vue {
  name: string = "login";
  //data
  @Provide() obj: Object = {};
  @Provide() msg: string = "";
  @Provide() asd: string = "233";
  @Getter("getterClient") public client: any;
  mounted() {
    this.message();
    console.log(Getter);
    console.log(this.client.width);
  }
  get chang() {
    return this.asd + "xiaoxio";
  }
  message() {}
  get getStyle() {
    return {
      width: this.client.width + "px",
      height: this.client.height + "px"
    };
  }
}
</script>

<style lang="scss" scoped>
.login {
  background: #ffffff;
  overflow: hidden;
  form {
    margin-top: 100px;
    .form-item {
      margin-top: 5px;
      input {
        border: none;
      }
    }
  }
}
</style>
