import Vue from "vue";
import Vuex, { Commit, Dispatch } from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {}
});

export interface State {
}
export interface ActionContextBasic {
  commit: Commit,
  dispatch: Dispatch
}