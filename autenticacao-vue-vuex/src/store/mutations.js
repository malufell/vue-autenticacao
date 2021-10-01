export default {
  DEFINIR_USUARIO_LOGADO(state, { token, usuario }) {
    state.token = token
    state.usuario = usuario
  },

  DESLOGAR_USUARIO(state) {
    localStorage.removeItem("token-curso-vue")
    state.token = null
    state.usuario = {}
  }
}