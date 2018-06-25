<template>
	<div class="container" style="margin-bottom: 50px">
		<div class="card card-nav-tabs">
			<div class="card-body" style="margin-bottom: 30px">
				<div class="tab-content text-center">
					<div class="" id="remuso" v-show="opened == 'resumo'">
						<q-card inline class="col-md-4 col-sm-4">
							<q-card-title class="relative-position">
								Semana 4
								<div slot="right" class="text-green">
									+5%
								</div>
							</q-card-title>
							<q-card-main>
								<div>
									<p>Lote médio: <strong>0.06</strong></p>
									<p>Ativo predominante: <strong>USD/CAD</strong></p>
									<p>Média de lucro por trade: <strong><q-icon name="attach_money" />12,28</strong> </p>
									<p>Média de pontos por trade: <strong>270</strong></p>
									<p>Maior lucro: <strong><q-icon name="attach_money" />25</strong> </p>
									<p>Maior perda: <strong><q-icon name="attach_money" />7</strong> </p>
								</div>
							</q-card-main>
						</q-card>
					</div>
					<br>
					<div id="trades" v-show="opened == 'trades'">
						<q-scroll-area style="height: 444px;">
							<q-collapsible v-for="n in 15">
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
						</q-scroll-area>
					</div>
				</div>
			</div>
			<div class="card-header card-header-primary" align="center" style="margin-bottom: -40px;">
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
				<q-btn round color="primary" @click.prevent="method" class="fixed" icon="fas fa-plus" style="right: 18px; bottom: 18px"/>
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
