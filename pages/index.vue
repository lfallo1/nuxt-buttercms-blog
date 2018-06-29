<template>
  <div id="blog-home">
    <h1>{{ page_title }}</h1>
    <!-- Create `v-for` and apply a `key` for Vue. Here we are using a combination of the slug and index. -->
    <div v-for="(post,index) in posts" :key="post.slug + '_' + index">
      <router-link :to="'/blog/' + post.slug">
        <article class="media">
          <figure>
            <!-- Bind results using a `:` -->
            <!-- Use a `v-if`/`else` if their is a `featured_image` -->
            <img v-if="post.featured_image" :src="post.featured_image" alt="">
            <img v-else src="http://via.placeholder.com/250x250" alt="">
          </figure>
          <h2>{{ post.title }}</h2>
          <p>{{ post.summary }}</p>
        </article>
      </router-link>
    </div>
  </div>
</template>

<script>

  import butter from '../assets/buttercms.js'

  export default {
    data(){
      return {
        page_title: 'Blog',
        posts: ''
      }
    },
    methods: {
      getPosts() {

        /*
        butter.page.retrieve('*', 'a-loaf-of-bread', {preview: 1}).then((res) => {
          this.posts = res.data.data
        })
        */

        butter.post.list({
          page: 1,
          page_size: 10
        }).then((res) => {
          this.posts = res.data.data
        })
      }
    },
    created() {
      this.getPosts()
    }
  }
</script>

<style>
  #blog-home img{
    width: 400px;
  }
</style>
