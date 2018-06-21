<template>
  <div>
    <div class="col-md-4" @clicl.prevent="method">
      <router-link to="/bank">
        <q-card inline class="q-ma-sm">
          <q-card-media>
            <img src="~assets/img/bg.jpg">
          </q-card-media>
          <q-card-title>
            Bank 1 
            <span slot="right" class="row items-center text-green">
              <q-icon name="trending_up" /> 5% ($ 1.500,00)
            </span>
          </q-card-title>
        </q-card>
      </router-link>
    </div>
    <div class="col-md-4">
      <router-link to="/bank">
        <q-card inline class="q-ma-sm">
          <q-card-media>
            <img src="~assets/img/bg.jpg">
          </q-card-media>
          <q-card-title>
            Bank 2 
            <span slot="right" class="row items-center text-red">
              <q-icon name="trending_down" /> 2% ($ 900,00)
            </span>
          </q-card-title>
        </q-card>
      </router-link>
    </div>
    <div class="col-md-4" @clicl.prevent="method">
      <router-link to="/bank">
        <q-card inline class="q-ma-sm">
          <q-card-media>
            <img src="~assets/img/bg.jpg">
          </q-card-media>
          <q-card-title>
            Bank 3 
            <span slot="right" class="row items-center text-green">
              <q-icon name="trending_up" /> 14% ($ 2.300,00)
            </span>
          </q-card-title>
        </q-card>
      </router-link>
    </div>
    <div class="col-md-4">
      <router-link to="/bank">
        <q-card inline class="q-ma-sm">
          <q-card-media>
            <img src="~assets/img/bg.jpg">
          </q-card-media>
          <q-card-title>
            Bank 4 
            <span slot="right" class="row items-center text-red">
              <q-icon name="trending_down" /> 7% ($ 500,00)
            </span>
          </q-card-title>
        </q-card>
      </router-link>
    </div>
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
  methods: {
    method () {
      console.log('Abri o formulário de cadastro de banca')
    }
  }
}
</script>
