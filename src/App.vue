<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="variant">
      <b-container fluid>
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="/"><img src="http://viewers-guide.hbo.com/images/original531de918067e7.png" alt="Game of Thrones" width="160"></b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

          <b-navbar-nav>
            <router-link to="/" tag="li" active-class="active" exact><a class="nav-link">Home</a></router-link>
            <router-link to="/about" tag="li" active-class="active" exact><a class="nav-link">About</a></router-link>
            <router-link to="/contact" tag="li" active-class="active" exact><a class="nav-link">Contact</a></router-link>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">

            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
              <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
            </b-nav-form>

            <b-nav-item-dropdown text="Lang" right>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using button-content slot -->
              <template slot="button-content">
                <em>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Signout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view/>
    <div class="footer">
      <b-container>
        <b-row>
          <b-col>
            ©2018 Home Box Office, Inc. All rights reserved. HBO and related channels and service marks are the property of Home Box Office, Inc.
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
  
</template>

<script>

export default {
  name: 'App'
}
</script>



<style>
/* Sticky footer styles
-------------------------------------------------- */
html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
}
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 60px;
  line-height: 60px; /* Vertically center the text there */
  background-color: #f5f5f5;
}


/* Custom page CSS
-------------------------------------------------- */
/* Not required for template or sticky footer method. */



body{
  /*font-family: 'Cinzel', serif;*/
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  background: white;
}
h1{
  font-family: 'Cinzel', serif;
}
.bg-variant{
  background: #1e1e1e;
}
#app {
  margin:0 0 60px;
}

h1 {
  margin: 60px 0 30px;
}
</style>
