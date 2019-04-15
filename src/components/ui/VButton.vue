<template>
  <div @click="action" class="ui-v-button">
    <div class="button-background"></div>
    <div class="button-inner fw-regular"><slot/></div>
  </div>
</template>

<script>
export default {
  name: 'VButton',
  methods: {
    action () {
      this.$emit('action')
    }
  }
}
</script>
