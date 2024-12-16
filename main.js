function playSonido(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

// declarando una referencia
const listaTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaTeclas.length; contador++) {
    const tecla = listaTeclas[contador];//me da la tecla en la posicion del contador 0,1...
    const instrumento =tecla.classList[1]; //accedo a la segunda clase del elemento que indica a cual instrumento hace referencia
    //console.log(instrumento);
    console.log(contador);

    //ver el id que tienen los audios en el html,
    // por ende hacemos la siguiente creacion del template string
    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function(){ //funcion anonima
        playSonido(idAudio);
    };

    //el panel tambien puede ser utilizado por medio del espacio y enter debido a eso las siguientes funciones
    tecla.onkeydown = function(event){//la informacion que esta ligada al evento
        //console.log(event);
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('activa');
        }
    };

    tecla.onkeyup = function(event){
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.remove('activa');
        }
    }
}
