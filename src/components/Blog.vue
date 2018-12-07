<template>
  <div>
    
    <b-container class="blog-slider">
      <b-row>
        <b-col cols="12">
          <h1 class="text-center">Carousel</h1>
        </b-col>
        <b-col cols="12">
          <carousel :mouse-drag="true" :autoplay="false" :per-page="3">
            <slide v-for="item in entries" :key="item.id">
              <router-link :to="{ name: 'BlogDetail', params: { id: item.id } }" class="blog-cell">
              <img :src="item.img" :alt="item.title" class="blog-cell__img">
              <h4 class="blog-cell__title">{{item.title}}</h4>
              </router-link>
            </slide>
          </carousel>
        </b-col>
      </b-row>
    </b-container>

    <transition name="slide">
      <router-view></router-view>
    </transition>

    <b-container class="blog-list">
      <b-row>
        <b-col cols="12" >
          <h1 class="text-center">People</h1>
        </b-col>
        <b-col cols="12" sm="4" md="3" v-for="item in entries" :key="item.id">
          <router-link :to="{ name: 'BlogDetail', params: { id: item.id } }" class="blog-cell">
            <figure>
              <img :src="item.img" :alt="item.title" class="blog-cell__img">
              <figcaption class="blog-cell__caption">
                <div class="blog-cell__content">
                  <h4 class="blog-cell__title">{{item.title}}</h4>
                  <div class="blog-cell__meta">{{item.house}}</div>
                </div>
              </figcaption>
            </figure>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
  
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      entries: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/entries`)
      .then(response => {
        this.entries = response.data
      })
      .catch(e => {
        console.error(`Error occured: ${e}`)
      })
  }
}
</script>


<style>
  .blog-cell__img{
    width: 100%;
    max-width: 100%;
  }
  .blog-list a{
    display: block;
    margin-bottom: 30px;
    border: 1px solid #ccc;
    color: black;
  }
  .blog-list .blog-cell__content{
    padding: 10px;
  }
  .blog-slider img{
    width: 100%;
  }
  .blog-slider a {
    display: block;
    padding: 10px;
    margin: 0 5px;
    color: black;
    border: 1px solid #ccc;
  }
  .blog-slider h4 {
    margin: 0px;
    padding: 15px 0;
  }


  .slide-enter,
  .slide-leave-to{
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  .slide-enter-to,
  .slide-leave{
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  .slide-enter-active{
    transition: all 0.3s ease-out;
  }
  .slide-leave-active{
    transition: all 0.2s ease-in;
  }
</style>
