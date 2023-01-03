////// digitação/////////
const saida = document.querySelector('#saida');
function digitacao(texto, contador) {
  if (contador < texto.length) {
    setTimeout(() => {
      saida.textContent += texto.charAt(contador);
      contador++;
      digitacao(texto, contador);
    }, 50);
  }
}
digitacao(
  'Ola meu nome é Pedro Henrique Curso Analise e Desenvolvimento de Sistemas,Em paralelo invisto em cursos para Front-End e UI/UX Designer!',
  0,
);
////////modal////////
const ativarmodal = document.querySelector('.link-tech');
const desativarmodal = document.querySelector('.fecharmodal');

function active() {
  document.querySelector('.conteudotech').classList.add('active');
}
function desativar() {
  document.querySelector('.conteudotech').classList.remove('active');
}
desativarmodal.addEventListener('click', desativar);
ativarmodal.addEventListener('click', active);
///////////////segundomodal///////
const ativarmodalprojetos = document.querySelector('.link-projetos');
const desativarmodalprojetos = document.querySelector('.fecharmodalprojetos');

function activeprojeto() {
  document.querySelector('.conteudoprojetos').classList.add('activeprojetos');
}
function desativarmodalprojeto() {
  document
    .querySelector('.conteudoprojetos')
    .classList.remove('activeprojetos');
}
desativarmodalprojetos.addEventListener('click', desativarmodalprojeto);
ativarmodalprojetos.addEventListener('click', activeprojeto);
/////menuhamburguer/////

const btnmobile = document.querySelector('#btn-mobile');
function activemenu() {
  document.querySelector('#nav').classList.toggle('activemenu');
}

btnmobile.addEventListener('click', activemenu);
