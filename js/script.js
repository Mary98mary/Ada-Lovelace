document.getElementById("enviar").addEventListener("click",validaFormulario)

function validaFormulario() {
if(document.getElementById("nome").value !="" && document.getElementById("email").value !="" && document.getElementById("telefone").value !="") {
  alert("Prontinho! Você receberá as novidades pelo email!")
}
else {
  alert("Por favor, preencha os campos Nome, Email e Telefone!")
}  
}

