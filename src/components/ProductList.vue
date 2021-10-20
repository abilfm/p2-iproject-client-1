<template>
  <div class="col-md-6 col-lg-4">
    <div class="card shadow">
      <img :src="singleProduct.image_URL" alt="Image" width="100%" height="250px">
      <div class="card-body">
        <p><b>{{singleProduct.Category.name}}</b></p>
        <h5>{{singleProduct.brand_name}}</h5>
        <p class="card-text">{{singleProduct.product_name}}</p>
        <div class="d-flex justify-content-between align-items-center">
          <a @click.prevent="addWishlist('singleProduct.id')" type="click" href="#" class="btn btn-sm btn-primary">+ Add To Wishlist</a>
          <a @click.prevent="viewPost('singleProduct.id')" type="click" href="#" class="btn btn-sm btn-info">View More...</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
  name: 'ProductList',
  props: ['singleProduct'],
  methods: {
    addWishlist (id) {
      this.$store.dispatch('createFavourites', id)
        .then(({ data }) => {
          this.$store.dispatch('fetchFavourites')
          this.$router.push({ name: 'FavouritesPage' })
          swal('Good job!', 'New post has been successfully added!', 'success')
        })
        .catch((err) => {
          swal(`${err.response.data.message}`)
        })
    },
    viewPost (id) {
      this.$store.dispatch('detailPost', id)
        .then(({ data }) => {
          this.$store.commit('SET_SINGLE_POST', data)
          this.$router.push({ name: 'DetailPage' })
        })
        .catch((err) => {
          swal(`${err.response.data.message}`)
        })
    }
  },
  created () {
  }
}
</script>

<style>

</style>
