<template>
  <div class="col-md-6 col-lg-4">
    <div class="card shadow">
      <img :src="singleProduct.image_URL" alt="Image" width="100%" height="250px">
      <div class="card-body">
        <p><b>{{singleProduct.Category.name}}</b></p>
        <h5>{{singleProduct.brand_name}}</h5>
        <p class="card-text">{{singleProduct.product_name}}</p>
        <div class="d-flex justify-content-between align-items-center">
          <a @click.prevent="addToWishlist(singleProduct.id)" type="click" href="#" class="btn btn-sm btn-primary">+ Add To Wishlist</a>
          <a @click.prevent="viewProductDetails(singleProduct.id)" type="click" href="#" class="btn btn-sm btn-info">View Details...</a>
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
    addToWishlist (productId) {
      if (localStorage.access_token) {
        this.$store.dispatch('addNewWishlist', productId)
          .then(({ data }) => {
            this.$router.push({ name: 'WishlistPage' })
            swal('Good job!', 'New wishlist has been successfully added!', 'success')
          })
          .catch((err) => {
            swal(`${err.response.data.message}`)
          })
      } else {
        this.$router.push({ name: 'LoginPage' })
      }
    },
    viewProductDetails (id) {
      this.$store.dispatch('fetchSingleProduct', id)
        .then(({ data }) => {
          this.$store.commit('SET_SINGLE_PRODUCT', data)
          this.$router.push({ name: 'DetailPage' })
        })
        .catch((err) => {
          console.log(err)
          swal(`${err.response.data.message}`)
        })
    }
  }
}
</script>

<style>

</style>
