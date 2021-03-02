document.addEventListener('DOMContentLoaded', function(){
    scrollNav();

    navegacionFija();
});


function navegacionFija(){
    const barra = document.querySelector('.header');

    //Registrar el intersection Observer
    const observer = new IntersectionObserver( function(entries){
        if(entries[0].isIntersecting) {
            barra.classList.remove('fijo');
        } else{
            barra.classList.add('fijo');
        }
    })

    //Elemento a observar 
    observer.observe(document.querySelector('.informacion-evento'));
}

function scrollNav(){
    const enlaces = document.querySelectorAll(".navegacion-principal a");
 
for (const enlace of enlaces) {
  enlace.addEventListener("click", clickHandler);
}
 
    function clickHandler(e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        
        document.querySelector(href).scrollIntoView({
            behavior: "smooth"
        });
    }
}

document.addEventListener('DOMContentLoaded', function(){
    crearGaleria();
});

function crearGaleria() {
    const galeria = document.querySelector('.galeria__imagenes');

    for (let i = 1; i <= 12; i++){
        const imagen = document.createElement('IMG');
        imagen.src = `build/img/thumb/${i}.webp`;
        imagen.dataset.imagenId = i;

        //añadir funcion para mostrar imagen
        imagen.onclick = mostrarImagen;

       const lista = document.createElement('LI');
       lista.appendChild(imagen);
       galeria.appendChild(lista);
    }
}

function mostrarImagen(e) {
    const id = parseInt(e.target.dataset.imagenId);

    //Generar la imagen
    const imagen = document.createElement('IMG');
    imagen.src = `build/img/grande/${id}.webp`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');

    //cuando se da click cerrar la imagen 
    overlay.onclick = function(){
        overlay.remove();
    }

    //boton cerrar imagen
    const cerrarImagen = document.createElement('P');
    cerrarImagen.textContent = 'X';
    cerrarImagen.classList.add('btn-cerrar');

    //cuando se precione cerrar imagen
    cerrarImagen.onclick = function(){
        overlay.remove();
    }

    overlay.appendChild(cerrarImagen)

    //Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('fijar-body')

}