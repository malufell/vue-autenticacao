<template>
  <nav class="navbar navbar-expand-lg navbar-bytebank">
    <a class="navbar-brand" href="#">ByteBank</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <NavUsuarioLogado v-if="usuarioLogado" />
      <NavVisitante v-else />

    </div>
  </nav>
</template>

<script>
import NavUsuarioLogado from "./NavUsuarioLogado.vue";
import NavVisitante from "./NavVisitante.vue";

export default {
  components: { 
    NavUsuarioLogado, NavVisitante 
  },

  computed: {
    usuarioLogado() {
      return Boolean(this.$store.state.token);
    },
  },
};
</script>

<style>
.navbar {
  background: #27ae60;
}
.navbar-bytebank a {
  color: #fff;
}
.navbar-bytebank a:hover {
  color: #000;
}
</style>