class Datos{
    constructor(){
        this.productos = [];
        this.agregarGastos(1,"Nutrisur","Enero", 81010, "Pagado", "1", "39190")
        this.agregarGastos(2,"Don Tomas" , "Enero", 40100, "Pagado", "2/01", "357706")
        this.agregarGastos(3,"Popy","Enero",115600,"Pagado","3/01", "Sin boleta")
        this.agregarGastos(4,"Don Tomas", "Enero", 12500, "Pagado","8/01", "358575")
        this.agregarGastos(5,"Chubutin","Enero",93350,"Pagado","8/01","Sin Boleta")
        this.agregarGastos(6,"Nutrisur","Enero",69000,"Pagado","9/01","39527")
        this.agregarGastos(7,"Forastero","Enero",115560,"Pagado","11/01","193763")
        this.agregarGastos(8, "Amadeo","Enero",84412,"Pagado","12/01","22222")
        this.agregarGastos(9, "Amadeo","Enero",11172,"Pagado","12/01","Sin Boleta")
        this.agregarGastos(10,"Nutripet", "Enero", 155941, "Pagado", "17/01","69618")
        this.agregarGastos(11,"Mercaba","Enero",236500, "Pagado","16/01","13398")
        this.agregarGastos(12, "Forastero", "Enero",245302,"Pagado","23/01","194592")
        this.agregarGastos(13, "Forastero", "Enero",28520,"Pagado", "23/01","194593")
        this.agregarGastos(14, "Amadeo","Enero", 81036,"Pagado", "26/01", "22377")
        this.agregarGastos(14, "Amadeo","Enero", 24113,"Pagado", "26/01", "53363")
        this.agregarGastos(15, "Chubutin","Enero",100035,"Pagado","25/01", "Sin Boleta")
        this.agregarGastos(16,"Nutrisur","Febrero",111986,"Pagado","1/02","399661")
        this.agregarGastos(17,"Chubutin","Febrero",78120,"Pagado","1/02","Sin Boleta")
        this.agregarGastos(18,"Popy","Febrero",103900,"Pagado","10/02","Sin Boleta")
        this.agregarGastos(19,"Chubutin","Febrero",123800,"Pagado","15/02","Sin Boleta")
        this.agregarGastos(20,"Nutripet","Febrero",8968,"Pagado","16/02","70415")
        this.agregarGastos(21,"Popy","Febrero",100200,"Pagado","16/02","Sin Boleta")
        this.agregarGastos(22,"Forastero","Febrero",298429,"Pagado","21/02","195999")
        this.agregarGastos(23,"Popy","Febrero",121200,"Pagado","22/02","Sin Boleta")
        this.agregarGastos(24,"Nutrisur","Febrero",66581,"Pagado","22/02","Sin Boleta")
        this.agregarGastos(25,"Amadeo","Febrero",101108,"Pagado","23/02","22529")
        this.agregarGastos(26,"Can Cid","Febrero",79739,"Pagado","23/02","16435")
        this.agregarGastos(27,"Don Tomas","Febrero",92861,"Pagado","26/02","366932")
        this.agregarGastos(28,"Nutrisur","Febrero",129277,"Pagado","29/02","84803")
        this.agregarGastos(29,"Chubutin","Febrero",100000,"Pagado","29/02","366932")
        this.agregarGastos(30,"Popy","Marzo",137700,"Pagado","1/03","-")
        this.agregarGastos(31,"Nutripet","Marzo",118733,"Pagado","8/03","71050")
        this.agregarGastos(32,"Popy","Marzo",148400,"Pagado","8/03","Sin boleta")
        this.agregarGastos(33,"Popy","Marzo",149000,"Pagado","12/03","Sin boleta")
        this.agregarGastos(34,"Forastero","Marzo",609700,"Pagado","13/03","197251")
        this.agregarGastos(35,"Nutrisur","Marzo",79506,"Pagado","14/03","85267")
        this.agregarGastos(36,"Chubutin","Marzo",156840,"Pagado","14/03","9330")
        this.agregarGastos(37,"Don Tomas","Marzo",73930,"Pagado","18/03","370979")
        this.agregarGastos(38,"Chubutin","Marzo",153500,"Pagado","21/03","9425")
        this.agregarGastos(39,"Amadeo","Marzo",90250,"Pagado","20/03","22767")
        this.agregarGastos(40,"Nutripet","Marzo",118564,"Pagado","18/03","71282")
        this.agregarGastos(41,"Popy","Marzo",89100,"Pagado","21/03","Sin boleta")
        this.agregarGastos(42,"Forastero","Marzo",210455,"Pagado","22/03","197752")
        this.agregarGastos(43,"Timons","Marzo",13000,"Pagado","22/03","Sin boleta")
        this.agregarGastos(44,"Indumentaria","Abril",126138,"Pagado","3/4 ","-")
        this.agregarGastos(45,"Forastero","Abril",86270,"Pagado","5/4","198313")
        this.agregarGastos(46,"Chubutin","Abril",218500,"Pagado","8/4","9625")
        this.agregarGastos(47,"Don Tomas","Abril",58950,"Pagado","8/4","374818-9")
        this.agregarGastos(48,"Popy","Abril",232500,"Pagado","9/4","-")
        this.agregarGastos(49,"Nutripet","Abril",231850,"Pagado","9/4","72043")
        this.agregarGastos(50,"Amadeo","Abril",135400,"Pagado","11/4","23023")
        this.agregarGastos(51,"Nutrisur","Abril",246996,"Pagado","17/4","86086")
        this.agregarGastos(52,"Forastero","Abril",168286,"Pagado","18/4","198973")
        this.agregarGastos(53,"Chubutin","Abril",85300,"Pagado","18/4","9778")
        this.agregarGastos(54,"Popy","Abril",170800,"Pagado","23/4","-")
        this.agregarGastos(55,"Can Cid","Abril",41540,"Pagado","24/4","5469")
        this.agregarGastos(56,"Can Cid","Abril",10985,"Pagado","24/4","-")
        this.agregarGastos(57,"Nutrisur","Abril",153854,"Impago","30/4","86444")
        this.agregarGastos(58,"Popy","Mayo",194100,"Pagado","4/5","-")
        this.agregarGastos(59,"Chubutin","Mayo",118600,"Pagado","6/5","9981")
        this.agregarGastos(60,"Can Cid","Mayo",656000,"Pagado","9/5","5556")
        this.agregarGastos(61,"Polares","Mayo",33100,"Pagado","9/5","-")
        this.agregarGastos(62,"Forastero","Mayo",237590,"Pagado","9/5","200179")
        this.agregarGastos(63,"Nutripet","Mayo",157868,"Pagado","14/5","73196")
        this.agregarGastos(64,"Chubutin","Mayo",183000,"Pagado","16/5","10157")
        this.agregarGastos(65,"Don Tomas","Mayo",100600,"Pagado","20/5","382805")
        this.agregarGastos(66,"Popy","Mayo",99000,"Pagado","20/5","-")
        this.agregarGastos(67,"Chubutin","Mayo",199000,"Pagado","23/5","10252")
        this.agregarGastos(68,"Popy","Mayo",108900,"Pagado","24/5","-")
        this.agregarGastos(69,"Nutrisur","Mayo",56147,"Impago","30/5","41894")
        this.agregarGastos(70,"Chubutin","Mayo",73315,"Pagado","30/5","10340")
        this.agregarGastos(71,"Forastero","Junio",156240,"Impago","3/6","201611")
        this.agregarGastos(72,"Forastero","Junio",121652,"Impago","4/6","201697")
        this.agregarGastos(73,"Chubutin","Junio",66640,"Pagado","4/6","10414")
        this.agregarGastos(74,"Kro Line","Junio",220000,"Pagado","9/6",)
        this.agregarGastos(75,"Nutripet","Junio",305780,"Impago","11/6",74075)
        this.agregarGastos(76,"Forastero","Junio",84647,"Impago","11/6",202085)
        this.agregarGastos(77,"Nutrisur","Junio",223943,"Impago","12/6",42147)
    }

