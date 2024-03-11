var textoInput = document.querySelector('#main__entrada__texto');
var textOutput = document.querySelector('#main__saida__texto');
var resultadoCriptgrafado;
var resultadoDescriptografado;

function criptografar() {
    var texto = textoInput.value;
    resultadoCriptografado = texto.replace(/a/g, "ai").replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat");


    document.getElementById('main__saida').innerHTML = '<textarea name="name" id="main__saida__texto" placeholder="Nenhum texto encontrado">' + resultadoCriptografado +'</textarea>' + '<button class="botao-copiar" id="copiar" onclick="copiar()">Copiar</button>';

    document.getElementById("main__saida__texto").style.backgroundImage = "none";
}

function descriptografar() {
    var texto = textoInput.value;
    resultadoDescriptografado = texto.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('main__saida').innerHTML = '<textarea name="name" id="main__saida__texto" placeholder="Nenhum texto encontrado">' + resultadoDescriptografado +'</textarea>' + '<button class="botao-copiar" id="copiar" onclick="copiar()">Copiar</button>';

    document.getElementById("main__saida__texto").style.backgroundImage = "none";
}

function copiar() {
    var copiarTexto = document.getElementById("main__saida__texto");
    copiarTexto.select();
    navigator.clipboard.writeText(copiarTexto.value);
    alert(`Texto copiado ${copiarTexto.value}`);
}