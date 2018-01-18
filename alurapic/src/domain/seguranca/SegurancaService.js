import Vue from 'vue'
import VueRouter from 'vue-router'

export default class SegurancaService {
    // Construtor da Classe
    constructor(){
        console.log('Entro no construtor da class SegurancaService');
    };
    // Chamo para expulsar user
    // Assim funciona porem no meu codigo de produção não tenho certeza que vou semtre chamar
    // esse metodo dentro de um componente aonde tenho um this.$router
    ExitUser (router) {
        router.push({ name: 'login' });
    };
}