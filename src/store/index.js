import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../apis/server.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
    posts: [],
    favPosts: [],
    singlePost: {}
  },
  mutations: {
    SET_ISLOGIN (state, payload) {
      state.isLogin = payload
    },
    SET_POSTS (state, payload) {
      state.posts = payload
    },
    SET_FAVOURITE_POSTS (state, payload) {
      state.favPosts = payload
    },
    SET_SINGLE_POST (state, payload) {
      state.singlePost = payload
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
    handleGoogleLogin (_, idToken) {
      return axios({
        url: '/messages',
        method: 'POST',
        data: dataRegister,
      })
    },
    fetchPosts (context) {
      return axios({
        url: '/customers/posts',
        method: 'GET'
      })
    },
    fetchFavourites (context, _) {
      return axios({
        url: '/customers/favorites',
        set: {
          access_token: localStorage.getItem('access_token')
        },
        method: 'GET'
      })
    },
    createFavourites (_, id) {
      return axios({
        url: `/customers/favorites/${id}`,
        method: 'POST',
        set: {
          access_token: localStorage.getItem('access_token')
        }
      })
    },
    removeFavourites (_, id) {
      return axios({
        url: `/customers/favorites/${id}`,
        method: 'DELETE',
        set: {
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
