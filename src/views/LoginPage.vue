<template>
  <div>
    <NavBar></NavBar>
    <!-- LoginPage -->
    <section id="login-page">
      <div class="container d-flex align-items-center" style="height: 100vh;">
        <div class="card shadow">
          <div class="row d-flex align-items-center">
            <div class="col-md-6">
              <img src="https://cdn.dribbble.com/users/77121/screenshots/16612457/media/83bf70582052a84f08086f7fa95bb571.jpg?compress=1&resize=1000x750" alt="Image" class="img-fluid">
            </div>
            <div class="col-md-6">
              <div class="col-md-12 mb-lg-4 mb-3 text-center">
                <h1 class="mb-5">LOGIN</h1>
                <form @submit.prevent="userLogin" class="px-md-5">
                  <div class="col-md-12">
                    <div class="form-floating mb-3">
                      <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="Email Address">
                      <label for="floatingInput">Email Address</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input v-model="password" type="password" class="form-control" id="floatingInput" placeholder="Password">
                      <label for="floatingInput">Password</label>
                    </div>
                    <div class="d-grid gap-2 mb-3">
                      <button type="submit" class="btn btn-primary btn-lg">SIGN IN</button>
                    </div>
                  </div>
                  <div class="register-accounts">
                    <p class="text-center">You don't have account? <a @click.prevent="linkRegister" href="#">Sign Up</a></p>
                    <div class="social-accounts d-flex justify-content-center">
                     <VFacebookLogin v-model="model" @sdk-init="handleSdkInit" app-id="267574585280098"></VFacebookLogin>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import VFacebookLogin from 'vue-facebook-login-component'
import swal from 'sweetalert'

export default {
  name: 'LoginPage',
  components: {
    NavBar,
    VFacebookLogin
  },
  data () {
    return {
      email: '',
      password: '',
      FB: {},
      model: {},
      scope: {}
    }
  },
  methods: {
    linkRegister () {
      this.$router.push({ name: 'RegisterPage' })
    },
    userLogin () {
      const dataLogin = {
        email: this.email,
        password: this.password
      }

      this.$store.dispatch('handleLogin', dataLogin)
        .then(({ data }) => {
          localStorage.setItem('access_token', data.access_token)
          this.$store.commit('SET_ISLOGIN', true)
          this.$store.dispatch('fetchPosts')
          this.$router.push({ name: 'HomePage' })
          swal('Good job!', 'Your account has been successfully logged in!', 'success')
        })
        .catch((err) => {
          swal(`${err.response.data.message}`)
        })
    },
    handleSdkInit ({ FB, scope }) {
      this.$store.dispatch('handleFacebookLogin', FB.getUserID())
    }
  }
}
</script>

<style>

</style>
