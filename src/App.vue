<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
  // created () {
  //   if (localStorage.access_token) {
  //     this.$store.commit('SET_ISLOGIN', true)
  //     this.$store.dispatch('fetchPosts')
  //     this.$store.dispatch('fetchFavourites')
  //   } else {
  //     this.$store.commit('SET_ISLOGIN', false)
  //   }
  // }
}
</script>

<style>

</style>
