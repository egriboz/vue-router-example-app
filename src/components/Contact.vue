<template>
  <div>
    <b-container class="contact">
      <b-row>
        <b-col cols="12" >
          <h1>Contact</h1>
        </b-col>
        <b-col cols="12" sm="12" md="6">
          <img class="contact__img" :src="contact.img" alt="">
        </b-col>
        <b-col cols="12" sm="12" md="6">
          <p>{{ contact.text }}</p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contact:{
          img: 'http://assets.viewers-guide.hbo.com/xlarge5339d767937c0.jpg',
          text: 'Lorem ipsum, Praesent euismod magna non elit efficitur, quis eleifend arcu mollis. Cras nisi lorem, dictum in egestas quis, venenatis id nisl. Pellentesque quis auctor diam. Morbi ut suscipit neque, vitae sollicitudin risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ut eros aliquam, pharetra neque lobortis, gravida nunc. Vivamus tincidunt dolor dui, vel rutrum elit lacinia in. Quisque scelerisque ut quam vitae rutrum. Maecenas id ligula id tortor iaculis faucibus quis et velit. Nulla sed condimentum quam, at ultricies urna. Cras in ex vel nunc viverra scelerisque. Aenean luctus porttitor tempor.',
        }
    }
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
</style>
