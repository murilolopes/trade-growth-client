<template>
  <div>
    <div class="section section-signup page-header">
      <div class="container">
        <div class="row">
          <div class="col-md-4 ml-auto mr-auto">
            <div class="card card-signup">
              <div class="card-header card-header-primary text-center">
                <h4>Sign In</h4>
                <div class="social-line">
                  <button @click.prevent="logar('Facebook')" class="btn btn-link btn-just-icon">
                    <i class="fa fa-facebook-square"></i>
                  </button>
                  <button @click.prevent="logar('Google')" class="btn btn-link btn-just-icon">
                    <i class="fa fa-google-plus"></i>
                  </button>
                </div>
              </div>
              <div class="card-body">
                <span class="bmd-form-group"><div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="material-icons">email</i>
                    </span>
                  </div>
                  <input type="email" class="form-control" placeholder="Email...">
                </div></span>

                <span class="bmd-form-group"><div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="material-icons">lock_outline</i>
                    </span>
                  </div>
                  <input type="password" class="form-control" placeholder="Password...">
                </div></span>
              </div>
              <div class="card-footer justify-content-center">
                <button @click.prevent="logar('Email')" class="btn btn-link btn-outline-primary btn-lg">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: 'Home',
  methods: {
    logar (provider) {
      console.log('Logando com ' + provider)
    }
  }
}
</script>
