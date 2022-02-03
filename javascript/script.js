const botaoCriarUsuario = document.querySelector("[data-botaoCriar]");
const botaoDeletar = document.querySelector("[data-botaoDeletar");
const botaoEditar = document.querySelector("[data-botaoEditar");

const formularioCadastro = document.querySelectorAll(
  "[data-formularioCadastro] .input"
);
const formularioEdit = document.querySelector("[data-formularioEdita]");

const botaoPesquisa = document.querySelector(".barra-pesquisa__back");
const barraPesquisa = document.querySelector("[data-barraPesquisa]");

function botaoCriarUsuarioHandler(e) {
  e.preventDefault();
  const formularioCadastroObj = new FormData();

  formularioCadastroObj.append("nome", formularioCadastro[0].value);
  formularioCadastroObj.append("sobrenome", formularioCadastro[1].value);
  formularioCadastroObj.append("dataNascimento", formularioCadastro[2].value);
  console.log(formularioCadastroObj);
  console.log(formularioCadastroObj.get("nome"));
  console.log(formularioCadastroObj.get("sobrenome"));
  console.log(formularioCadastroObj.get("dataNascimento"));
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
