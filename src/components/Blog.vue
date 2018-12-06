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
              <img :src="item.img" :alt="item.title" class="blog-cell__img">
              <h4 class="blog-cell__title">{{item.title}}</h4>
            </slide>
          </carousel>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="blog-list">
      <b-row>
        <b-col cols="12" >
          <h1 class="text-center">People</h1>
        </b-col>
        <b-col cols="12" sm="4" md="3" v-for="item in entries" :key="item.id">
          <a href="" class="blog-cell">
            <figure>
              <img :src="item.img" :alt="item.title" class="blog-cell__img">
              <figcaption class="blog-cell__caption">
                <div class="blog-cell__content">
                  <h4 class="blog-cell__title">{{item.title}}</h4>
                  <div class="blog-cell__meta">{{item.house}}</div>
                </div>
              </figcaption>
            </figure>
          </a>
        </b-col>
      </b-row>
    </b-container>
  </div>
  
</template>

<script>

export default {
  data () {
    return {
      entries: [
        {
          id: 2,
          img: 'http://assets.viewers-guide.hbo.com/larges1-ep1-people-avatar-rgb-lannister-jaime-1024x1024.jpg',
          title: 'Jaime Lannister',
          text: 'Praesent euismod magna non elit efficitur, quis eleifend arcu mollis. Cras nisi lorem, dictum in egestas quis, venenatis id nisl. Pellentesque quis auctor diam. Morbi ut suscipit neque, vitae sollicitudin risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec ut eros aliquam, pharetra neque lobortis, gravida nunc. Vivamus tincidunt dolor dui, vel rutrum elit lacinia in. Quisque scelerisque ut quam vitae rutrum. Maecenas id ligula id tortor iaculis faucibus quis et velit. Nulla sed condimentum quam, at ultricies urna. Cras in ex vel nunc viverra scelerisque. Aenean luctus porttitor tempor.',
          house: 'Lannister'
        },
        {
          id: 1,
          img: 'http://assets.viewers-guide.hbo.com/larges1-ep1-people-avatar-rgb-baratheon-cersei-1024x1024.jpg',
          title: 'Cersei Lannister',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget lacus odio. Integer at dui vitae urna aliquet faucibus. Duis sed dapibus justo, vel pretium diam. Pellentesque eget rutrum nulla. Etiam venenatis leo in ex lacinia vestibulum. Donec feugiat ante eget risus pretium, sed imperdiet purus vestibulum. Suspendisse lectus ipsum, congue ac fringilla et, dictum id eros. Phasellus pulvinar, mauris in hendrerit placerat, turpis nibh ullamcorper nisi, nec sodales libero massa non ipsum.',
          house: 'Lannister'
        },
        {
          id: 3,
          img: 'http://assets.viewers-guide.hbo.com/larges1-ep1-people-avatar-rgb-baratheon-joffrey-1024x1024.jpg',
          title: 'Joffrey Baratheon',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget lacus odio. Integer at dui vitae urna aliquet faucibus. Duis sed dapibus justo, vel pretium diam. Pellentesque eget rutrum nulla. Etiam venenatis leo in ex lacinia vestibulum. Donec feugiat ante eget risus pretium, sed imperdiet purus vestibulum. Suspendisse lectus ipsum, congue ac fringilla et, dictum id eros. Phasellus pulvinar, mauris in hendrerit placerat, turpis nibh ullamcorper nisi, nec sodales libero massa non ipsum.',
          house: 'Lannister',
          date: '13.11.2018'
        },
        {
          id: 4,
          img: 'http://assets.viewers-guide.hbo.com/larges1-ep1-people-avatar-rgb-stark-sansa-1024x1024.jpg',
          title: 'Sansa Stark',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget lacus odio. Integer at dui vitae urna aliquet faucibus. Duis sed dapibus justo, vel pretium diam. Pellentesque eget rutrum nulla. Etiam venenatis leo in ex lacinia vestibulum. Donec feugiat ante eget risus pretium, sed imperdiet purus vestibulum. Suspendisse lectus ipsum, congue ac fringilla et, dictum id eros. Phasellus pulvinar, mauris in hendrerit placerat, turpis nibh ullamcorper nisi, nec sodales libero massa non ipsum.',
          house: 'Stark'
        },
        {
          id: 5,
          img: 'http://assets.viewers-guide.hbo.com/larges1-ep1-people-avatar-rgb-snow-jon-1024x1024.jpg',
          title: 'Jon Snow',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget lacus odio. Integer at dui vitae urna aliquet faucibus. Duis sed dapibus justo, vel pretium diam. Pellentesque eget rutrum nulla. Etiam venenatis leo in ex lacinia vestibulum. Donec feugiat ante eget risus pretium, sed imperdiet purus vestibulum. Suspendisse lectus ipsum, congue ac fringilla et, dictum id eros. Phasellus pulvinar, mauris in hendrerit placerat, turpis nibh ullamcorper nisi, nec sodales libero massa non ipsum.',
          house: 'Bastard'
        },
        {
          id: 6,
          img: 'http://assets.viewers-guide.hbo.com/larges1-ep1-people-avatar-rgb-stark-arya-1024x1024.jpg',
          title: 'Arya Stark',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget lacus odio. Integer at dui vitae urna aliquet faucibus. Duis sed dapibus justo, vel pretium diam. Pellentesque eget rutrum nulla. Etiam venenatis leo in ex lacinia vestibulum. Donec feugiat ante eget risus pretium, sed imperdiet purus vestibulum. Suspendisse lectus ipsum, congue ac fringilla et, dictum id eros. Phasellus pulvinar, mauris in hendrerit placerat, turpis nibh ullamcorper nisi, nec sodales libero massa non ipsum.',
          house: 'Stark'
        }
      ]
    }
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
  .blog-slider {
    
  }
  .blog-slider img{
    width: 100%;
  }
</style>
