let imagem = document.querySelector('.drink');
let background1 = document.querySelector('.background');
let background2 = document.querySelector('button');
let background3 = document.querySelector('span');

function trocaImagem(diretorio) {
    imagem.src = diretorio
}

function trocaBackground(color) {
    background1.style.background = color
    background2.style.background = color
    background3.style.color = color
}