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
