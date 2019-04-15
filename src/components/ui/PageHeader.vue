<template>
    <div class="ui-page-header">
        <h1 v-if="title">{{ title }}</h1>
        <h3 v-if="subtitle" class="fw-regular">{{ subtitle }}</h3>
    </div>
</template>

<script>
export default {
  name: 'PageHeader',
  props: [
    'title',
    'subtitle'
  ]
}
</script>
