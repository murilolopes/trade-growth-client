<template>
  <div class="container">
    <div class="card card-nav-tabs">
      <div class="card-body" style="margin-top: 10px; margin-bottom: 30px">
        <div class="tab-content text-center">
          <div class="" id="profile" v-show="opened == 'hist'">
            <q-collapsible popup icon="mail" label="Inbox" sublabel="5 unread emails">
              <div>aiushdaiusdhaisuhd</div>
            </q-collapsible>
            <q-collapsible popup icon="send" label="Outbox" sublabel="Empty">
              <div>aiushdaiusdhaisuhd</div>
            </q-collapsible>
            <q-collapsible popup icon="drafts" label="Draft" sublabel="Draft a new email">
              <div>aiushdaiusdhaisuhd</div>
            </q-collapsible>
          </div>
          <div class="" id="messages" v-show="opened == 'atual'">
            <div class="row">
              <div class="">
              <q-card inline class="bigger q-ma-sm">
                <q-card-title class="relative-position">
                  <div class="ellipsis">Banca 007</div>
                  <div slot="right" class="row items-center">
                    <q-icon name="attach_money" /> 1500
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
            </div>
            <br>
            <div class="row">
              <q-list inset-separator class="col-md-12">
                <q-item>
                  <q-item-main label="EUR/USD"/>
                  <q-item-side right>
                    <q-btn flat round dense icon="more_vert" text-color="dark">
                      <q-popover>
                        <q-list link>
                          <q-item v-close-overlay>
                            <q-item-main label="Visualizar" />
                          </q-item>
                          <q-item v-close-overlay>
                            <q-item-main label="Editar" />
                          </q-item>
                          <q-item v-close-overlay>
                            <q-item-main label="Deletar" />
                          </q-item>
                        </q-list>
                      </q-popover>
                    </q-btn>
                  </q-item-side>
                </q-item>
                <q-item>
                  <q-item-main label="EUR/USD"/>
                  <q-item-side right>
                    <q-btn flat round dense icon="more_vert" text-color="dark">
                      <q-popover>
                        <q-list link>
                          <q-item v-close-overlay>
                            <q-item-main label="Visualizar" />
                          </q-item>
                          <q-item v-close-overlay>
                            <q-item-main label="Editar" />
                          </q-item>
                          <q-item v-close-overlay>
                            <q-item-main label="Deletar" />
                          </q-item>
                        </q-list>
                      </q-popover>
                    </q-btn>
                  </q-item-side>
                </q-item>
                <q-item>
                  <q-item-main label="EUR/USD"/>
                  <q-item-side right>
                    <q-btn flat round dense icon="more_vert" text-color="dark">
                      <q-popover>
                        <q-list link>
                          <q-item v-close-overlay>
                            <q-item-main label="Visualizar" />
                          </q-item>
                          <q-item v-close-overlay>
                            <q-item-main label="Editar" />
                          </q-item>
                          <q-item v-close-overlay>
                            <q-item-main label="Deletar" />
                          </q-item>
                        </q-list>
                      </q-popover>
                    </q-btn>
                  </q-item-side>
                </q-item>
              </q-list>
            </div>
          </div>
        </div>
      </div>
      <div class="card-header card-header-primary" align="center" style="margin-bottom: -40px;">
          <div class="nav-tabs-navigation">
              <div class="nav-tabs-wrapper">
                  <ul class="nav nav-tabs" data-tabs="tabs">
                      <li class="nav-item">
                          <a class="nav-link" @click.prevent="opened = 'hist'" :class="ativo('hist')" data-toggle="tab">
                              <i class="material-icons">calendar_today</i>
                              Histórico
                          <div class="ripple-container"></div></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link active show" @click.prevent="opened = 'atual'" data-toggle="tab">
                              <i class="material-icons">chat</i>
                              Atual
                          <div class="ripple-container"></div></a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
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
    }
  },
  methods: {
    ativo(act) {
      return act == this.opened ? " active show" : ""
    }
  }
}
</script>
