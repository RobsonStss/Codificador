var lista = [];
// const chaves = [e="nter", i="mes", a="i", o="ber", u="fat"];
var mensagem;

function pegarTexto() {
    mensagem = document.getElementById('conteudo__entrada__texto').value;
    lista.push(mensagem);
}

function desaparecerImagem() {
    document.getElementById("conteudo__saida__texto").style.backgroundImage = "none";
}

function criptografar() {
    if (mensagem.includes('a')) {
        lista.push("i");
    }
    if (mensagem.includes('e')) {
        lista.push("nter");
    }
}

function embaralharTexto() {
    let a = lista.length *  Math.random(lista);
    console.log(lista);
}

function mostrarTexto() {
    document.getElementById('conteudo__saida__texto').value = lista;
}

function comportamento() {
    pegarTexto();
    criptografar();
    mostrarTexto();
    desaparecerImagem();
    embaralharTexto();
}

