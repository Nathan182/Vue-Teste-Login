<template>
  <div>
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
}
</script>

<style>
 
  /*painel-fade-enter // antes do elemento ser incluído ou removido, o estado atual*/
  /*painel-fade-enter-active // quando o elemento esta sendo incluído*/
  /*painel-fade-leave-active // quando o elemento esta sendo removido*/

  .pagina-enter, .pagina-leave-active {
    opacity: 0
  }

  .pagina-enter-active, .pagina-leave-active {
    transition: opacity .4s
  }
</style>
