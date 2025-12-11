/*-------------ocultar flecha index--------------------*/

const flecha= document.getElementById("flecha-abajo")

window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
        flecha.classList.add("desaparecer")
}})

/*------------boton que te lleva mapa-----------------*/

const botonllegar= document.getElementById("boton-llegar")
const destino= document.getElementById("seccion-mapa")

botonllegar.addEventListener("click",()=>{
    if (destino){
        destino.scrollIntoView({behavior:"smooth"})
    }
})
/*-----------------cuenta atras------------------------*/

const contador= document.getElementById("cuenta-atras")
const fechafinal= new Date("December 20, 2025 18:00:00").getTime();

const actualizarcontador= setInterval(()=>{

    const actual= new Date().getTime();
    const diferencia= fechafinal - actual;

    const dias= Math.floor(diferencia/(1000*60*60*24));
    const horas= Math.floor((diferencia % (1000*60*60*24))/(1000*60*60));
    const minutos= Math.floor((diferencia % (1000*60*60))/(1000*60));
    const segundos= Math.floor((diferencia % (1000*60))/1000);

        if (contador){
            contador.innerHTML=`${dias}d ${horas}h ${minutos}m ${segundos}s`;
        }

        if (diferencia<0){
        clearInterval(actualizarcontador);
        if (contador){
            contador.innerHTML= "Evento en curso o finalizado";
            contador.style.color= "#ff4d4d";
        }}
},1000);

/*---------------no dejar mandar form-------------------*/

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


/*---------------mostrar div info peleas--------------*/

const tarjetascombates= document.querySelectorAll(".combates")

    tarjetascombates.forEach((tarjeta)=>{
        tarjeta.addEventListener("click",()=>{
            const divinfo= tarjeta.querySelector(".infoextracombates")
            if(divinfo){
                divinfo.classList.toggle("mostrar-info");
            }
        })        
    })
/*--------------boton girtotrio nav------------------*/

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