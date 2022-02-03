const botaoEnviar = document.querySelector("[data-botaoEnviar]");
const botaoDeletar = document.querySelector("[data-botaoDeletar");
const botaoEditar = document.querySelector("[data-botaoEditar");

console.log(botaoEnviar);
console.log(botaoDeletar);
console.log(botaoEditar);

function botaoCriarUsuarioHandler(e) {
  console.log(e.target);
}
botaoEnviar.addEventListener("click", botaoCriarUsuarioHandler);
botaoDeletar.addEventListener("click", botaoCriarUsuarioHandler);
botaoEditar.addEventListener("click", botaoCriarUsuarioHandler);
