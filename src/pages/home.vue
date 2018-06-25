<template>
  <div>
    <div class="row" style="margin-top: 10px">
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
  methods: {
    method () {
      console.log('Abri o formulário de cadastro de banca')
    }
  }
}
</script>
