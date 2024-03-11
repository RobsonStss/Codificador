var textoInput = document.querySelector('#main__entrada__texto');
var textOutput = document.querySelector('#main__saida__texto');
var resultadoCriptgrafado;
var resultadoDescriptografado;

function criptografar() {
    var texto = textoInput.value;
    resultadoCriptgrafado = texto.replace("e", "enter").replace("i", "imes").replace("a", "ai").replace("o", "ober").replace("u", "ufat");


    document.getElementById('main__saida').innerHTML = '<textarea name="name" id="main__saida__texto" placeholder="Nenhum texto encontrado">' + resultadoCriptgrafado +'</textarea>' + '<button class="botao-copiar" id="copiar" onclick="copiar()">Copiar</button>';

    document.getElementById("main__saida__texto").style.backgroundImage = "none";
}

function descriptografar() {
    var texto = textoInput.value;
    resultadoDescriptografado = texto.replace("enter", "e").replace("imes", "i").replace("ai", "a").replace("ober", "o").replace("ufat", "u");

    document.getElementById('main__saida').innerHTML = '<textarea name="name" id="main__saida__texto" placeholder="Nenhum texto encontrado">' + resultadoDescriptografado +'</textarea>' + '<button class="botao-copiar" id="copiar" onclick="copiar()">Copiar</button>';

    document.getElementById("main__saida__texto").style.backgroundImage = "none";
}

function copiar() {
    var copiarTexto = document.getElementById("main__saida__texto");
    copiarTexto.select();
    navigator.clipboard.writeText(copiarTexto.value);
    alert(`Texto copiado ${copiarTexto.value}`);
}