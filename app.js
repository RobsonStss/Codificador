const texto = [];
const chavers = [e="nter", i="mes", a="i", o="ber", u="fat"]

function mostrarTexto() {
    var mensagem = document.getElementById('conteudo__entrada__texto').value;
    texto.push(mensagem);
    document.getElementById('conteudo__saida__texto').value = texto;
}

function desaparecerImagem() {
    document.getElementById("conteudo__saida__texto").style.backgroundImage = "none";
}

function criptografar() {
    if (mensagem.indexOf("a")) {
        
    }
}