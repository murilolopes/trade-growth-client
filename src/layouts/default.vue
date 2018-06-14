<template>
  <div>
    <q-layout>
      <q-layout-header>
          <q-toolbar color="primary">
            <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
            <q-icon name="menu" />
          </q-btn>

          <q-toolbar-title>
            Title
          </q-toolbar-title>

          <q-btn flat round dense icon="mail" />
          <q-btn flat round dense icon="alarm" />
        </q-toolbar>
      </q-layout-header>

      <q-layout-drawer v-model="leftDrawerOpen" :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null">
          <q-list no-border link inset-delimiter>
          <q-item>
            <q-item-side icon="school"/>
            <q-item-main label="Banks"/>
          </q-item>
          <q-item>
            <q-item-side icon="school"/>
            <q-item-main label="Meus Dados"/>
          </q-item>
          <q-item>
            <q-item-side icon="school"/>
            <q-item-main label="Minha Assinatura"/>
          </q-item>
          <q-item>
            <q-item-side icon="school"/>
            <q-item-main label="Sair"/>
          </q-item>
        </q-list>
      </q-layout-drawer>

      <q-page-container>
        <router-view />
      </q-page-container>
    </q-layout>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
}
</script>
