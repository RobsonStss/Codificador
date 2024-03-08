// chaves = [e="nter", i="mes", a="i", o="ber", u="fat"];
var textoEntrada = document.querySelector("#conteudo__entrada__texto");



function criptografar() {
    var textoSaida = textoEntrada.value;
    var resultadoCriptgrafado = textoSaida.replace(/a/g, "ai").replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat");
    console.log(resultadoCriptgrafado);
}

function desaparecerImagem() {
    document.getElementById("conteudo__saida__texto").style.backgroundImage = "none";
}

function mostrarTexto() {
    document.getElementById('conteudo__saida__texto').value = resultado;
}

function comportamento() {
    criptografar();
}

