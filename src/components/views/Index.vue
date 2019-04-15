<template>
  <div class="view-index">
    <modal v-if="showModal" @close="closeModal">
      <template v-slot:header>This is a Modal</template>
      <template v-slot:subheading>Hope you enjoy</template>
    </modal>
    <hero/>
    <div class="container text-align-center">
      <h1 @click="openModal">Simply Unbeatable</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nemo dolorem suscipit perspiciatis ex, possimus beatae eveniet et eaque animi optio impedit consequatur dolor libero voluptatibus neque at tempore reiciendis cumque! Cum vel architecto perspiciatis quos libero modi beatae dignissimos voluptates tempora rem deleniti voluptatum numquam fuga culpa sit, aliquam pariatur excepturi. Magnam officia dignissimos, reprehenderit placeat numquam facere consequatur. <router-link to="services">Learn more</router-link></p>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/ui/Hero'
import Modal from '@/components/ui/Modal'

export default {
  name: 'Index',
  components: {
    Hero,
    Modal
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    openModal () {
      this.showModal = true
    },
    closeModal () {
      this.showModal = false
    }
  }
}
</script>
