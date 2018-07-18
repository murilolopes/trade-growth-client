<template>
	<div>
		<q-layout>
			<q-layout-header style="position: fixed; opacity: .9">
				<q-toolbar color="primary" glossy>
					<q-btn flat dense round aria-label="Menu" v-show="$router.history.current.path != '/home'" @click.prevent="$router.go(-1)">
						<q-icon name="reply" />
					</q-btn>

					<q-toolbar-title align="center">
						My Fx Plan
					</q-toolbar-title>

					<q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
						<q-icon name="menu" />
					</q-btn>
				</q-toolbar>
			</q-layout-header>

			<q-layout-drawer side="right" v-model="leftDrawerOpen" :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null">
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
						<router-link to="/bank/week"><q-item-main label="Week"/></router-link>
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
