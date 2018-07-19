<template>
	<div class="container" style="margin-bottom: 50px">
		<div class="card card-nav-tabs" style="margin-top: 15px">
			<div class="card-body" style="margin-bottom: 30px">
				<div class="tab-content text-center">
					<div class="" id="remuso" v-show="opened == 'resumo'">
						<q-card inline class="col-md-4 col-sm-4">
							<q-card-title class="relative-position">
								01 - 06 Jun
								<div slot="right" class="text-green">
									+3%
								</div>
							</q-card-title>
							<q-card-main>
								<div>
									<p>Média de pips por trade: <strong>35 pips</strong></p>
									<p>Paridade predominante: <strong>USD/CAD</strong></p>
									<p>Paridade de maior lucro: <strong>USD/CHF</strong></p>
									<p>Maior lucro: <strong>$7,50 (55 pips)</strong> </p>
									<p>Paridade de maior perda: <strong>BRL/BRL</strong></p>
									<p>Maior perda: <strong>$4,50 (20 pips)</strong> </p>
								</div>
							</q-card-main>
						</q-card>
					</div>
					<br>
					<div id="trades" v-show="opened == 'trades'" v-for="i in 40">
						<q-collapsible>
							<template slot="header">
								<q-chip color="primary" small class="q-mr-sm">
									EUR/USD
								</q-chip>
								<q-item-main class="text-red" label="Sell 0.02" />
							</template>
							<div>
								<q-card>
									<q-card-main>
										Informações sobre a trade
									</q-card-main>
									<q-card-separator />
									<q-card-actions class="justify-center">
										<q-btn flat color="primary" icon="fas fa-edit" />
										<q-btn flat color="primary" icon="fas fa-eye" />
										<q-btn flat color="primary" icon="fas fa-trash" />
									</q-card-actions>
								</q-card>
							</div>
						</q-collapsible>
					</div>
				</div>
			</div>
			<div class="card-header card-header-primary" align="center" style="margin-bottom: 10px; position: fixed; bottom: 0; width: 84%;">
				<div class="nav-tabs-navigation">
					<div class="nav-tabs-wrapper">
						<ul class="nav nav-tabs justify-center" data-tabs="tabs">
							<li class="nav-item">
								<a class="nav-link" data-toggle="tab" @click.prevent="opened = 'resumo'" >
								<q-icon name="far fa-edit" />
								Resumo
								<div class="ripple-container"></div></a>
							</li>
							<li class="nav-item">
								<a class="nav-link" data-toggle="tab" @click.prevent="opened = 'trades'" >
								<q-icon name="fas fa-list-ol" />
								Trades
								<div class="ripple-container"></div></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<q-btn round color="primary" @click.prevent="method" class="fixed" icon="fas fa-plus" style="right: 18px; bottom: 90px"/>
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
			opened: 'resumo',
			basicModal: false,
			modal: true,
			arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
		}
	},
	methods: {
		ativo(act) {
			return act == this.opened ? " " : ""
		},
		method() {
			console.log('Adicionar Trade')
		},
	}
}
</script>
