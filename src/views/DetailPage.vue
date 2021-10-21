<template>
  <div id="detail-page">
    <NavBar></NavBar>
    <!-- DetailPage -->
    <section >
      <div class="container d-flex align-items-center" style="height: 100vh;">
          <div class="row d-flex align-items-center">
            <div class="col-md-6">
              <img :src="singleProduct.image_URL" alt="Image" class="img-fluid">
            </div>
            <div class="col-md-6">
              <div class="text-center">
                <h2><b>{{singleProduct.brand_name}}</b></h2>
              </div>
              <div class="text-center">
                <h3><b>{{singleProduct.product_name}}</b></h3>
              </div>
              <div class="text-center">
                <p>{{singleProduct.bpom_number}}</p>
              </div>
              <div class="text-center">
                <p><b>Size: </b>{{singleProduct.size}}</p>
              </div>
              <div >
                <p class="text-justify"><b>Description: </b>{{singleProduct.description}}</p>
              </div>
              <div >
                <p class="text-justify"><b>How To Use: </b>{{singleProduct.how_to_use}}</p>
              </div>
              <div >
                <p class="text-justify"><b>Ingredients List: </b>{{singleProduct.ingredients_list}}</p>
              </div>
              <div class="text-center">
               <a @click.prevent="addToWishlist(singleProduct.id)" type="click" href="#" class="btn btn-sm btn-primary">+ Add To Wishlist</a>
              </div>
            </div>
          </div>
      </div>
      <section class='comments mt-5' aria-labelledby="comment">
      <h2 id="comment">Comments</h2>
      <Disqus shortname='http-localhost-8080-zaxvlp8xlm' />
      </section>
    </section>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import swal from 'sweetalert'
import { Disqus } from 'vue-disqus'

export default {
  name: 'DetailPage',
  computed: {
    singleProduct () {
      return this.$store.state.singleProduct
    }
  },
  components: {
    NavBar,
    Disqus
  },
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
    }
  }
}
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
#detail-page{
font-family: 'Lato', sans-serif;
background-image: linear-gradient(90deg, #e2eceb, #91e7d9);
}
</style>
