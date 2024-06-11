document.addEventListener("DOMContentLoaded", function(){
    const path = window.location.pathname;
    const file = path.split('/').pop();
    
    switch(file){
        case "tc.html":
            boxTerminos();
            break;

        case "index.html":
            carruselHeader();
            carruselMain();
            break;

        case "servicios.html":
            carruselServicio();
            break;

        case "nosotros.html":
            carruselServicio();
            break;
    }
});

function boxTerminos(){
    const boton = document.querySelectorAll(".termcond__boton");
    const seccion = document.querySelectorAll(".termcond__seccion");

    boton.forEach(function(elemento, index){
        elemento.addEventListener("click", function(){
            mostrarElemento(index);
        })
    });

    function mostrarElemento(index){
        // console.log(index);
        
        seccion.forEach(function(seccion){
            seccion.classList.remove("termcond__seccion--activo");
        });

        boton.forEach(function(boton){
            boton.classList.remove("termcond__boton--activo");
        });

        seccion[index].classList.add("termcond__seccion--activo");
        boton[index].classList.add("termcond__boton--activo");
    }
}

function carruselHeader(){
    const info = document.querySelector(".descripcion");
    const iconoInfo = document.querySelectorAll(".descripcion__icono");
    let index = 0;

    iconoInfo.forEach(function(elemento, i){
        elemento = function(){
            mostrarElemento(i);
        }
        // elemento.addEventListener("click", function(){
        //     info.style.backgroundImage = `url(..//img/fondoprimero${i}.png)`;
        //     mostrarElemento(i);
        // });
    });

    function mostrarElemento(i){

        iconoInfo.forEach(elemento => {
            elemento.classList.remove("descripcion__icono--seleccion");
        });

        iconoInfo[i].classList.add("descripcion__icono--seleccion");

        index = i;
    }

    function automatico(){
        setInterval(() => {
            index = (index + 1) % iconoInfo.length; // Incrementar el índice y reiniciarlo si es necesario
            info.style.backgroundImage = `url(img/fondoprimero${index}.png)`;
            mostrarElemento(index);           
        }, 10000); // Cambiar cada 10 segundos
    }

    // Iniciar el carrusel automático
    automatico();
}


// function carruselPrincipal(){
//     const botonReversa = document.querySelector(".principal__flecha--derecha");
//     const botonAdelante = document.querySelector(".principal__flecha--izquierda");

//     const carrusel = document.querySelector(".principal__carrusel");
//     const carruselImagen =  document.querySelectorAll(".principal__imagen");

//     let index = 0;

//     function mostrarElemento(i){
//         const anchoImagen = carruselImagen[0].clientWidth;
//         // carrusel.style.transform = "translateX(" + (-i*anchoImagen) + "px);"
        
//         console.log(`translateX(${-i * anchoImagen}px)`);
//     }

//     botonAdelante.addEventListener("click", function(){
//         if(index < index.length - 1){
//             index++;
//             mostrarElemento(index);
//         }else{
//             index = 0;
//             mostrarElemento(index);
//         }
//     });

//     botonReversa.addEventListener("click", function(){
//         if(index > 0){
//             index--;
//             mostrarElemento(index);
//         }else{
//             index = index.length - 1;
//             mostrarElemento(index);
//         }
//     });
// }
function carruselMain(){
    const carruselImagen = document.querySelector('.principal__galeria');
    const imagen = document.querySelectorAll('.principal__imagen');
    const regresarBoton = document.querySelector('.principal__flecha--izquierda');
    const adelentarBoton = document.querySelector('.principal__flecha--derecha');

    let index = 0;

    function mostrarImagen(index) {
        const imageWidth = imagen[0].clientWidth;
        carruselImagen.style.transform = `translateX(${-index * imageWidth}px)`;
    }

    regresarBoton.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : imagen.length - 1;
        console.log("ejecutandoIzquierda")
        mostrarImagen(index);
    });

    adelentarBoton.addEventListener('click', () => {
        index = (index < imagen.length - 1) ? index + 1 : 0;
        console.log("ejecutandoDerecha")
        mostrarImagen(index);
    });
}

function carruselServicio(){
    const carrusel = document.querySelector('.servicio__contenido');
    const cards = Array.from(carrusel.children);
    const regresarBoton = document.querySelector('.principal__flecha--izquierda');
    const adelentarBoton = document.querySelector('.principal__flecha--derecha');
    const anchoCard = cards[0].getBoundingClientRect().width;
    let index = 0;

    function updateCarousel() {
        const espacio = -index * anchoCard;
        carrusel.style.transform = `translateX(${espacio}px)`;
    }

    adelentarBoton.addEventListener('click', () => {
        if (index < cards.length - 3) {
            index++;
        } else {
            index = 0; // Volver al primer elemento
        }
        updateCarousel();
    });

    regresarBoton.addEventListener('click', () => {
        if (index > 0) {
            index--;
        } else {
            index = cards.length - 3; // Volver al último grupo visible
        }
        updateCarousel();
    });

    updateCarousel();
}