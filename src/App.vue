<template>
  <div>
    <div id="app">
      <router-view/>
    </div>
    <HFooter></HFooter>
  </div>
</template>

<script>
import SocketioService from './services/socketio.service.js'
import HFooter from 'vue-hacktiv8-footer'

export default {
  name: 'App',
  components: {
    HFooter
  },
  created () {
    SocketioService.setupSocketConnection()
    if (localStorage.access_token) {
      this.$store.commit('SET_ISLOGIN', true)
    } else {
      this.$store.commit('SET_ISLOGIN', false)
    }
  },
  beforeUnmount () {
    SocketioService.disconnect()
  }
}
</script>

<style>

</style>
