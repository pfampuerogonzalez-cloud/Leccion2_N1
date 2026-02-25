let botón = document.getElementById("botón");

botón.addEventListener("click", function(){
    document.getElementById("Titulo").scrollIntoView({
        behavior:"smooth"
    })
})