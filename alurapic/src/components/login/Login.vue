<template>
	<div class="container">
		<div class="row">
			<div class="col-md-4 col-md-offset-4">
				<div class="panel panel-primary">
					<div class="panel-heading text-center">login</div>
					<div class="panel-body">
						<form @submit.prevent="logar()">
							<div class="form-group">
								<label for="login">Login</label>
								<input id="login" type="text" class="form-control" v-model="login">
							</div>
							<div class="form-group">
								<label for="senha">Senha</label>
								<input id="senha" type="password" class="form-control" v-model="senha">
							</div>
							<input type="submit" value="Submit" class="btn btn-primary btn-block">
						</form>
					</div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>

export default {
    data(){
        return{
            login: '',
            senha: ''
        }
    },
    methods:{
        logar(){
			console.log('logou usando login : ' + this.login + ' e senha : ' + this.senha);
			this.$router.push({ name: 'home' });
        }
    },
}
</script>
<style scoped>
.row{
	padding-top: 80px;
}
</style>