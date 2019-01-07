<template>
<b-container class="blog-list">
    <b-row>
      <b-col cols="12">
        <h1>Search</h1>
      </b-col>
      <b-col cols="12" sm="6" md="4" v-for="item in filteredResults(searchTerm)" :key="item.id">
        <router-link :to="{ name: 'BlogDetail', params: { id: item.id } }" class="blog-cell">
          <!--index: getEntryIndex(item)-->
          <figure>
            <img :src="item.img" :alt="item.title" class="blog-cell__img">
            <figcaption class="blog-cell__caption">
              <div class="blog-cell__content">
                <h2 class="blog-cell__title">{{item.title}}</h2>
                <div class="blog-cell__meta">by {{item.house}}</div>
              </div>
            </figcaption>
          </figure>
        </router-link>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      searchTerm: this.$route.query.q
    }
  },
  computed: {
    ...mapGetters(['filteredResults'])
  },
  // methods: {
  //   getEntryIndex (entry) {
  //     return this.entries.reduce((acc, curr, index) => {
  //       if (curr.id === entry.id) {
  //         acc = index
  //       }
  //       return acc
  //     })
  //   }
  // },
  watch: {
    $route (to, from) {
      this.searchTerm = this.$route.query.q
    }
  },
  created () {
    this.$store.dispatch('fetchEntries')
  }
}
</script>

<style>
#search-field {
  margin-bottom: 60px;
}
</style>
