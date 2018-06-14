<template>
  <div>
    <div class="row">
      <card></card>
      <card></card>
      <card></card>
      <card></card>
      <card></card>
    </div>
  </div>
</template>

<script>
import Card from './../components/card.vue'

export default {
  name: 'Home',
  components: {Card},
  data () {
    return {
      stars: 4
    }
  },
}
</script>
