<template>
  <div class="incoming-messages">
    <div class="incoming-msg-img">
      <img src="" alt="avatar"/>
    </div>
    <div class="received-message">
      <span class="time-date">{{message.username}}</span>
      <div class="received-with-msg mb-3">
        <p>{{message.message}}</p>
      </div>
    </div>
  </div>
</template>

<script>
// import swal from 'sweetalert'

export default {
  name: 'IncomingMessage',
  props: ['message'],
  components: {
    // IncomingMessage
  },
  data () {
    return {
      // inputMessage: ''
    }
  },
  methods: {
    // sendMessage () {
    //   const data = {
    //     username: localStorage.getItem('username'),
    //     message: this.inputMessage
    //   }
    //   this.$store.commit('PUSH_MESSAGE', data)
    // }
  },
  computed: {
    // messages () {
    //   this.$store.state.messages
    // }
  }
}
</script>

<style>

</style>
