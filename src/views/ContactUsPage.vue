<template>
  <div>
    <NavBar></NavBar>
    <!-- ContactUsPage -->
    <section id="contact-us-page">
      <div class="container d-flex align-items-center" style="height: 100vh;">
        <div class="card shadow">
          <div class="row d-flex align-items-center">
            <div class="col-md-7">
              <img src="https://cdn.dribbble.com/users/77121/screenshots/16612457/media/83bf70582052a84f08086f7fa95bb571.jpg?compress=1&resize=1000x750" alt="Image" class="img-fluid">
            </div>
            <div class="col-md-5">
                <div class="col-md-12 mb-lg-4 mb-3 text-center">
                  <h1 class="mb-5">CONTACT US</h1>
                  <form @submit.prevent="userContactUs" class="px-md-5">
                    <div class="col-md-12">
                      <div class="form-floating mb-3">
                        <input v-model="name" type="text" class="form-control" id="floatingInput" placeholder="Name">
                        <label for="floatingInput">Name</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="Email Address">
                        <label for="floatingInput">Email Address</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input v-model="subject" type="text" class="form-control" id="floatingInput" placeholder="Subject">
                        <label for="floatingInput">Subject</label>
                      </div>
                      <div class="form-floating mb-3">
                        <input v-model="message" type="text" class="form-control" id="floatingInput" placeholder="Message">
                        <label for="floatingInput">Message</label>
                      </div>
                      <div class="d-grid gap-2 mb-3">
                        <button type="submit" class="btn btn-primary btn-lg">SUBMIT</button>
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
  name: 'ContactUsPage',
  components: {
    NavBar
  },
  data () {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  },
  methods: {
    userContactUs () {
      const dataContactUs = {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message
      }

      this.$store.dispatch('handleContactUs', dataContactUs)
        .then(({ data }) => {
          swal('Good job!', 'Your message has been successfully registered!', 'success')
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
