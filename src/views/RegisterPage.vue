<template>
  <div>
    <NavBar></NavBar>
    <!-- RegisterPage -->
    <section id="register-page">
      <div class="container d-flex align-items-center" style="height: 100vh;">
        <div class="card shadow">
          <div class="row d-flex align-items-center">
            <div class="col-md-7">
              <img src="https://cdn.dribbble.com/users/77121/screenshots/16612457/media/83bf70582052a84f08086f7fa95bb571.jpg?compress=1&resize=1000x750" alt="Image" class="img-fluid">
            </div>
            <div class="col-md-5">
                <div class="col-md-12 mb-lg-4 mb-3 text-center">
                  <h1 class="mb-2">REGISTER</h1>
                  <form @submit.prevent="userRegister" class="px-md-5">
                    <div class="col-md-12">
                      <div class="form-floating mb-3">
                        <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="Email Address">
                        <label for="floatingInput">Email Address</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input v-model="password" type="password" class="form-control" id="floatingInput" placeholder="Password">
                        <label for="floatingInput">Password</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input v-model="username" type="text" class="form-control" id="floatingInput" placeholder="Username">
                        <label for="floatingInput">Username</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input v-model="phone_number" type="text" class="form-control" id="floatingInput" placeholder="Phone Number">
                        <label for="floatingInput">Phone Number</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input v-model="address" type="text" class="form-control" id="floatingInput" placeholder="Address">
                        <label for="floatingInput">Address</label>
                      </div>
                      <div class="d-grid gap-2 mb-3">
                        <button type="submit" class="btn btn-primary btn-lg">SIGN UP</button>
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
import swal from 'sweetalert'

export default {
  name: 'RegisterPage',
  components: {
    NavBar
  },
  data () {
    return {
      email: '',
      password: '',
      username: '',
      phone_number: '',
      address: ''
    }
  },
  methods: {
    userRegister () {
      const dataRegister = {
        email: this.email,
        password: this.password,
        username: this.username,
        phone_number: this.phone_number,
        address: this.address
      }

      this.$store.dispatch('handleRegister', dataRegister)
        .then(({ data }) => {
          this.$router.push({ name: 'LoginPage' })
          swal('Good job!', 'Your account has been successfully registered!', 'success')
        })
        .catch((err) => {
          swal(`${err.response.data.message}`)
        })
    }
  }
}
</script>

<style>

</style>
