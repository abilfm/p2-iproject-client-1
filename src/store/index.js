import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    products: [],
    wishlists: [],
    singleProduct: {},
    categories: [],
    newMessage: null,
    messages: [],
    typing: false,
    username: null,
    ready: false,
    info: [],
    connections: 0
  },
  mutations: {
    SET_ISLOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_PRODUCTS (state, payload) {
      state.products = payload
    },
    SET_WISHLISTS (state, payload) {
      state.wishlists = payload
    },
    SET_CATEGORIES (state, payload) {
      state.categories = payload
    },
    SET_SINGLE_PRODUCT (state, payload) {
      state.singleProduct = payload
    }
  },
  actions: {
    handleRegister (_, dataRegister) {
      return axios({
        url: '/register',
        method: 'POST',
        data: dataRegister
      })
    },
    handleLogin (_, dataLogin) {
      return axios({
        url: '/login',
        method: 'POST',
        data: dataLogin
      })
    },
    handleContactUs (_, dataContactUs) {
      return axios({
        url: '/messages',
        method: 'POST',
        data: dataContactUs
      })
    },
    fetchCategories () {
      return axios({
        url: '/categories',
        method: 'GET'
      })
    },
    fetchProductsByCategory (_, id) {
      return axios({
        url: `/products/category/${id}`,
        method: 'GET'
      })
    },
    fetchSingleProduct (_, id) {
      return axios({
        url: `/products/${id}`,
        method: 'GET'
      })
    },
    fetchWishlist () {
      return axios({
        url: '/wishlists',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    addNewWishlist (_, productId) {
      return axios({
        url: `/wishlists/${productId}`,
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    removeWishlist (_, id) {
      return axios({
        url: `/wishlists/${id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    }
  },
  modules: {
  }
})
