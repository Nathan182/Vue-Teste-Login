<template>
	<div class="container">
		<div class="row">
			<div class="col-md-6 col-md-offset-3">
				<div class="panel panel-primary">
					<div class="panel-heading text-center">DENTRO DO SISTEMA <button type="button" class="btn btn-default" @click="sair">sair</button></div>
					<div class="panel-body">
          
          <p>contador : {{ contador }}</p>
          <p>Vou expulsa quando o contador for maior ou igual a 5</p>
          <button type="button" class="btn btn-default" @click="verifica">incrementa</button>
          </div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import SegurancaService from '../../domain/seguranca/SegurancaService'
export default {
  data() {
    return {
      contador: 0,
      serice: new SegurancaService()
    };
  },
  methods: {
    sair(){
      this.serice.ExitUser(this.$router);
      //assim funciona
      //this.$router.push({ name: 'login' });
    },
    verifica(){
      this.contador++;
      if (this.contador >= 5){
        // devo expulsar o user de dentro do sistema
        //this.$router.push({ name: 'login' });
        this.serice.ExitUser(this.$router);
      }
    }
  },
};
</script>

<style>
.row{
	padding-top: 80px;
}
</style>
