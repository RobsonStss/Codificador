const texto = [];
const chaves = [e="nter", i="mes", a="i", o="ber", u="fat"];
var mensagemCompleta = []
var mensagem = "";


function mostrarTexto() {
    mensagem = document.getElementById('conteudo__entrada__texto').value;
    texto.push(mensagem);
    document.getElementById('conteudo__saida__texto').value = texto;
}

function desaparecerImagem() {
    document.getElementById("conteudo__saida__texto").style.backgroundImage = "none";
}

function criptografar() {
    if (mensagem.includes("a")) {
        const adicionar = [mensagem + "i"];
        mensagem.push(adicionar);
        console.log(adicionar[0]);
    }
}

console.log(mensagemCompleta);

function comportamento() {
    mostrarTexto();
    desaparecerImagem();
    criptografar();
}