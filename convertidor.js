


    function Limpiar() {

        document.getElementById("numero").value = 0;
        document.getElementById("resultado").value = 0;
        document.getElementById("kilos").value = 0;
        document.getElementById("result").value = 0;
        document.getElementById("kg").value = 0;
        document.getElementById("results").value = 0;
    }
    //llamar a la funcion onclick de html

    CalculosProcentaje(30); 
    CalculosProcentaje(30);

    function CalculosProcentaje() { 

    const numero = Number(document.getElementById("numero").value);

    const result = numero * 1.3;

        document.getElementById("resultado").value = result;
    }


    /* variables de kilos */

    CalculosXkilos(20);
    CalculosXkilos(15);
    CalculosXkilos(7.5);
    CalculosXkilos(10);


    function CalculosXkilos(Kg) { // en el () se le coloca nombre al array
        const kilo = Number(document.getElementById("kilos").value);

        const resultado = kilo / Kg;

        document.getElementById("result").value = resultado;
    }


    MultiplicacionXkg(20);
    MultiplicacionXkg(15);
    MultiplicacionXkg(7.5);
    MultiplicacionXkg(10);

    function MultiplicacionXkg(kg) {
        const kgs = Number(document.getElementById("kg").value);

        const resutadokg = kgs * kg;

        document.getElementById("results").value = resutadokg;
    }

