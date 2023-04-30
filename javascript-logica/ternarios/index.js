pontuacaoUsuario = 999;


// if(pontuacaoUsuario >=1000){
//     nivelUsuario = 'Usuário VIP';
// }else {
//     nivelUsuario = 'Usuário comum';
// }

// Essas linhas de código podem ser resumidas em uma linha utilizando o operador ternário

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário comum';
console.log(nivelUsuario)