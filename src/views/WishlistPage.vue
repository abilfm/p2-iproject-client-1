<template>
  <div>
    <NavBar></NavBar>
    <!-- FavouritePage - Post List V2 -->
    <section id="favourites-page">
      <div class="container text-center my-5">
        <h2>Favourites Posts</h2>
        <div class="row g-3 mt-3">
        <ProductWishlist
        :isButtonAddFavourites="false"
        :isButtonDeleteFavourites="true"
        :isButtonViewMore="true"
        v-for="favorite in favorites"
        :key="favorite.id"
        :singleFavorite="favorite"
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
    favorites () {
      return this.$store.state.favPosts
    }
  },
  components: {
    NavBar,
    ProductWishlist
  },
  created () {
    this.$store.dispatch('fetchFavourites')
      .then(({ data }) => {
        this.$store.commit('SET_FAVOURITE_POSTS', data)
      })
      .catch((err) => {
        swal(`${err.response.data.message}`)
      })
  }
}
</script>

<style>

</style>
