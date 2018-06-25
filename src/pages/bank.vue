<template>
  <div class="container" style="margin-top: -15px; margin-bottom: 50px">
    <div class="card card-nav-tabs">
      <div class="card-body" style="margin-bottom: 30px">
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
              <q-card inline class="bigger q-ma-sm">
                <q-card-title class="relative-position">
                  <div class="ellipsis">Banca 1</div>
                  <div slot="right" class="row items-center text-green">
                    <q-icon name="attach_money" /> 31.500,00
                  </div>
                </q-card-title>
                <q-card-main>
                  <p>Risco : 2%</p>
                  <p class="text-faded">Lote máximo(recomendado): <strong>0.06</strong></p>
                  <p class="text-faded">Ativo predominante: <strong>USD/CAD</strong></p>
                  <p class="text-faded">Crescimento médio: <strong><q-icon name="trending_up" />5%</strong> </p>
                  <p class="text-faded">Quantidade média de pontos: <strong>2700 pts</strong></p>
                </q-card-main>
              </q-card>
            </div>
            <br>
            <div class="row">
              <q-list separator class="col-md-12">
                <q-item @click="method()">
                  <q-item-main label="semana 4"/>
                  <q-item-side right>
                    <span class="text-green">
                      +5% <q-btn round dense to="/bank/week" icon="fas fa-eye" text-color="green"></q-btn>
                    </span>
                  </q-item-side>
                </q-item>
                <q-item>
                  <q-item-main label="semana 3"/>
                    <span class="text-red">
                      -3% <q-btn round dense to="/bank/week" icon="fas fa-eye" text-color="red"></q-btn>
                    </span>
                </q-item>
                <q-item>
                  <q-item-main label="semana 2"/>
                  <span class="text-green">
                    +12% <q-btn round dense to="/bank/week" icon="fas fa-eye" text-color="green"></q-btn>
                  </span>
                </q-item>
                <q-item>
                  <q-item-main label="semana 1"/>
                  <span class="text-green">
                    +8% <q-btn round dense to="/bank/week" icon="fas fa-eye" text-color="green"></q-btn>
                  </span>
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
      </div>
      <div class="card-header card-header-primary" align="center" style="margin-bottom: -40px;">
          <div class="nav-tabs-navigation">
              <div class="nav-tabs-wrapper">
                  <ul class="nav nav-tabs justify-center" data-tabs="tabs">
                      <li class="nav-item">
                          <a class="nav-link" @click.prevent="opened = 'hist'" :class="ativo('hist')" data-toggle="tab">
                              <i class="material-icons">calendar_today</i>
                              Histórico
                          <div class="ripple-container"></div></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link active show" @click.prevent="opened = 'atual'" data-toggle="tab">
                              <i class="material-icons">chat</i>
                              Mês Corrente
                          <div class="ripple-container"></div></a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
    <q-btn round color="success" @click.prevent="method" class="fixed" icon="plus_one" style="right: 18px; bottom: 18px"/>
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
