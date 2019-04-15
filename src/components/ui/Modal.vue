<template>
  <transition name="trans-router">
    <div class="ui-modal flex align-center">
      <div class="modal-background" @click="close"></div>
      <div class="modal-main container">
        <div
          @click="close"
          class="text-align-right"
        >
          <icon name="close"><icon-close/></icon>
        </div>
        <h1>
          <slot name="header"/>
        </h1>
        <h3 class="fw-regular">
          <slot name="subheading"/>
        </h3>
        <div>
          <slot name="content"/>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>
