<template>
  <div class="col-md-4">
    <q-card inline class="q-ma-sm">
      <q-card-media>
        <img src="~assets/img/bg.jpg">
      </q-card-media>
      <q-card-title>
        Bank 1
        <span slot="subtitle">
          $ 1500,00
        </span>
        <span slot="right" class="row items-center">
          <q-icon name="trending_up" /> 5%
        </span>
      </q-card-title>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data () {
    return {
      stars: 4
    }
  },
}
</script>
