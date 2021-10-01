<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="efetuarLogin">
      <div class="form-group">
      <p class="my-4 alert alert-danger small p-2" v-if="mensagemErro">
        {{ mensagemErro }}
      </p>
        <label for="email">E-mail</label>
        <input type="email" class="form-control" v-model="usuario.email" />
      </div>
      <div class="form-group">
        <label for="senha">Senha</label>
        <input type="password" class="form-control" v-model="usuario.senha" />
      </div>
      <button type="submit" class="btn btn-primary brn-block">Logar</button>
      <div class="mt-3">
        <router-link :to="{ name: 'cadastroUsuario' }">
          cadastre-se aqui!
        </router-link>
      </div>
    </form>
  </div>
</template> 

<script>
export default {
  data() {
    return {
      usuario: {},
      mensagemErro: "",
    };
  },

  methods: {
    efetuarLogin() {
      this.$store
        .dispatch("efetuarLogin", this.usuario)
        .then(() => {
          this.$router.push({ name: "gerentes" });
          this.mensagemErro = "";
        })
        .catch((erro) => {
          if (erro.request.status === 401) {
            this.mensagemErro = "e-mail ou senha inválidos";
          }
        });
    },
  },
};
</script>