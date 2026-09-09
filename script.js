const botao = document.querySelector("#botaoMensagem");
cosnt mensagem = document.querySelector('#mensagemInterativa');
botao.addEventListener("click, mostrarMensagem");
function mostrarMensagem() {
    mensagem.textContent =
      "Você acabou de criar uma interação JavaScript";
}