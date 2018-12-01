import Vue from "vue";
import Vuex, { Commit, Dispatch } from "vuex";
import actions from "./actions";
import getters from "./getters";
// import index, { State as indexState } from "./modules/index";
import index from "./modules/index";
Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    index
  }
});
//所有模块的State的集合
export interface State {
  // index: indexState,
}

export interface ActionContextBasic {
  commit: Commit;
  dispatch: Dispatch;
}
