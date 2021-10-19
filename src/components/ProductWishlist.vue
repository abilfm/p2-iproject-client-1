<template>
  <!-- <div class="row g-3 mt-3"> -->
    <div class="col-md-6 col-lg-4">
      <div class="card shadow">
        <img :src="singlePost.imgUrl || singleFavorite.Post.imgUrl" alt="Image" width="100%" height="250px">
        <div class="card-body">
          <h6>{{singlePost.Category.name || singleFavorite.Post.Category.name}}</h6>
          <p class="card-text">{{singlePost.title || singleFavorite.Post.title}}</p>
          <div class="d-flex justify-content-between align-items-center">
            <a @click.prevent="addFavourites('singlePost.id')" v-if="isButtonAddFavourites" type="click" href="#" class="btn btn-sm btn-primary">+ Add To Favourites</a>
            <a @click.prevent="deleteFavourites('singleFavorite.id')" v-if="isButtonDeleteFavourites" type="click" href="#" class="btn btn-sm btn-danger">Delete From Favourites</a>
            <a @click.prevent="viewPost('singlePost.id || singleFavorite.Post.id')" v-if="isButtonViewMore" type="click" href="#" class="btn btn-sm btn-info">View More...</a>
          </div>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
import swal from 'sweetalert'

export default {
  name: 'ProductWishlist',
  props: ['singlePost', 'singleFavorite', 'isButtonAddFavourites', 'isButtonDeleteFavourites', 'isButtonViewMore'],
  computed: {
    isLogin () {
      return this.$store.state.isLogin
    }
  },
  methods: {
    addFavourites (id) {
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
    deleteFavourites (id) {
      this.$store.dispatch('removeFavourites', id)
        .then((willDelete) => {
          swal({
            title: 'Are you sure?',
            text: 'Once deleted, you will not be able to recover this post!',
            icon: 'warning',
            buttons: true,
            dangerMode: true
          })
          if (willDelete) {
            this.$store.dispatch('fetchFavourites')
            this.$router.push({ name: 'FavouritesPage' })
            swal('Your post has been deleted!', { icon: 'success' })
          } else {
            swal('Your post is safe!')
          }
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
