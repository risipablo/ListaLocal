class Datos{
    constructor(){
        this.productos = [];
        this.agregarGastos(1,"Nutrisur","Enero", 81010, "Pagado", "1", 39190)
        this.agregarGastos(2,"Don Tomas" , "Enero", 40100, "Pagado", "2/01", 357706)
        this.agregarGastos(3,"Popy","Enero",115600,"Pagado","3/01", "Sin boleta")
        this.agregarGastos(4,"Don Tommas", "Enero", 12500, "Pagado","8/01", 358575)
        this.agregarGastos(5,"Chubutin","Enero",93350," Pagado","8/01","Sin Boleta")
        this.agregarGastos(6,"Nutrisur","Enero",69000,"Impago","9/01",39527)
        this.agregarGastos(7,"Forastero","Enero",115560,"Impago","11/01",193763)
        this.agregarGastos(8, "Amadeo","Enero",84412,"Pagado","12/01",22222)
        this.agregarGastos(9, "Amadeo","Enero",11172,"Pagado","12/01","Sin Boleta")
        this.agregarGastos(10,"Nutripet", "Enero", 155941, "Impago", "17/01",69618)
    }

    agregarGastos(id,proveedor,mes,monto,estado,fecha,boleta){
        const producto = new Producto (id,proveedor,mes,monto,estado,fecha,boleta)
        this.productos.push(producto)
    }

    traerRegistros() {
        return  this.productos;
    }

    BuscadorporGastos(palabra){
        const palabras = palabra.toLowerCase().split("");
        return this.productos.filter((producto) => {
            return palabras.every((p) => 
            producto.proveedor.toLowerCase().includes(p) ||
            producto.mes.toLowerCase().includes(p) ||
            producto.monto.toString().toLowerCase().includes(p) ||
            producto.estado.toLowerCase().includes(p) ||
            producto.fecha.toLowerCase().includes(p) ||
            producto.boleta.toString().toLowerCase().includes(p)
            )
        })
    }

    FiltarporMes(mes){
        return this.productos.filter((producto) => producto.mes == mes )
    }

    FiltarporProveedor(proveedor){
        return this.productos.filter((producto) => producto.proveedor == proveedor)
    }

}


const Buscador = document.querySelector("#inputBusqueda")
Buscador.addEventListener("keyup", (event) =>{
    event.preventDefault();
    const palabra = Buscador.value.toLowerCase();
    const producto = bd.BuscadorporGastos(palabra)
    cargarProductos(producto)
})


class Producto{
    constructor(id,proveedor,mes,monto,estado,fecha,boleta){
        this.id = id;
        this.proveedor = proveedor;
        this.mes = mes;
        this.monto = monto;
        this.estado = estado;
        this.fecha = fecha;
        this.boleta = boleta;
    }
}

const bd = new Datos ();

const lista = document.querySelector(".lista")



    // bd.traerRegistros().then((productos) => {
    //     cargarProductos(productos);
    // });
    
    
cargarProductos(bd.productos);
function cargarProductos(productos) {
    lista.innerHTML = `
        <table>
        <tr class="nombres">
            <th class="pro">Proveedor</th>
            <th  class="pro">Mes</th>
            <th class="id">Fecha</th>
            <th  class="id" >N° Boleta</th>
            <th  class="pro">Monto</th>
            <th  class="pro">Estado</th>
        </tr>
        </table>
    `;

    const tabla = lista.querySelector("table");

    let total = 0; // Almacener total 

    for (const producto of productos) {
        tabla.innerHTML += `
        <tr>
            <td>${producto.proveedor}</td>
            <td>${producto.mes}</td>
            <td class="id">${producto.fecha}</td>
            <td  class="id">${producto.boleta}</td>
            <td >$ ${producto.monto}</td>
            <td class="estado">${producto.estado}</td>
        </tr>
        `;

        total += producto.monto;
    }

    // 
    tabla.innerHTML += ` 
            <div class="total">
                <td colspan="1">Total</td>
                <td colspan="2" class="numero"> $ ${total} </>
            </div>
    `;
}



// Filtros
const btnMeses = document.querySelectorAll(".btnmeses")


btnMeses.forEach((boton) => {
    boton.addEventListener("click", (event) => {
        event.preventDefault();

        const Seleccionado = boton.classList.contains("seleccionado");

        if (Seleccionado){
            boton.classList.remove("seleccionado")
            cargarProductos(bd.productos)
        } else {
            boton.classList.add("seleccionado")
            const mesSeleccionado = boton.innerText;
            const mes = bd.FiltarporMes(mesSeleccionado)
            cargarProductos(mes) // variable mes, no el parametro
        }
    })
})



const abrir2 = document.getElementById("filtro");
const meses2 = document.querySelector(".meses2");
const cerrar2 = document.getElementById("cerrar2");

abrir2.addEventListener("click", (event) => {
    meses2.classList.add("show");
})

cerrar2.addEventListener("click", (event) => {
    meses2.classList.remove("show");
})


const abrir = document.querySelector(".filtro");
const cerrar = document.querySelector (".cerrar");
const contenido = document.querySelector('.contenido');

abrir.addEventListener("click", (event) => {
    contenido.classList.add("show");
})

cerrar.addEventListener("click", (event) => {
    contenido.classList.remove("show");
})





const provedor = document.querySelectorAll ('.btnprovedor');
const TodosProductos = document.getElementById("Todos");

provedor.forEach((boton) => {
    boton.addEventListener("click", (event) => {{
        event.preventDefault();
        boton.classList.add ("seleccionado");
        const Seleccionado = boton.innerText;
        const proveedorSelec  = bd.FiltarporProveedor(Seleccionado)
        cargarProductos(proveedorSelec)
    }})
})


// funcion de mostrar todos los productos
TodosProductos.addEventListener("click", (event) =>{
    event.preventDefault;
    quitarClase();
    TodosProductos.classList.add ("seleccionado");
    cargarProductos (bd.productos);
})

function quitarClase(){
    const botonSelecionado = document.querySelector(".seleccionado");

    if(botonSelecionado){
        botonSelecionado.classList.remove(".seleccionado");
    }
}


function calcularTotalGastos(productos) {
    let total = 0;

    for (const producto of productos) {
        total += producto.monto;
    }

    return total;
}


//  Opcion B
// calcularMonto(){
//    return this.productos.reduce((total,productos) => total + productos.monto, 0)
// }
//  <td>${bd.calcularMonto()}</td>


// Menu 

const toggleMenu = () => document.body.classList.toggle("open");
