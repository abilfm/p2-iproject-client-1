<template>
  <div>
    <NavBar></NavBar>
    <!-- FavouritePage - Post List V2 -->
    <section id="favourites-page">
      <div class="container text-center my-5">
        <h2>Wishlist Products</h2>
        <div class="row g-3 mt-3">
        <ProductWishlist
        v-for="wishlist in wishlists"
        :key="wishlist.id"
        :singleWishlist="wishlist"
        ></ProductWishlist>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import ProductWishlist from '../components/ProductWishlist.vue'
import swal from 'sweetalert'

export default {
  name: 'WishlistPage',
  computed: {
    wishlists () {
      return this.$store.state.wishlists
    }
  },
  components: {
    NavBar,
    ProductWishlist
  },
  created () {
    this.$store.dispatch('fetchWishlist')
      .then(({ data }) => {
        this.$store.commit('SET_WISHLISTS', data)
      })
      .catch((err) => {
        swal(`${err.response.data.message}`)
      })
  }
}
</script>

<style>

</style>
