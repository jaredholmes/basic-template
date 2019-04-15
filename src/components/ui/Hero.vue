<template>
  <div class="ui-hero">
    <div class="hero-content">
      <h1>A Simple Template. Up and running in no time.</h1>
      <v-button class="bc-white">
        <router-link to="/services">Start Now</router-link>
      </v-button>
    </div>
    <div class="img-container">
      <img src="@/assets/images/img-bike.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>
