let xhr = new XMLHttpRequest();
const botaoCriarUsuario = document.querySelector("[data-botaoCriar]");
const botaoDeletar = document.querySelector("[data-botaoDeletar");
const botaoEditar = document.querySelector("[data-botaoEditar");

const formularioCadastro = document.querySelectorAll(
  "[data-formularioCadastro] .input"
);
const formularioUsuario = document.querySelectorAll(
  "[data-formularioEdita] .input2"
);
const formularioEdit = document.querySelector("[data-formularioEdita]");

const botaoPesquisa = document.querySelector(".barra-pesquisa__back");
const barraPesquisa = document.querySelector("[data-barraPesquisa]");


let usuarios = document.querySelectorAll("[data-id]");
let usuarioClicado;

let linha= ``;
let linhaHtml;

// let modal = document.querySelector("modalEditar");
let nomeUsuario = document.querySelector(".nomeUsuario");
let sobrenomeUsuario = document.querySelector(".sobrenomeUsuario");
let dataUsuario = document.querySelector(".dataNascimento");


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json")

var myInit = {
method: 'GET',
headers: myHeaders,
mode: 'no-cors',
cache: 'default',};



function selectUser(e) {
  usuarioClicado =  e.target.parentElement;

  nomeUsuario.value = usuarioClicado.dataset.nome;
  sobrenomeUsuario.value = usuarioClicado.dataset.sobrenome;
  dataUsuario.value = usuarioClicado.dataset.datanascimento;


}


// PESQUISAR USUÁRIO
function pesquisarUsuario(id) {
  // let fragao = document.querySelector("#fragao");
  let corpoTabelaPassado = document.querySelectorAll("tbody .linha");

  corpoTabelaPassado.forEach((linha)=> {
    console.log(linha);
    linha.remove();
  })

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json")

  var myInit = {method: 'GET',
                headers: myHeaders,
                mode: 'no-cors',
                cache: 'default'};

  fetch(`http://localhost:8080/api/usuarios/${id}`, myHeaders)
  .then(res => {
    return res;
  }) 
  .then(function(response) {
    return response.json();
  })
  .then(function(respjson) {
      linha = `
                  <td>${respjson.id}</td>
                  <td>${respjson.nome}</td>
                  <td>${respjson.sobrenome}</td>
                  <td>${respjson.datanascimento}</td>
                `
      linhaHtml = document.createElement("tr");

      linhaHtml.setAttribute("class", "linha");
      linhaHtml.setAttribute("data-toggle", "modal");
      linhaHtml.setAttribute("data-target", "#teste");
      linhaHtml.setAttribute("data-usuario", "");
      linhaHtml.setAttribute("data-id", `${respjson.id}`);
      linhaHtml.setAttribute("data-nome", `${respjson.nome}`);
      linhaHtml.setAttribute("data-sobrenome", `${respjson.sobrenome}`);
      linhaHtml.setAttribute("data-datanascimento", `${respjson.datanascimento}`);

      linhaHtml.innerHTML = linha;
      
      let corpoTabela1 = document.querySelector("tbody");
      corpoTabela1.innerHtml = linhaHtml;
      corpoTabela1.appendChild(linhaHtml);
    
      // RESELECIONAR;
      usuarios = document.querySelectorAll("[data-id]");
      usuarios.forEach( (usuario) => {
        usuario.addEventListener("click", selectUser);
      })
      
    })
}

// BOTÃO CRIAR USUÁRIO

function botaoCriarUsuarioHandler(e) {
  e.preventDefault();
  const formularioCadastroObj = {
    nome: formularioCadastro[0].value,
    sobrenome: formularioCadastro[1].value,
    dataNascimento:formularioCadastro[2].value,
  }

  let formularioJson = JSON.stringify(formularioCadastroObj);

  return fetch('http://localhost:8080/api/usuarios/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: formularioJson,
    }).then(response => response.json()).then((resposta) => console.log(resposta));
}

// BOTÃO DELETAR USUÁRIO

function botaoDeletarUsuarioHandler() {
  let id = usuarioClicado.dataset.id;

  fetch(`http://localhost:8080/api/usuarios/${id}`, {
      method: 'DELETE',
  }).then(response => response.json()).then((resposta) => console.log(resposta));

}
// BOTÃO EDITAR USUÁRIO

function botaoEditarUsuarioHandler(e) {
  formularioUsuario

  const formularioCadastroObj = {
    nome: formularioUsuario[0].value,
    sobrenome: formularioUsuario[1].value,
    dataNascimento:formularioUsuario[2].value,
  }

  let formularioJson = JSON.stringify(formularioCadastroObj);

  fetch('http://localhost:8080/api/usuarios/', {
      method: "PUT",                    // declares HTTP request method
      headers: {
        "Content-Type": "application/json"    // declares format of data
      },
      body: formularioJson,
    }).then(response => response.json()).then((resposta) => console.log(resposta));
}

function barraPesquisaHandler(e) {
  pesquisarUsuario(barraPesquisa.value);
}

botaoPesquisa.addEventListener("click", barraPesquisaHandler);

botaoCriarUsuario.addEventListener("click", botaoCriarUsuarioHandler);
botaoDeletar.addEventListener("click", botaoDeletarUsuarioHandler);

usuarios.forEach( (usuario) => {
  usuario.addEventListener("click", selectUser);
})

botaoEditar.addEventListener("click", botaoEditarUsuarioHandler);


//   xhr.open('GET', 'http://localhost:8080/api/usuarios', true);
// xhr.setRequestHeader('Content-Type', 'application/json');

//     xhr.onprogress = function(){
//         // console.log('Carregando');
//     }

//     xhr.onload = function(){
//         resp = JSON.parse(xhr.response);
//         console.log(resp)
//     }
// xhr.send();

