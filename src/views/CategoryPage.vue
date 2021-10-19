<template>
  <div>
    <NavBar></NavBar>
    <!-- Header -->
    <header class="text-center" style="background-image: linear-gradient(90deg, #80cbc4, #b2dfdb);">
      <div class="row py-2">
        <div class="col-md-8 col-lg-6 mx-auto">
          <h1>Hello, Blogs!</h1>
          <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias voluptas cumque deleniti laborum, mollitia nemo iste harum adipisci. Architecto voluptas tempore magnam quos reiciendis assumenda maiores modi id doloribus exercitationem?</p>
          <!-- <a href="#" class="btn btn-primary btn-lg">Contact Us</a> -->
        </div>
      </div>
    </header>
     <!-- HomePage -->
    <section id="home-page">
      <div class="container text-center my-5">
        <h2>Blog Posts</h2>
        <div class="form-check form-check-inline">
          <input v-model="category" @change="handlePostCategory" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="1">
          <label class="form-check-label" for="inlineCheckbox1">Science & Technology</label>
        </div>
        <div class="form-check form-check-inline">
          <input v-model="category" @change="handlePostCategory" class="form-check-input" type="checkbox" id="inlineCheckbox2" value="2">
          <label class="form-check-label" for="inlineCheckbox2">Health & Lifestyle</label>
        </div>
        <div class="form-check form-check-inline">
          <input v-model="category" @change="handlePostCategory" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="3">
          <label class="form-check-label" for="inlineCheckbox1">Art & Culture</label>
        </div>
        <div class="form-check form-check-inline">
          <input v-model="category" @change="handlePostCategory" class="form-check-input" type="checkbox" id="inlineCheckbox2" value="4">
          <label class="form-check-label" for="inlineCheckbox2">Food & Cuisine</label>
        </div>
        <div class="row g-3 mt-3">
        <ProductList
        :isButtonAddFavourites="true"
        :isButtonDeleteFavourites="false"
        :isButtonViewMore="true"
        v-for="post in posts"
        :key="post.id"
        :singlePost="post"
        ></ProductList>
        </div>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center mt-5">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only">Previous</span>
              </a>
            </li>
            <li class="page-item"><a @click.prevent="handlePostPage(1)" class="page-link" href="#">1</a></li>
            <li class="page-item"><a @click.prevent="handlePostPage(2)" class="page-link" href="#">2</a></li>
            <li class="page-item"><a @click.prevent="handlePostPage(3)" class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span class="sr-only">Next</span>
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import ProductList from '../components/ProductList.vue'
import swal from 'sweetalert'

export default {
  name: 'HomePage',
  data () {
    return {
      category: []
    }
  },
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  components: {
    NavBar,
    ProductList
  },
  methods: {
    handlePostPage (num) {
      const params = {
        category: this.category,
        size: 6,
        number: num
      }

      this.$store.dispatch('handlePostFilter', params)
        .then(({ data }) => {
          this.$store.commit('SET_POSTS', data)
        })
        .catch((err) => {
          swal(`${err.response.data.message}`)
        })
    },
    handlePostCategory (event) {
      const params = {
        category: event.target.defaultValue,
        size: 6,
        num: 1
      }

      this.$store.dispatch('handlePostFilter', params)
        .then(({ data }) => {
          this.$store.commit('SET_POSTS', data)
        })
        .catch((err) => {
          swal(`${err.response.data.message}`)
        })
    }
  },
  created () {
    this.$store.dispatch('fetchPosts')
      .then(({ data }) => {
        this.$store.commit('SET_POSTS', data)
      })
      .catch((err) => {
        swal(`${err.response.data.message}`)
      })
  }
}
</script>

<style>

</style>
