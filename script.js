
const flecha= document.getElementById("flecha-abajo")

window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
        flecha.classList.add("desaparecer")
}})


const botonllegar= document.getElementById("boton-llegar")
const destino= document.getElementById("seccion-mapa")

botonllegar.addEventListener("click",()=>{
    if (destino){
        destino.scrollIntoView({behavior:"smooth"})
    }
})

const botonentradas= document.getElementById("boton")
const nombre= document.getElementById("nombre").value;
const email= document.getElementById("email").value;
const cantidad= document.getElementById("cantidad").value;


    const tarjetascombates= document.querySelectorAll(".combates")

    tarjetascombates.forEach((tarjeta)=>{

        tarjeta.addEventListener("click",()=>{

            const divinfo= tarjeta.querySelector(".infoextracombates")

            if(divinfo){
                divinfo.classList.toggle("mostrar-info");
            }
        })        
    })

