class Datos{
    constructor(){
        this.productos = [];
        this.agregarGastos(1,"Nutrisur","Enero", 81010, "Impago", "1", 1)
        this.agregarGastos(2,"Don Tomas" , "Enero", 40100, "Pagado", "2/01", 357706)
        this.agregarGastos(3,"Popy","Enero",115600,"Pagado","3/01", "Sin boleta")
        this.agregarGastos(5,"Don Tommas", "Enero", 12500, "Pagado","8/01", 358575)
        this.agregarGastos(6,"Chubutin","Enero",70952,"Esperar confirmacion","8/01","Sin Boleta")
        this.agregarGastos(3,"Nutrisur","Enero",69000,"Impago","9/01",39527)
        this.agregarGastos(4,"Forastero","Enero",115560,"Impago","11/01",193763)
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
            <th>Mes</th>
            <th class="id">Fecha</th>
            <th class="id">N° Boleta</th>
            <th>Monto</th>
            <th>Estado</th>
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
            <td class="id">${producto.boleta}</td>
            <td>$ ${producto.monto}</td>
            <td>${producto.estado}</td>
        </tr>
        `;

        total += producto.monto; //Suma de monto total
    }

    // 
    tabla.innerHTML += `
        <tr>
            <td colspan="4"></td>
            <td class="total"> $ ${total} </>
        </tr>
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


const abrir = document.querySelector(".filtro")
const cerrar = document.querySelector (".cerrar")
const contenido = document.querySelector('.contenido');

abrir.addEventListener("click", (event) => {
    contenido.classList.add ('show')
})

cerrar.addEventListener("click", (event) => {
    contenido.classList.remove ('show');
});

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

TodosProductos.addEventListener("click", (event) =>{
    event.preventDefault;
    quitarClase();
    TodosProductos.classList.add ("seleccionado");
    cargarProductos (bd.productos);
})

function quitarClase(){
    const botonSeleccionado = document.querySelector (".seleccionado");
    if (botonSeleccionado) {
        botonSeleccionado.classList.remove (".seleccionado");
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