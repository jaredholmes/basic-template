<template>
  <div id="app">
    <navbar/>
    <transition name="trans-router">
      <router-view class="view"/>
    </transition>
    <v-footer/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
