## Autenticação com vue.js

Front em vue.js, utiliza o `axios` para conectar com uma API backend fake que retorna access token para autenticação do usuário.

Como funciona:

- usuário realiza cadastro em '/cadastro' e efetua login em '/login'
- recebe access token do backend e armazena no localstorage
- rotas '/home' e '/gerentes' são protegidas com o `vue router`, o acesso só é permitido se houver access token armazenado

Os estados do token e do usuário são gerenciados através do `vuex`.


