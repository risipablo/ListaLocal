class Datos {
    constructor() {
        this.productos = [];
        this.agregarGastos(1, "Nutrisur", "Enero", 81010, "Pagado", "1", "39190");
        this.agregarGastos(2, "Don Tomas", "Enero", 40100, "Pagado", "2/01", "357706");
    }

    agregarGastos(id, proveedor, mes, monto, estado, fecha, boleta) {
        const producto = new Producto(id, proveedor, mes, monto, estado, fecha, boleta);
        this.productos.push(producto);
    }

    traerRegistros() {
        return this.productos;
    }

    BuscadorporGastos(palabra) {
        const palabras = palabra.toLowerCase().split(" ");
        return this.productos.filter((producto) => {
            return palabras.every((p) => 
                producto.proveedor.toLowerCase().includes(p) ||
                producto.mes.toLowerCase().includes(p) ||
                producto.monto.toString().toLowerCase().includes(p) ||
                producto.estado.toLowerCase().includes(p) ||
                producto.fecha.toLowerCase().includes(p) ||
                producto.boleta.toLowerCase().includes(p)
            );
        });
    }

    FiltarporMes(mes) {
        return this.productos.filter((producto) => producto.mes === mes);
    }

    FiltarporProveedor(proveedor) {
        return this.productos.filter((producto) => producto.proveedor === proveedor);
    }
}

class Producto {
    constructor(id, proveedor, mes, monto, estado, fecha, boleta) {
        this.id = id;
        this.proveedor = proveedor;
        this.mes = mes;
        this.monto = monto;
        this.estado = estado;
        this.fecha = fecha;
        this.boleta = boleta;
    }
}

const bd = new Datos();
const lista = document.querySelector(".lista");
const Buscador = document.querySelector("#inputBusqueda");

Buscador.addEventListener("keyup", (event) => {
    event.preventDefault();
    const palabra = Buscador.value.toLowerCase();
    const producto = bd.BuscadorporGastos(palabra);
    cargarProductos(producto);
});

function cargarProductos(productos) {
    lista.innerHTML = "";  // Clear previous content
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    headerRow.classList.add("nombres");

    const headers = ["Proveedor", "Mes", "Fecha", "N° Boleta", "Monto", "Estado"];
    headers.forEach(text => {
        const th = document.createElement("th");
        th.textContent = text;
        th.classList.add(text.toLowerCase().includes("pro") ? "pro" : "id");
        headerRow.appendChild(th);
    });

    table.appendChild(headerRow);
    let total = 0;

    productos.forEach(producto => {
        const row = document.createElement("tr");

        Object.keys(producto).forEach(key => {
            const td = document.createElement("td");
            td.textContent = producto[key];

            if (key === "estado") {
                td.style.backgroundColor = producto.estado.toLowerCase() === 'pagado' ? '#3FC40B' : '#E80808';
            } else if (key === "monto") {
                td.textContent = `$ ${producto[key]}`;
                td.classList.add("monto");
            } else {
                td.classList.add("id");
            }

            row.appendChild(td);
        });

        table.appendChild(row);
        total += producto.monto;
    });

    const totalRow = document.createElement("tr");
    totalRow.classList.add("total");
    const totalData = document.createElement("td");
    totalData.colSpan = 6;
    totalData.innerHTML = `Total: $ ${total}`;
    totalRow.appendChild(totalData);

    table.appendChild(totalRow);
    lista.appendChild(table);
}

const btnMeses = document.querySelectorAll(".btnmeses");
btnMeses.forEach((boton) => {
    boton.addEventListener("click", (event) => {
        event.preventDefault();
        const Seleccionado = boton.classList.contains("seleccionado");

        if (Seleccionado) {
            boton.classList.remove("seleccionado");
            cargarProductos(bd.productos);
        } else {
            quitarClase();
            boton.classList.add("seleccionado");
            const mesSeleccionado = boton.innerText;
            const mes = bd.FiltarporMes(mesSeleccionado);
            cargarProductos(mes);
        }
    });
});

const abrir2 = document.getElementById("filtro");
const meses2 = document.querySelector(".meses2");
const cerrar2 = document.getElementById("cerrar2");

abrir2.addEventListener("click", (event) => {
    meses2.classList.add("show");
});

cerrar2.addEventListener("click", (event) => {
    meses2.classList.remove("show");
});

const abrir = document.querySelector(".filtro");
const cerrar = document.querySelector(".cerrar");
const contenido = document.querySelector('.contenido');

abrir.addEventListener("click", (event) => {
    contenido.classList.add("show");
});

cerrar.addEventListener("click", (event) => {
    contenido.classList.remove("show");
});

const provedor = document.querySelectorAll('.btnprovedor');
provedor.forEach((boton) => {
    boton.addEventListener("click", (event) => {
        event.preventDefault();
        quitarClase();
        boton.classList.add("seleccionado");
        const Seleccionado = boton.innerText;
        const proveedorSelec = bd.FiltarporProveedor(Seleccionado);
        cargarProductos(proveedorSelec);
    });
});

const TodosProductos = document.getElementById("Todos");
TodosProductos.addEventListener("click", (event) => {
    event.preventDefault();
    quitarClase();
    TodosProductos.classList.add("seleccionado");
    cargarProductos(bd.productos);
});

function quitarClase() {
    const botonSeleccionado = document.querySelector(".seleccionado");
    if (botonSeleccionado) {
        botonSeleccionado.classList.remove("seleccionado");
    }
}

// Load initial products
cargarProductos(bd.productos);
