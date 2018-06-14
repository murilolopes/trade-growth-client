<template>
  <div class="container">
    <div class="card card-nav-tabs">
      <div class="card-body" style="margin-top: 10px; margin-bottom: 30px">
        <div class="tab-content text-center">
          <div class="tab-pane" id="profile">
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
          <div class="tab-pane" id="messages">
            <div class="row">
              <q-card inline class="bigger q-ma-sm">
                <q-card-title class="relative-position">
                  <div class="ellipsis">Banca 007</div>
                  <div slot="right" class="row items-center">
                    <q-icon name="attach_money" /> 1500
                  </div>
                </q-card-title>
                <q-card-main>
                  <p>texto basico</p>
                  <p class="text-faded">outro lorem da vidaadsasdasdasasdasdasdasd asdadssa.</p>
                </q-card-main>
              </q-card>
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
                          <a class="nav-link" href="#profile" data-toggle="tab">
                              <i class="material-icons">calendar_today</i>
                              Histórico
                          <div class="ripple-container"></div></a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="#messages" data-toggle="tab">
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
      opened: false,
    }
  },
}
</script>
