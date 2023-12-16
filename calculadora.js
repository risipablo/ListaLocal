
const pantalla = document.querySelector(".pantalla");
const zero = document.getElementById("zero")
const equal = document.getElementById("equal")
const botones = document.querySelectorAll(".btn")

//  Primero se debe recorrer los botones 

botones.forEach(boton => {
    boton.addEventListener("click" , () => {
        const btnApretado = boton.textContent // Se crea una variable nueva para apretar los botones que deseamos para eso se usa "textContext"

        // Funcion de borrar todos los numeros
        if (boton.id === "Esc"){
            pantalla.textContent = "0";
            return;
        }
        
        // Funcion de borrar numero por numero
        if(boton.id === "delete") {
            // Con esta propiedad le decimos que borre el ultimo digito y que muestre 0 
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error") {
                pantalla.textContent = "0"
            } else {
                pantalla.textContent = pantalla.textContent.slice( 0 ,-1 )
            }
            return;
        }

        // Fucion Equal
        if (boton.id === "equal") {
            try{
                pantalla.textContent = eval(pantalla.textContent)
            } catch {
                pantalla.textContent = "Error"
            }
            return;
        }

        // Funcion de apretar botones
        if (pantalla.textContent === "0"  || pantalla.textContent === "Error" ) {
            pantalla.textContent = btnApretado
        } else {
            pantalla.textContent += btnApretado 
        }
        
    })
})


document.addEventListener("keydown", (event) => {
    const key = event.key;
    const isNumber = !isNaN(parseFloat(key)) && isFinite(key); // numeros
    const isOperator = ['+', '-', '*', '/','.'].includes(key); // operadores
    const isEqual = key === 'equal' && key === 'Enter';
    const boton = Array.from(botones).find((btn) => btn.textContent === key);

    if (isNumber || isOperator || isEqual) {
        if (boton) {
            boton.click();
            event.preventDefault();
            
        }
    } else if (key === 'Escape') //Borrar todo
        {
        pantalla.textContent = "0";
        } else if (key === 'Backspace') //Borrar numero por numero
        {
        const content = pantalla.textContent;
        pantalla.textContent = content.length === 1 || content === "Error" ? "0" : content.slice(0, -1);
        }
});





