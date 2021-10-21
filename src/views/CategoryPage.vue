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
        <h2>All Products</h2>
        <div class="row g-3 mt-3">
        <ProductList
        v-for="product in products"
        :key="product.id"
        :singleProduct="product"
        ></ProductList>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import ProductList from '../components/ProductList.vue'

export default {
  name: 'CategoryPage',
  computed: {
    products () {
      return this.$store.state.products
    }
  },
  components: {
    NavBar,
    ProductList
  }
}
</script>

<style>

</style>
