import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: []
  },
  mutations: {
    addProducts(state, data) {
      return (state.products = [...state.products, ...data]);
    }
  },
  actions: {
    getProducts({ commit }) {
      return axios
        .get("https://dogcompanydtx.com/api/products")
        .then(({ data }) => {
          return commit("addProducts", data);
        });
    }
  }
});
