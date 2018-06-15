<template>
  <div>
    <q-layout>
      <q-layout-header style="position: fixed">
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
          <q-list-header>My Trade Plan</q-list-header>
          <q-item>
            <q-item-side icon="school"/>
            <router-link to="/home"><q-item-main label="Banks"/></router-link>
          </q-item>
          <q-item>
            <q-item-side icon="school"/>
            <router-link to="/bank"><q-item-main label="Bank"/></router-link>
          </q-item>
          <q-item>
            <q-item-side icon="school"/>
            <router-link to="/login"><q-item-main label="Login"/></router-link>
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