    agregarGastos(id,proveedor,mes,monto,estado,fecha,boleta){
        const producto = new Producto (id,proveedor,mes,monto,estado,fecha,boleta)
        this.productos.push(producto)
    }

    traerRegistros() {
        return  this.productos;
    }

    BuscadorporGastos(palabra){
        const palabras = palabra.toLowerCase().split(" ");
        return this.productos.filter((producto) => {
            return palabras.every((p) => 
            producto.proveedor.toLowerCase().includes(p) ||
            producto.mes.toLowerCase().includes(p) ||
            producto.monto.toString().toLowerCase().includes(p) ||
            producto.estado.toLowerCase().includes(p) ||
            producto.fecha.toLowerCase().includes(p) ||
            producto.boleta.toLowerCase().includes(p)
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

        const estadoPago = producto.estado.toLowerCase() === 'pagado' ? '#3FC40B' : '#E80808';

        tabla.innerHTML += `
        <tr>
            <td>${producto.proveedor}</td>
            <td>${producto.mes}</td>
            <td class="id">${producto.fecha}</td>
            <td  class="id">${producto.boleta}</td>
            <td class="monto">$ ${producto.monto}</td>
            <td class="estado" style="background:${estadoPago}">${producto.estado}</td>
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

function calcularTotalGastos(productos) {
    let total = 0;

    for (const producto of productos) {
        total += producto.monto;
    }

    return total;
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


//  Opcion B
// calcularMonto(){
//    return this.productos.reduce((total,productos) => total + productos.monto, 0
// }
//  <td>${bd.calcularMonto()}</td>


// Menu 

const toggleMenu = () => document.body.classList.toggle("open");

