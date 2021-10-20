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
    singleCategory: []
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
    },
    SET_SINGLE_CATEGORY (state, payload) {
      state.singleCategory = payload
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
    fetchPosts () {
      return axios({
        url: '/customers/posts',
        method: 'GET'
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
    fetchFavourites (context, _) {
      return axios({
        url: '/wishlist',
        method: 'GET',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    createFavourites (_, id) {
      return axios({
        url: `/customers/favorites/${id}`,
        method: 'POST',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    removeFavourites (_, id) {
      return axios({
        url: `/customers/favorites/${id}`,
        method: 'DELETE',
        headers: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    detailPost (_, id) {
      return axios({
        url: `/customers/posts/${id}`,
        method: 'GET'
      })
    },
    handlePostFilter (_, params) {
      return axios({
        url: `/customers/posts?filter[category]=${params.category}&page[size]=${params.size}&page[number]=${params.category}`,
        method: 'GET'
      })
    }
  },
  modules: {
  }
})
