class Datos{
    constructor(){
        this.productos = [];
        this.agregarGastos(1,"Nutrisur","Enero", 81010, "Pagado", "1", 39190)
        this.agregarGastos(2,"Don Tomas" , "Enero", 40100, "Pagado", "2/01", 357706)
        this.agregarGastos(3,"Popy","Enero",115600,"Pagado","3/01", "Sin boleta")
        this.agregarGastos(4,"Don Tomas", "Enero", 12500, "Pagado","8/01", 358575)
        this.agregarGastos(5,"Chubutin","Enero",93350," Pagado","8/01","Sin Boleta")
        this.agregarGastos(6,"Nutrisur","Enero",69000,"Pagado","9/01",39527)
        this.agregarGastos(7,"Forastero","Enero",115560,"Pagado","11/01",193763)
        this.agregarGastos(8, "Amadeo","Enero",84412,"Pagado","12/01",22222)
        this.agregarGastos(9, "Amadeo","Enero",11172,"Pagado","12/01","Sin Boleta")
        this.agregarGastos(10,"Nutripet", "Enero", 155941, "Pagado", "17/01",69618)
        this.agregarGastos(11,"Mercaba","Enero",236500, "Pagado","16/01",13398)
        this.agregarGastos(12, "Forastero", "Enero",245302,"Pagado","23/01",194592)
        this.agregarGastos(13, "Forastero", "Enero",28520,"Pagado", "23/01",194593)
        this.agregarGastos(14, "Amadeo","Enero", 81036,"Pagado", "26/01", 22377)
        this.agregarGastos(14, "Amadeo","Enero", 24113,"Pagado", "26/01", 53363)
        this.agregarGastos(15, "Chubutin","Enero",100035,"Pagado","25/01", "Sin Boleta")
        this.agregarGastos(16,"Nutrisur","Febrero",111986,"Impago","1/02",399661)
        this.agregarGastos(17,"Chubutin","Febrero",78120,"Pagado","1/02","Sin Boleta")
        this.agregarGastos(18,"Popy","Febrero",103900,"Pagado","10/02","Sin Boleta")
        this.agregarGastos(19,"Chubutin","Febrero",123800,"Pagado","15/02","Sin Boleta")
        this.agregarGastos(20,"Nutripet","Febrero",89682,"Impago","16/02",70415)
        this.agregarGastos(21,"Popy","Febrero",100200,"Pagado","16/02","Sin Boleta")
        this.agregarGastos(22,"Forastero","Febrero",298429,"Impago","21/02","195999")
        this.agregarGastos(23,"Popy","Febrero",121200,"Pagado","22/02","Sin Boleta")
        this.agregarGastos(24,"Nutrisur","Febrero",66581,"Impago","22/02","Sin Boleta")
        this.agregarGastos(25,"Amadeo","Febrero",101108,"Impago","23/02","22529")
        this.agregarGastos(26,"Can Cid","Febrero",79739,"Pagado","23/02","16435")
        this.agregarGastos(27,"Don Tomas","Febrero",92861,"Pagado","26/02","366932")
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
            <td class="monto">$ ${producto.monto}</td>
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
const TodosProductos = document.getElementById("Todos");
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

