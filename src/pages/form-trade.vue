<template>
	<div class="container">
		<div class="card card-nav-tabs">
			<div class="card-body">
				<div class="tab-content text-center">
					<div class="row">
						<div class="col-sm-12 form-group">
							<q-field label-width="12">
								 <q-select v-model="paridade" float-label="Paridade" radio :options="paridades"/>
							</q-field>
						</div>

						<div class="col-sm-12 form-group">
							<q-field label-width="12">
								<q-select v-model="tipo_entrada" float-label="Tipo de entrada" radio :options="entradas"/>
							</q-field>
						</div>

						<div class="col-sm-12 form-group">
							<q-field label-width="12">
								 <q-select v-model="status" float-label="Status" radio :options="statusOptions"/>
							</q-field>
						</div>

						<div class="col-sm-12 form-group">
							<q-field label-width="12">
								<q-input v-model="preco_entrada" float-label="Preço de entrada"/>
							</q-field>
						</div>

						<div class="col-sm-12 form-group">
							<q-field label-width="12">
								<q-input v-model="lote" float-label="Lote"/>
							</q-field>
						</div>

						<div class="col-sm-12 form-group">
							<q-field label-width="12">
								<q-input v-model="take_profit" float-label="Take Profit"/>
							</q-field>
						</div>

						<div class="col-sm-12 form-group">
							<q-field label-width="12">
								<q-input v-model="stop_loss" float-label="Stop Loss"/>
							</q-field>
						</div>

						<div class="col-sm-12 form-group">
							<q-field label-width="12">
								<q-input inverted v-model="alvo" disable align="center"/>
							</q-field>
						</div>

						<div class="col-sm-12 form-group">
							<button @click.prevent="cadastrar()" class="btn btn-link btn-outline-primary btn">Cadastrar</button>
							<button @click.prevent="$router.go(-1)" class="btn btn-link btn-outline-default btn">Voltar</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data () {
		return {
			paridades: [
				{
					label: 'GBP/USD',
					value: 'GBP/USD'
				},
				{
					label: 'USD/CAD',
					value: 'USD/CAD'
				},
				{
					label: 'JPY/CHF',
					value: 'JPY/CHF'
				},
			],
			entradas: [
				{
					label: 'Buy',
					value: 'buy'
				},
				{
					label: 'Sell',
					value: 'sell'
				},
			],
			statusOptions: [
				{
					label: 'Pendente',
					value: 'pendente'
				},
				{
					label: 'Executada',
					value: 'executada'
				},
				{
					label: 'Finalizada',
					value: 'finalizada'
				},
			],
			paridade: '',
			tipo_entrada: '',
			preco_entrada: '',
			lote: '',
			take_profit: '',
			stop_loss: '',
			status: '',
			alvo: 'Alvo: 350 pips',
		}
	},
	methods: {
		cadastrar () {
			console.log('opa')
		},
		cancelar () {
			console.log('Limpar form e retornar para a tela anterior')
		},
	},
	computed: {
		periodoSelecionado () {
			let that = this
			let retorno = ''
			this.periodos.filter((item) => {
				if (that.periodo == item.value) retorno = item.label
			})
			return retorno.toLowerCase()
		},
	}
}
</script>