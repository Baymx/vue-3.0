<template>
  <div class="login">
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
import { Component, Provide, Vue } from "vue-property-decorator";
@Component({
  components: {}
})
export default class Login extends Vue {
  name: string = "login";
  //data
  @Provide() obj: Object = {};
  @Provide() msg: string = "";
  @Provide() asd: string = "233";

  mounted() {
    this.message();
  }
  get chang() {
    return this.asd + "xiaoxio";
  }
  message() {}
}
</script>

<style lang="scss" scoped>
.login {
  background: #ffffff;
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
