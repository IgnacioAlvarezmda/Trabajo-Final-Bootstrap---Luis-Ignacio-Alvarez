
const flecha= document.getElementById("flecha-abajo")

window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
        flecha.classList.add("desaparecer")
}})

/*-------------boton que te lleva mapa-----------*/

const botonllegar= document.getElementById("boton-llegar")
const destino= document.getElementById("seccion-mapa")

botonllegar.addEventListener("click",()=>{
    if (destino){
        destino.scrollIntoView({behavior:"smooth"})
    }
})

/*---------------no dejar mandar form---------------*/

const botonentradas= document.getElementById("boton")

botonentradas.addEventListener("click",(e)=>{
    e.preventDefault();

    const nombre= document.getElementById("nombre").value;
    const email= document.getElementById("email").value;
    const cantidad= document.getElementById("cantidad").value;

    if (nombre=="" || email=="" || cantidad==""){
        alert ("Por favor complete todos los campos del formulario.")
    }
    else{
        alert ("Iformacion enviada correctamente. Revise su correo.")
    }
})


/*---------------mostrar div info peleas------------*/

const tarjetascombates= document.querySelectorAll(".combates")

    tarjetascombates.forEach((tarjeta)=>{
        tarjeta.addEventListener("click",()=>{
            const divinfo= tarjeta.querySelector(".infoextracombates")
            if(divinfo){
                divinfo.classList.toggle("mostrar-info");
            }
        })        
    })
/*-----------boton girtotrio nav------------*/

const botonnav= document.getElementById("imagen-boton")
const nav= document.getElementById("navbarnav")
    if (nav && botonnav)
    {
        nav.addEventListener("show.bs.collapse",()=>{
            botonnav.classList.add("rotar");
        })
        nav.addEventListener("hide.bs.collapse",()=>{
            botonnav.classList.remove("rotar");
        })
        
    }