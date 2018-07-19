<template>
  <div class="container">
    <div class="card card-nav-tabs" style="margin-top: 15px">
      <div class="card-body" style="margin-bottom: 60px">
        <div class="tab-content text-center">
          <div class="" id="profile" v-show="opened == 'hist'">
            <q-collapsible popup>
              <template slot="header">
                <q-chip color="green" class="q-mr-sm"> +5% </q-chip>
                <q-item-main class="text-green" label="Julho" />
              </template>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </q-collapsible>
            <q-collapsible popup>
              <template slot="header">
                <q-chip color="green" class="q-mr-sm"> +15% </q-chip>
                <q-item-main class="text-green" label="Junho" />
              </template>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </q-collapsible>
            <q-collapsible popup>
              <template slot="header">
                <q-chip color="red" class="q-mr-sm"> -9% </q-chip>
                <q-item-main class="text-red" label="Maio" />
              </template>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
            </q-collapsible>
          </div>
          <div class="" id="messages" v-show="opened == 'atual'">
            <div class="row">
              <q-card class="bigger q-ma-sm col-md-12">
                <q-card-main>
                  <h4>Plano 1<span class="text-green"><q-icon name="attach_money"/>71.500,00</span></h4>
                  <p>Crescimento: <strong class="text-green">6%</strong></p>
                  <p>Risco avaliado: <strong>4 - 8%</strong></p>
                  <p>Paridade predominante: <strong>Não disponivel</strong></p>
                  <p>Pontuação média do mês: <strong>750 pips</strong></p>
                </q-card-main>
              </q-card>
            </div>
            <br>
            <div class="row">
              <q-list no-border separator class="col-md-12">
                <q-item @click="method()">
                  <q-item-main label="01 - 06 Jun"/>
                  <q-item-side right>
                    <span class="text-green">
                      +3% <q-btn round dense to="/bank/week" icon="fas fa-eye" text-color="green"></q-btn>
                    </span>
                  </q-item-side>
                </q-item>
                <q-item @click="method()">
                  <q-item-main label="08 - 13 Jun"/>
                  <q-item-side right>
                    <span class="text-red">
                      -2% <q-btn round dense to="/bank/week" icon="fas fa-eye" text-color="red"></q-btn>
                    </span>
                  </q-item-side>
                </q-item>
                <q-item @click="method()">
                  <q-item-main label="15 - 20 Jun"/>
                  <q-item-side right>
                    <span class="text-green">
                      +7% <q-btn round dense to="/bank/week" icon="fas fa-eye" text-color="green"></q-btn>
                    </span>
                  </q-item-side>
                </q-item>
                <q-item>
                  <q-item-main label="22 - 27 Jun"/>
                  <span class="text-green">
                    +12% <q-btn round dense to="/bank/week" icon="fas fa-eye" text-color="green"></q-btn>
                  </span>
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
      </div>
      <div class="card-header card-header-primary" align="center" style="margin-bottom: 10px; position: fixed; bottom: 0; width: 84%;">
          <div class="nav-tabs-navigation">
              <div class="nav-tabs-wrapper">
                  <ul class="nav nav-tabs justify-center" data-tabs="tabs">
                      <li class="nav-item">
                          <a class="nav-link active show" @click.prevent="opened = 'atual'" data-toggle="tab">
                              <q-icon name="fas fa-hand-holding-usd" />
                              Mês Corrente
                          <div class="ripple-container"></div></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" @click.prevent="opened = 'hist'" data-toggle="tab">
                              <q-icon name="fas fa-calendar-check" />
                              Histórico
                          <div class="ripple-container"></div></a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
    <q-btn round color="primary" @click.prevent="method" class="fixed" icon="fa fa-plus" style="right: 18px; bottom: 90px"/>
  </div>
</template>

<script>
import Card from './../components/card.vue'

export default {
  name: 'Banca',
  components: {Card},
  data () {
    return {
      stars: 4,
      opened: 'atual',
      basicModal: false,
      modal: true,
    }
  },
  methods: {
    ativo(act) {
      return act == this.opened ? " active show" : ""
    },
    method() {
      console.log('Adicionar Trade')
    },
  }
}
</script>
