<template>
  <div>
    <NavBar></NavBar>
    <!-- DetailPage -->
    <section id="detail-page">
      <div class="container d-flex align-items-center" style="height: 100vh;">
        <ProductItem></ProductItem>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import ProductItem from '../components/ProductItem.vue'

export default {
  name: 'DetailPage',
  components: {
    NavBar,
    ProductItem
  }
}
</script>

<style>

</style>
