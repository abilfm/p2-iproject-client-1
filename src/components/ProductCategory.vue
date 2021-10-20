<template>
  <div class="col-md-6 col-lg-4">
    <div class="card shadow">
      <img src="https://cdn.dribbble.com/users/60166/screenshots/16681043/media/139440537a61ae0c2dba5ea38cbfe892.jpg?compress=1&resize=1600x1200" alt="Image" width="100%" height="250px" class="img-rounded">
      <div class="card-body">
        <h2><b>{{singleCategory.name}}</b></h2>
        <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sit recusandae impedit veniam corporis obcaecati! Sunt vel necessitatibus temporibus officiis quisquam, nobis, inventore dignissimos expedita id placeat, quas accusamus ea.</p>
        <div class="d-flex justify-content-center align-items-center">
          <a @click.prevent="categoryPage(singleCategory.id)" type="click" href="#" class="btn btn-sm btn-info">View More...</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
  name: 'ProductCategory',
  props: ['singleCategory'],
  methods: {
    categoryPage (id) {
      this.$store.dispatch('fetchProductsByCategory', id)
        .then(({ data }) => {
          this.$store.commit('SET_PRODUCTS', data)
          this.$router.push({ name: 'CategoryPage' })
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
