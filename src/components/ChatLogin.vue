<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-header">Login To Chat Room</div>
          <div class="card-body">
            <form @submit.prevent="usernameChat">
              <div class="form-group row">
                <label for="" class="col-md-4 col-form-label text-md-right">Username</label>
                <div class="col-md-6">
                  <input v-model="username" type="text" class="form-control" name="username" required autofocus>
                </div>
              </div>
              <button class="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import swal from 'sweetalert'

export default {
  name: 'ChatLogin',
  data () {
    return {
      username: ''
    }
  },
  methods: {
    usernameChat () {
      localStorage.setItem('username', this.username)
      // this.$router.push({ name: 'ChatPage' })
    }
  }
}
</script>

<style>

</style>
