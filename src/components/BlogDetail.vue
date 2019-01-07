<template>
  <div class="blog-detail">
    <b-container>
      <b-row>
        <b-col>
          <router-link :to="{ name: 'Home' }" class="blog-detail__back-link">back</router-link>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" md="5">
          <img class="blog-detail__img" v-if="!editMode" :src="entry.img" :alt="entry.title">
          <b-form-input v-else v-model="entry.img" type="text" placeholder="Enter Url" class="input-text"></b-form-input>
        </b-col>
        <b-col cols="12" md="7">
          <div class="blog-detail__content">
            <h1 v-if="!editMode">{{entry.title}}</h1>
            <b-form-input v-else v-model="entry.title" type="text" placeholder="Enter Title" class="input-text"></b-form-input>
            <p class="blog-detail__subtitle"><img width="32" class="blog-detail__logo " :src="entry.logo"> HOUSE {{entry.house}}</p>
            <p class="blog-detail__text" v-if="!editMode">
              {{entry.text}}
            </p>
            <b-form-textarea v-else v-model="entry.text" class="input-textarea" id="input-textarea" placeholder="Enter Text"></b-form-textarea>
            <b-link href="" role="button" v-if="!editMode" variant="link" @click="onClick">Edit</b-link>
            <div v-else>
              <b-button variant="primary" @click="onSave">Save</b-button>
              <b-button variant="link" @click="onCancel">Cancel</b-button>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// import axios from 'axios'
import db from '../firebase'
import toastr from 'toastr'

export default {
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      //id: this.$route.params.id,
      entry: {},
      editMode: false
    }
  },
  methods: {
    fetchEntry () {
      db.ref(`entries/${this.index}`).on('value', snap => {
        this.entry = snap.val()
      })
      // axios.get(`http://localhost:3000/entries/${this.id}`)
      //   .then(response => {
      //     this.entry = response.data
      //   })
      //   .catch(e => {
      //     console.error(`Error occured: ${e}`)
      //   })      
    },
    onClick (event) {
      this.editMode = true
    },
    onSave (event) {
      // değişiklikler firebase'e kaydet
      db.ref(`entries/${this.index}`).set(
        this.entry,
        error => {
          if (error) {
            console.error(error)
            toastr.error('Error happened!')
          } else {
            this.editMode = false
            toastr.success('Entry saved successfully!')
          }
        }
      )
    },
    onCancel (event) {
      this.editMode = false
    }
  },
  watch: {
    '$route' (to, from) {
      this.index = to.params.index
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
    /* position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: white;
    padding: 120px 0;
    z-index: 1; */
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

  input.input-text,
  input.input-text:focus {
    font-size: .9rem;
    padding: 5px 10px;
    line-height: 1;
    width: 100%;
    height: auto;
    display: block;
    font-weight: 500;
    margin-bottom: 20px;
    color: #212529;
  }
  textarea.input-textarea,
  textarea.input-textarea:focus {
    display: block;
    width: 100%;
    height: 18rem;
    margin-bottom: 20px;
    padding: 5px 10px;
    color: #212529;
  }
</style>
