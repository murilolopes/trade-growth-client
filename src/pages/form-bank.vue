<template>
	<div class="container" style="margin-bottom: 50px">
		<div class="card card-nav-tabs">
			<div class="card-body" style="margin-bottom: 30px">
				<div class="tab-content text-center">
					<div class="row">
						<div class="col-sm-12 form-group">
							<p class="caption">Nome do Plano</p>
							<q-field label-width="12" :count="10">
								<q-input v-model="nome" />
							</q-field>
						</div>

						<div class="col-sm-12 form-group">
							<p class="caption">Tamanho da Conta</p>
							<q-field label-width="12">
								<q-input type="tel" pattern="[0-9]*" novalidate prefix="$" suffix=",00" v-model="tamanho" />
							</q-field>
						</div>

						<div class="col-sm-12 form-group">
							<p class="caption">Qual será o risco mínimo?</p>
							<q-field label-width="12">
								<q-input type="tel" pattern="[0-9]*" novalidate suffix="%" v-model="risco_minimo" />
							</q-field>
						</div>

						<div class="col-sm-12 form-group">
							<p class="caption">Qual será o risco máximo?</p>
							<q-field label-width="12">
								<q-input type="tel" pattern="[0-9]*" novalidate suffix="%" v-model="risco_maximo" />
							</q-field>
						</div>

						<div class="col-sm-12 form-group">
							<p class="caption">Qual será a relação risco/recompensa?</p>
							<q-field label-width="12">
								<q-input type="tel" pattern="[0-9]*" novalidate prefix="1/" v-model="ratio_risco_recompensa" />
							</q-field>
						</div> 

						<div class="col-sm-12 form-group">
							<p class="caption">Qual alavancagem pretende utilizar?</p>
							<q-field label-width="12">
								<q-input type="tel" pattern="[0-9]*" novalidate prefix="1:" v-model="alavancagem" />
							</q-field>
						</div>

						<div class="col-sm-12 form-group">
							<br>
							<button @click.prevent="cadastrar()" class="btn btn-link btn-outline-primary btn">Adicionar</button>
							<button @click.prevent="voltar()" class="btn btn-link btn-outline-default btn">Voltar</button>
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
			periodos: [
			{
				label: 'Dia',
				value: 'dia'
			},
			{
				label: 'Semana',
				value: 'semana'
			},
			{
				label: 'Mês',
				value: 'mes'
			},
			],
			nome: '',
			tamanho: '',
			risco_minimo: '',
			risco_maximo: '',
			ratio_risco_recompensa: '',
			alavancagem: '',
		}
	},
	methods: {
		cadastrar () {
			console.log('Cadastrando nova banca')
		},
		voltar () {
			this.$router.go(-1)
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