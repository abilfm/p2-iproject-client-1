<template>
  <!-- NavBar -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a @click.prevent="changePage('HomePage')" href="#" class="navbar-brand">FMSKINCAREA</a>
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#res_nav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="res_nav">
        <ul class="navbar-nav me-auto">
          <li v-if="!isLogin" class="nav-item">
            <a @click.prevent="changePage('LoginPage')" href="#" class="nav-link">Login</a>
          </li>
          <li v-if="!isLogin" class="nav-item">
            <a @click.prevent="changePage('RegisterPage')" href="#" class="nav-link">Register</a>
          </li>
          <li v-if="isLogin" class="nav-item">
            <a @click.prevent="changePage('WishlistPage')" href="#" class="nav-link">Wishlist</a>
          </li>
          <li class="nav-item">
            <a @click.prevent="changePage('AboutUsPage')" href="#" class="nav-link">About Us</a>
          </li>
          <li class="nav-item">
            <a @click.prevent="changePage('ContactUsPage')" href="#" class="nav-link">Contact Us</a>
          </li>
          <li v-if="isLogin" class="nav-item">
            <a @click.prevent="handleLogout" href="#" class="nav-link">Logout</a>
          </li>
        </ul>
        <form class="d-flex">
          <input type="text" class="form-control me-2" placeholder="Search">
          <button class="btn btn-outline-primary">Search</button>
        </form>
      </div>
    </div>
    <router-view></router-view>
  </nav>
</template>

<script>
import swal from 'sweetalert'

export default {
  name: 'NavBar',
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    changePage (newPage) {
      this.$router.push({ name: newPage })
    },
    handleLogout () {
      swal({
        title: 'Are you sure?',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            localStorage.clear()
            this.$store.commit('SET_ISLOGIN', false)
            this.$router.push({ name: 'HomePage' })
            swal('Your account has successfully been logged out!', { icon: 'success' })
          }
        })
    }
  }
}
</script>

<style>

</style>
