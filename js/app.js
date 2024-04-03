var textoInput = document.querySelector('#main__entrada__texto');
var textOutput = document.querySelector('#main__saida__texto');
var resultadoCriptgrafado;
var resultadoDescriptografado;

function criptografar() {
    if (textoInput.value == "") {
        alert("Digite um texto");
    }else {
        var texto = textoInput.value;
        resultadoCriptgrafado = texto.replace("e", "enter").replace("i", "imes").replace("a", "ai").replace("o", "ober").replace("u", "ufat");
    
        document.getElementById('main__saida__texto').value = resultadoCriptgrafado;
        // Faz com que desapareca os textos padrão e mostre o texto criptografado
        document.getElementById("main__saida__container").style.display = "none";
        document.getElementById("main__saida__texto").style.display = "block";
        document.getElementById("main__saida__copiar").style.display = "block";
        document.getElementById("main__entrada__texto").value = "";  
    }

}


function descriptografar() {
    if (textoInput.value == "") {
        alert("Digite um texto");
    }else {
        var texto = textoInput.value;
        resultadoDescriptografado = texto.replace("enter", "e").replace("imes", "i").replace("ai", "a").replace("ober", "o").replace("ufat", "u");

        document.getElementById('main__saida__texto').value = resultadoDescriptografado;

        document.getElementById("main__saida__texto").style.backgroundImage = "none";
        document.getElementById("main__entrada__texto").value = "";
    }
}

function copiar() {
    var copiarTexto = document.getElementById("main__saida__texto");
    copiarTexto.select();
    navigator.clipboard.writeText(copiarTexto.value);
    alert(`Texto copiado ${copiarTexto.value}`);
}