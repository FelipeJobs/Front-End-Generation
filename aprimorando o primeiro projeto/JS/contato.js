let nome = document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")

/* aqui eu utilizei métodos para chamar dados do DOM, vemos que para usar o selector eu posso chamar a classe ou id, mas devo usar o ponto para chamar classe e jogo da velha para chamar ids. */

/* aqui eu vou utilizar o java scrip para aumentar o tamanho do meu campo de input de nome e email. */

nome.style.width = '43%';
email.style.width = '43%';

let vn = false
let ve = false
let vas = false

function validaNome() {
    let nm = document.querySelector('#nm')
    if(nome.value.length < 3){
        nm.innerHTML =('Nome inválido')
        nm.style.color = 'red'
    }
    else{
        nm.innerHTML = ('Nome Válido')
        nm.style.color = 'blue'
        vn = true


    }
}
/* O inner html é comando que faz uma variável receber um string */

function validaemail(){
    let textemail = document.querySelector("#textemail")
    if (email.value.indexOf('@') == -1 || email.value.indexOf(".") == -1) {
        textemail.innerHTML = "E-mail Inválido"
        textemail.style.color = "red"
    } else {
        textemail.innerHTML = "E-mail Válido"
        textemail.style.color = "green"
        ve = true
    }
    /* esse método não é mais fácil de validar email, mas utilizei ele por ter sido utilizado na aula. */
}

function validaassunto(){
    let txtassunto = document.querySelector('#textassunto')
    if(assunto.value.length > 255){
        txtassunto.innerHTML = 'O texto deve ter no máximo 255 caracteres'
        txtassunto.style.color = 'red'
        txtAssunto.style.display = "block"
        /* esse comando block impede que o usuário continue digitando, neste caso quando ele digitar mais de 255 caractres. */

    }
    else{
        txtassunto.style.display = 'none'
        vas = true
    }

}

function enviar(){
    if(vn == true && ve == true && vas == true ){
        alert ('Formulário enviado com sucesso!')
    }
    else {
        alert("Formulário incompleto. Preencha todos os campos")
    }

}





   
    
   



