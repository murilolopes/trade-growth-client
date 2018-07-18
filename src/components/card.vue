<template>
  <div>
    <div class="col-md-4">
      <q-card inline class="q-ma-sm">
        <q-card-media>
          <img src="~assets/img/bg.jpg">
        <q-card-title>
          Bank 1 ($ 1.500,00)
          <span slot="right" class="row items-center text-green">
            +5%
          </span>
        </q-card-title>
        </q-card-media>
        <q-card-separator />
        <q-card-actions class="justify-center" color="red">
          <q-btn flat color="primary" icon="fas fa-eye" to="/bank" />
          <q-btn flat color="primary" icon="fas fa-edit" />
          <q-btn flat color="primary" icon="fas fa-trash" />
        </q-card-actions>
      </q-card>
    </div>
    <div class="col-md-4">
      <q-card inline class="q-ma-sm">
        <q-card-media>
          <img src="~assets/img/bg.jpg">
        <q-card-title>
          Bank 2 ($ 740,00)
          <span slot="right" class="row items-center text-red">
            -2%
          </span>
        </q-card-title>
        </q-card-media>
        <q-card-separator />
        <q-card-actions class="justify-center">
          <q-btn flat color="primary" icon="fas fa-eye" to="/bank" />
          <q-btn flat color="primary" icon="fas fa-edit" />
          <q-btn flat color="primary" icon="fas fa-trash" />
        </q-card-actions>
      </q-card>
    </div>
    <div class="col-md-4">
      <q-card inline class="q-ma-sm">
        <q-card-media>
          <img src="~assets/img/bg.jpg">
        <q-card-title>
          Bank 3 ($ 3.258,00)
          <span slot="right" class="row items-center text-green">
            +12%
          </span>
        </q-card-title>
        </q-card-media>
        <q-card-separator />
        <q-card-actions class="justify-center">
          <q-btn flat color="primary" icon="fas fa-eye" to="/bank" />
          <q-btn flat color="primary" icon="fas fa-edit" />
          <q-btn flat color="primary" icon="fas fa-trash" />
        </q-card-actions>
      </q-card>
    </div>
    <div class="col-md-4" disabled="disabled">
      <q-card inline class="q-ma-sm">
        <q-card-media>
          <img src="~assets/img/bg.jpg">
        <q-card-title>
          Bank Name ($ 0,00)
          <span slot="right" class="row items-center text-green">
            +0%
          </span>
        </q-card-title>
        </q-card-media>
        <q-card-separator />
        <q-card-actions class="justify-center">
          <q-btn flat color="primary" icon="fas fa-plus" to="/bank/new" />
        </q-card-actions>
      </q-card>
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
  }
}
</script>
