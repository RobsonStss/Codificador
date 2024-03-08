var textoEntrada = document.querySelector("#conteudo__entrada__texto");
var resultadoCriptgrafado;
var resultadoDescrip;

function criptografar() {
    var textoSaidaCript = textoEntrada.value;
    resultadoCriptgrafado = textoSaidaCript.replace(/a/g, "ai").replace(/e/g, "enter").replace(/i/g, "imes").replace(/o/g, "ober").replace(/u/g, "ufat");
}

function descriptografar() {
    var textoSaidaDescript = textoEntrada.value;
    resultadoDescrip = textoSaidaDescript.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");
}

function desaparecerImagem() {
    document.getElementById("conteudo__saida__texto").style.backgroundImage = "none";
}

function mostrarTextoCrip() {
    document.getElementById("conteudo__saida__texto").value = resultadoCriptgrafado;
}

function mostrarTextoDescrip() {
    document.getElementById("conteudo__saida__texto").value = resultadoDescrip;
}

function botaoCriptografar() {
    criptografar();
    desaparecerImagem();
    mostrarTextoCrip();
}

function botaoDescriptografar() {
    descriptografar();
    mostrarTextoDescrip();
    desaparecerImagem();
}

function copiarTexto() {
    var copiarTexto = document.getElementById("conteudo__saida__texto");
    copiarTexto.select();
    navigator.clipboard.writeText(copiarTexto.value);
    alert(`Texto copiado ${copiarTexto.value}`);
}