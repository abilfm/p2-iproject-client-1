<template>
  <div class="card shadow">
    <div class="row d-flex align-items-center">
      <div class="col-md-6">
        <img :src="singlePost.imgUrl" alt="Image" class="img-fluid">
      </div>
      <div class="col-md-6">
        <div class="text-center">
          <p>{{singlePost.Category.name}}</p>
        </div>
        <div class="text-center">
          <h2>{{singlePost.title}}</h2>
        </div>
        <div class="text-justify">
          <p>{{singlePost.content}}</p>
        </div>
        <div class="text-center">
          <button @click.prevent="addFavourites('singlePost.id')" type="click" class="btn btn-primary">+ Add To Favourites</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
  name: 'PostItem',
  computed: {
    singlePost () {
      return this.$store.state.singlePost
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
    }
  }
}
</script>

<style>

</style>
