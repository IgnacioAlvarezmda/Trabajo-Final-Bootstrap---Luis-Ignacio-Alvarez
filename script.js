const flecha= document.getElementById("flecha-abajo")

window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
        flecha.classList.add("desaparecer")
}})

const contador= document.getElementById("cuenta_atras")





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

botonentradas.addEventListener("click",(e)=>{
    if (nombre==""||email==""||cantidad==""){
        alert ("Por favor completa todos los campos del formulario correctamente.")
        return;
        alert("Gracias por solicitar informacion, revisá tu correo electrónico para ver los detalles de las entradas. :) ")
    }})