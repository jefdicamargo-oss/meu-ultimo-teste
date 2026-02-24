/* 
JavaScript NÃO é JAVA

    Variáveis -> Um pedacinho de memória
    do computador, que voce separa e pode
    guardar QUALQUER coisa.

    console.log -> Uma forma de ENXERGA
    o que eu tenho no JavaScript
    Dentro do Navegador

    Funcões - Pedacinho código, QUE
    Só executa, quando é chamado!

    Algoritmo
    [x] Saber quem é o botão
    [x] Saber quando o botão foi clicado
    [x] Saber quem é Bola colorida
    [x] Trocar a cor da Bola colorida  
    [x] Saber quem é o copo
    [x] Trocar a imagem do copo
*/
let imagem = document.querySelector(".imagem-copo")
let fundo = document.querySelector(".circulo")
function trocaImagem(endereco) {
    imagem.src = endereco
}

function trocafundo(cor) {

    fundo.stylo.backgraud = cor

}
