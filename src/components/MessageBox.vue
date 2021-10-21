<template>
  <div class="messages">
    <div class="msg-history">
      <IncomingMessage
      v-for="(msg, i) in messages"
      :key="i"
      :message="msg"
      ></IncomingMessage>
    </div>
    <div class="type-message">
      <div class="input-message-write">
        <input
        type="text"
        class="write-message p-3"
        placeholder="Type a message"
        v-model="inputMessage"
        @keyup.enter='sendMessage'
        />
        <button @click.prevent="sendMessage" type="button" class="message-send-btn">
          <i class="fas fa-paper-plane"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import swal from 'sweetalert'
import IncomingMessage from '../components/IncomingMessage.vue'

export default {
  name: 'MessageBox',
  components: {
    IncomingMessage
  },
  data () {
    return {
      inputMessage: ''
    }
  },
  methods: {
    sendMessage () {
      const data = {
        username: localStorage.getItem('username'),
        message: this.inputMessage
      }
      this.$store.commit('PUSH_MESSAGE', data)
      this.inputMessage = ''
    }
  },
  computed: {
    messages () {
      return this.$store.state.messages
    }
  }
}
</script>

<style>

</style>
