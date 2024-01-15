const pantalla = document.querySelector(".pantalla");
const zero = document.getElementById("zero")
const equal = document.getElementById("equal")
const botones = document.querySelectorAll(".btn")

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        const btnAgregar = boton.textContent
        
        // Borrar resultado 
        if (boton.id === "Esc") {
            pantalla.textContent = "0"
            return;
        }

        // Borrar numero por numero 
        if (boton.id === "delete"){
            if(pantalla.textContent.length === 1 || pantalla.textContent === "Error"){
                pantalla.textContent = "0"
            } else {
                pantalla.textContent = pantalla.textContent.slice (0,-1)
            }
            return;
        }

        // Operadores
        if (boton.id === "equal"){
            try {
                pantalla.textContent = eval(pantalla.textContent)
            } catch {
                pantalla.textContent = "Error"
            }
            return;
        }

        // Mostrar numero y error  en la pantalla 
        if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
            pantalla.textContent = btnAgregar
        } else {
            pantalla.textContent += btnAgregar
        }
    })
})

document.addEventListener('keydown', (event) => {
    const key = event.key;
    const isNumber = !isNaN(parseFloat(key)) && isFinite(key); // numeros
    const isOperator = ['+', '-', '*', '/','.'].includes(key); // operadores
    const isEqual = key === 'equal' && key === 'equal'; // solucionar el igual
    const button = Array.from(botones).find((btn) => btn.textContent === key);

    if (isNumber || isOperator || isEqual) {
        if (button) {
            button.click();
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


// Menu

const toggleMenu = () => document.body.classList.toggle("open");




