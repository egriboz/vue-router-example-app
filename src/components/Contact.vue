<template>
  <div>
    <b-container class="contact">
      <b-row>
        <b-col cols="12" >
          <h1>Contact</h1>
        </b-col>
        <b-col cols="12" sm="12" md="6">
          <p v-if="!editMode">
            <img class="contact__img" :src="contact.img" alt="">
          </p>
          <b-form-input v-else v-model="contact.img" type="text" placeholder="Enter Url" class="input-text"></b-form-input>
        </b-col>
        <b-col cols="12" sm="12" md="6">
          
          <p class="blog-detail__text" v-if="!editMode">
            {{contact.text}}
          </p>
          <b-form-textarea v-else v-model="contact.text" class="input-textarea" id="input-textarea" placeholder="Enter Text"></b-form-textarea>

          <b-link href="" role="button" v-if="!editMode" variant="link" @click="onClick">Edit</b-link>
          <div v-else>
            <b-button variant="primary" @click="onSave">Save</b-button>
            <b-button variant="link" @click="onCancel">Cancel</b-button>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import db from '../firebase'
import toastr from 'toastr'

export default {
  data () {
    return {
      contact: {},
      editMode: false
    }
  },
  methods: {
    fetchEntry () {
      db.ref(`contact`).on('value', snap => {
        this.contact = snap.val()
      })     
    },
    onClick (event) {
      this.editMode = true
    },
    onSave (event) {
      // değişiklikler firebase'e kaydet
      db.ref(`contact`).set(
        this.contact,
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
  created () {
    this.fetchEntry()
  }
}
</script>

<style>
  .contact__img {
    width: 100%;
    height: auto;
    display: block;
    margin-bottom: 1rem;
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
