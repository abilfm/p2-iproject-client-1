<template>
  <div>
    <NavBar></NavBar>
    <!-- Header -->
    <header class="text-center" style="background-image: linear-gradient(90deg, #80cbc4, #b2dfdb);">
      <div class="row py-2">
        <div class="col-md-8 col-lg-6 mx-auto">
          <h1>FMKINCAREA</h1>
          <p class="lead">A community website that contains a range of local skincare products that do not contain any alcohol, synthetic fragrances, essential oils and have an official distribution license from BPOM for gentle skincare users.</p>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  name: 'AboutUsPage',
  components: {
    NavBar
  }
}
</script>

<style>

</style>
