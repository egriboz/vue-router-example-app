<template>
  <div class="blog-detail">
    <b-container>
      <b-row>
        <b-col>
          <router-link :to="{ name: 'Home' }" class="blog-detail__back-link"> < back</router-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="5">
          <img class="blog-detail__img " :src="entry.img" :alt="entry.title">
        </b-col>
        <b-col cols="12" md="7">
          <div class="blog-detail__content">
            <h1 >{{entry.title}}</h1>
            <p class="blog-detail__subtitle"><img width="32" class="blog-detail__logo " :src="entry.logo"> HOUSE {{entry.house}}</p>
            <p class="blog-detail__text">
              {{entry.text}}
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      //id: this.$route.params.id,
      entry: {}
    }
  },
  methods: {
    fetchEntry () {
      axios.get(`http://localhost:3000/entries/${this.id}`)
        .then(response => {
          this.entry = response.data
        })
        .catch(e => {
          console.error(`Error occured: ${e}`)
        })      
    }
  },
  watch: {
    '$route' (to, from) {
      this.id = to.params.id
      this.fetchEntry()
    }
  },
  created () {
    this.fetchEntry()
  }
}
</script>

<style>
  .blog-detail {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: white;
    padding: 120px 0;
    z-index: 1;
  }

  .blog-detail__back-link {
    margin-bottom: 20px;
    display: inline-block;
    font-size: 18px;
  }

  .blog-detail__img {
    display: block;
    padding: 15px;
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    border: 1px solid #ededed;
  }

  .blog-detail__content > h2 {
    margin-top: 0;
  }

  .blog-detail__subtitle {
    color: #aaa;
  }
</style>
