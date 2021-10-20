<template>
  <div>
    <NavBar></NavBar>
    <!-- Header -->
    <header class="text-center" style="background-image: linear-gradient(90deg, #80cbc4, #b2dfdb);">
      <div class="row py-2">
        <div class="col-md-8 col-lg-6 mx-auto">
          <h1>Welcome to FMSKINCAREA</h1>
          <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas cumque deleniti laborum, mollitia nemo iste harum adipisci. Architecto voluptas tempore magnam quos reiciendis assumenda maiores modi id doloribus exercitationem?</p>
        </div>
      </div>
    </header>
     <!-- HomePage -->
    <section id="home-page">
      <div class="container text-center my-5">
        <h2>Products By Category</h2>
        <div class="row g-3 mt-3">
          <ProductCategory
          v-for="category in categories"
          :key="category.id"
          :singleCategory="category"
          ></ProductCategory>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import ProductCategory from '../components/ProductCategory.vue'
import swal from 'sweetalert'

export default {
  name: 'HomePage',
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  components: {
    NavBar,
    ProductCategory
  },
  created () {
    this.$store.dispatch('fetchCategories')
      .then(({ data }) => {
        this.$store.commit('SET_CATEGORIES', data)
      })
      .catch((err) => {
        swal(`${err.response.data.message}`)
      })
  }
}
</script>

<style>

</style>
