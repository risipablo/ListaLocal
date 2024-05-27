



    function Limpiar() {
        document.getElementById("numero").value = 0;
        document.getElementById("resultado").value = 0;
        document.getElementById("kilos").value = 0;
        document.getElementById("result").value = 0;
        document.getElementById("kg").value = 0;
        document.getElementById("results").value = 0;
        document.getElementById("iva2").value = 0;
        document.getElementById("resultadoIva").value = 0;
    }



    function calcular(porcentaje){
        const numero = Number(document.getElementById("numero").value);
        if (porcentaje === 'multiplicar'){
            result = numero * 1.3;
        } else if (porcentaje === 'dividir'){
            result = numero / 1.3;
        }
        document.getElementById("resultado").value = result;
    }

// funcion de iva

    function calculoIva(iva){
        const number = Number(document.getElementById("iva2").value);
        if (iva === 'multi'){
            resultIva = number * 1.21
        } else if (iva === 'div') {
            resultIva = number / 1.21
        }        
        document.getElementById("resultadoIva").value = resultIva;
    }


// divison por kg
    CalculosXkilos(20);
    CalculosXkilos(15);
    CalculosXkilos(7.5);
    CalculosXkilos(10);
    function CalculosXkilos(Kg) { // en el () se le coloca nombre al array
        const kilo = Number(document.getElementById("kilos").value);

        const resultado = kilo / Kg;

        document.getElementById("result").value = resultado;
    }


    /* multiplicacion por kg */
    MultiplicacionXkg(20);
    MultiplicacionXkg(15);
    MultiplicacionXkg(7.5);
    MultiplicacionXkg(10);

    function MultiplicacionXkg(kg) {
        const kgs = Number(document.getElementById("kg").value);

        const resutadokg = kgs * kg;

        document.getElementById("results").value = resutadokg;
    }


// Menu

const toggleMenu= () => document.body.classList.toggle("open");