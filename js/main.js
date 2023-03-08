function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if(elemento && elemento.localName === 'audio'){//localname mostra qual o tipo daquele objeto. ex: audio
        elemento.play();
    }else{
        console.log('Elemento não encontrado ou seletor inválido!');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(var contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador]

    const instrumento = tecla.classList[1]; //classList[1] pq é nessa posíção que conseguimos extrair um dos nomes da classe - que possui dois nomes - sendo esse o nome do isntrumento

    const idAudio = `#som_${instrumento}`; //para que parte de uma string seja mutável basta fazer como na constante idAudio -> crase + frase constante + "$" + {coisa mutável} + crase

    tecla.onclick = function(){ //onclick = quando clicado
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(evento){ //onkeydown = quadno a tecla for pressionada

        if(evento.code === 'Space' || evento.code === 'Enter'){ //.code é uma das propriedades do evento
            tecla.classList.add("ativa");
        }

    }

    tecla.onkeyup = function(){ //onkeyup = quando a tecla nãoestiver pressionada
        tecla.classList.remove("ativa");
    }
}
