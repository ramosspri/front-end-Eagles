const botaoCriarUsuario = document.querySelector("[data-botaoCriar]");
const botaoDeletar = document.querySelector("[data-botaoDeletar");
const botaoEditar = document.querySelector("[data-botaoEditar");

const formularioCadastro = document.querySelector("[data-formularioCadastro]");
const formularioEdit = document.querySelector("[data-formularioEdita]");

const botaoPesquisa = document.querySelector(".barra-pesquisa__back");
const barraPesquisa = document.querySelector("[data-barraPesquisa]");

function botaoCriarUsuarioHandler(e) {
  console.log(e.target);
}

function botaoDeletarUsuarioHandler(e) {
  console.log(e.target);
}

function botaoEditarUsuarioHandler(e) {
  console.log(e.target);
}

function barraPesquisaHandler(e) {
  console.log(barraPesquisa.value);
}

botaoPesquisa.addEventListener("click", barraPesquisaHandler);

botaoCriarUsuario.addEventListener("click", botaoCriarUsuarioHandler);
botaoDeletar.addEventListener("click", botaoDeletarUsuarioHandler);
botaoEditar.addEventListener("click", botaoEditarUsuarioHandler);
