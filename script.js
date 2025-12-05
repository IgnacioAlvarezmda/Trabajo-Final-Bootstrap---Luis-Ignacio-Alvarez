flecha= document.getElementById("flecha-abajo")

window.addEventListener("scroll",()=>{
    if(window.scrollY>100){
        flecha.classList.add("desaparecer")
}})

contador= document.getElementById("cuenta_atras")
