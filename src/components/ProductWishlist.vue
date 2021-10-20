<template>
  <div class="col-md-6 col-lg-4">
    <div class="card shadow">
      <img :src="singleWishlist.Product.image_URL" alt="Image" width="100%" height="250px">
      <div class="card-body">
        <h5><b>{{singleWishlist.Product.brand_name}}</b></h5>
        <p class="card-text">{{singleWishlist.Product.product_name}}</p>
        <div class="d-flex justify-content-between align-items-center">
          <a @click.prevent="deleteFavourites(singleWishlist.id)" type="click" href="#" class="btn btn-sm btn-danger">Delete From Wishlist</a>
          <a @click.prevent="viewProductDetails(singleWishlist.Product.id)" type="click" href="#" class="btn btn-sm btn-info">View Details...</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
  name: 'ProductWishlist',
  props: ['singleWishlist'],
  methods: {
    deleteFavourites (id) {
      this.$store.dispatch('removeWishlist', id)
        .then((willDelete) => {
          swal({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this wishlist!',
            icon: 'warning',
            buttons: true,
            dangerMode: true
          })
          if (willDelete) {
            swal('Your wishlist has been deleted!', { icon: 'success' })
          } else {
            swal('Your wishlist is safe!')
          }
        })
        .catch((err) => {
          swal(`${err.response.data.message}`)
        })
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
  },
  created () {
  }
}
</script>

<style>

</style>
