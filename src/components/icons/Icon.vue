<template>
  <!-- To use icons: <icon name="icon name"><icon-name/></icon> -->
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    :aria-labelledby="name"
    role="presentation"
    class="icon"
  >
    <title
      :id="name"
      lang="en"
    >{{ name }} icon</title>
    <g :fill="colour">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    name: {
      default: 'icon'
    },
    colour: {
      default: '#000'
    },
    width: {
      default: 24
    },
    height: {
      default: 24
    }
  }
}
</script>
