const box = document.querySelector(".container"); /*constante que abrange o "container"*/
const imagens = document.querySelectorAll(".container img"); /*constante que abrange o "container imagem"*/

let contador = 0; /*criada para manipular*/

function slider() {
  contador++; /*contar a quantidade de vezes que você usar o slider*/

  if (contador > imagens.length - 1) { /*condição*/
    contador = 0;
  } /*Caso o contador seje maior que quantidade de fotos, menos 1, ele voltará para o zero*/

  box.style.transform = `translateX(${-contador * 1250}px)`; /*verificação para ve se chegou ao final*/
}

setInterval(slider, 2000); /*intervalo do fim para recomeçar*/
