



/*; */


class Datos {
    constructor() {
        this.productos = [];
        this.agregarProductos(1,"Excellent","Adulto",1,"2900");
        this.agregarProductos(2,"Excellent","Adulto",7.5,"21500");
        this.agregarProductos(3,"Excellent","Kitten",1,"3200");
        this.agregarProductos(4,"Excellent","Kitten",7.5,"24000");
        this.agregarProductos(5,"Excellent","Sterilized",1,"3200");
        this.agregarProductos(6,"Excellent","Sterilized",7.5,"24800");
        this.agregarProductos(7,"Excellent","Urinary",1,"3200");
        this.agregarProductos(8,"Excellent","Urinary",7.5,"24800");
        this.agregarProductos(9,"Excellent","Puppy Small",1,"1800");
        this.agregarProductos(10,"Excellent","Puppy Small",15,"27000");
        this.agregarProductos(11,"Excellent","Puppy Grande",1,"1800");
        this.agregarProductos(12,"Excellent","Puppy Grande",15,"26500");
        this.agregarProductos(13,"Excellent","Adulto Small",1,"1700");
        this.agregarProductos(14,"Excellent","Adulto Small",15,"24800");
        this.agregarProductos(15,"Excellent","Adulto Grande",1,"1700");
        this.agregarProductos(16,"Excellent","Adulto Grande",15,"24000");
        this.agregarProductos(17,"Agility","Adulto Grande",20,"19000");
        this.agregarProductos(18,"Biopet","Adulto",1,"600");
        this.agregarProductos(19,"Biopet","Adulto",20,"9000");
        this.agregarProductos(20,"Old Prince","Adulto Small",1,"1500");
        this.agregarProductos(21,"Old Prince","Adulto Small",15,"18000");
        this.agregarProductos(22,"Old Prince","Derma Small",1,"1600");
        this.agregarProductos(23,"Old Prince","Derma Small",15,"23000");
        this.agregarProductos(24,"Old Prince ","Cachorro Small",1,"1300");
        this.agregarProductos(25,"Old Prince","Cachorro Small",7.5,"9500");
        this.agregarProductos(26,"Old Prince","Derma Adulto",1,"1300");
        this.agregarProductos(27,"Old Prince","Derma Adulto",15,"19000");
        this.agregarProductos(28,"Balanced","Derma Adulto",1,"1600");
        this.agregarProductos(29,"Balanced","Derma Adulto",15,"22000");
        this.agregarProductos(30,"Sieger","Mini Puppy",1,"2200");
        this.agregarProductos(31,"Sieger","Mini Puppy",3,"7700");
        this.agregarProductos(32,"Sieger","Mini Puppy",12,"25000");
        this.agregarProductos(33,"Sieger","Cachorro",1,"2900");
        this.agregarProductos(34,"Sieger ","Cachorro",3,"7200");
        this.agregarProductos(35,"Sieger","Cachorro",15,"29000");
        this.agregarProductos(36,"Sieger","Adulto Grande",1,"1900");
        this.agregarProductos(37,"Sieger","Adulto Grande",3,"7000");
        this.agregarProductos(38,"Sieger","Adulto Grande",15,"26500");
        this.agregarProductos(39,"Sieger","Adulto Small",1,"2900");
        this.agregarProductos(40,"Sieger ","Adulto Small",3,"7000");
        this.agregarProductos(30,"Sieger","Adulto Small",12,"23000");
        this.agregarProductos(31,"Sieger","Mini Puppy",3,"7700");
        this.agregarProductos(32,"Sieger","Mini Puppy",12,"25000");
        this.agregarProductos(33,"Sieger","Senior Mini",3,"7500");
        this.agregarProductos(34,"Sieger ","Senior Grande",3,"7000");
        this.agregarProductos(35,"Sieger","Reduce",3,"7300");
        this.agregarProductos(36,"Sieger","Derma",3,"8000");
        this.agregarProductos(37,"Sieger","Derma",12,"25500");
        this.agregarProductos(38,"Sieger","Derma",1,"2200");
        this.agregarProductos(39,"Sieger","Criadores",1,"29500");
        this.agregarProductos(40,"Sieger ","Adulto Small",3,"2900");
        this.agregarProductos(41,"Cat Chow","Adulto ",1,"1400");
        this.agregarProductos(42,"Cat Chow","Adulto ",15,"21000");
        this.agregarProductos(43,"Cat Chow","Kitten ",1,"1600");
        this.agregarProductos(44,"Cat Chow","Kitten ",15,"23000");
        this.agregarProductos(45,"Gati","Adulto ",1,"800");
        this.agregarProductos(46,"Gati","Adulto ",15,"12000");
        this.agregarProductos(47,"Infinity","Adulto Small",1,"1100");
        this.agregarProductos(48,"Infinity","Adulto Small ",15,"15700");
        this.agregarProductos(49,"Nutricare","Adulto Small",1,"950");
        this.agregarProductos(50,"Nutricare","Adulto Small ",15,"14000");
        this.agregarProductos(51,"Nutricare","Adulto Grande",1,"950");
        this.agregarProductos(52,"Nutricare","Adulto Grande ",15,"14000");
        this.agregarProductos(53,"Nutricare","Cachorro ",1,"1200");
        this.agregarProductos(54,"Nutricare","Cachorro",7.5,"9000");
        this.agregarProductos(55,"Wishka","Adulto ",1,"1400");
        this.agregarProductos(56,"Wishka","Adulto ",10,"14000");
        this.agregarProductos(57,"Bocato","Adulto",1,"750");
        this.agregarProductos(58,"Bocato","Adulto ",10,"6500");
        this.agregarProductos(59,"Optimun","Adulto",1,"2300");
        this.agregarProductos(60,"Optimun","Adulto ",10,"23000");
        this.agregarProductos(59,"Optimun","Adulto",3,"3200");
        this.agregarProductos(60,"Optimun","Adulto Small ",15,"19000");
        this.agregarProductos(59,"Optimun","Adulto Small",1,"1400");
        this.agregarProductos(60,"Pedigree","Adulto Small",1,"6500");
        this.agregarProductos(61,"Pedigree","Adulto Small",15,"6500");
        this.agregarProductos(62,"Dog Chow","Adulto Small",1,"6500");
        this.agregarProductos(63,"Dog Chow","Adulto Small",20,"6500");
        this.agregarProductos(64,"Dog Chow","Adulto Light",1,"6500");
        this.agregarProductos(65,"Dog Chow","Adulto Light",20,"6500");
        this.agregarProductos(66,"Agility","Adulto Grande",1,"1000");
        this.agregarProductos(67,"Agility","Adulto Small",1,"1200");
        this.agregarProductos(68,"Agility","Adulto Small",15,"18000");
        this.agregarProductos(69,"Agility","Adulto Derma",1,"1400");
        this.agregarProductos(70,"Agility","Adulto Derma",15,"19000");
        this.agregarProductos(71,"Agility","Cachorro",1,"1200");
        this.agregarProductos(72,"Agility","Cahorro",20,"22000");
        this.agregarProductos(73,"Agility","Adulto",1,"2000");
        this.agregarProductos(74,"Agility","Adulto",1.5,"3800");
        this.agregarProductos(75,"Agility","Adulto",10,"19000");
        this.agregarProductos(76,"Agility","Kitten",1,"2100");
        this.agregarProductos(77,"Agility","Kitten",1.5,"4100");
        this.agregarProductos(78,"Agility","Kitten",10,"2000");
        this.agregarProductos(79,"Agility","Urinary",1,"2100");
        this.agregarProductos(80,"Agility","Urinary",1.5,"4100");
        this.agregarProductos(81,"Agility","Urinary",10,"20000");
        this.agregarProductos(82,"Agility","Light",1,"21000");
        this.agregarProductos(83,"Agility","Light",1.5,"4100");
        this.agregarProductos(84,"Agility","Light",10,"20000");
        this.agregarProductos(85,"Agility","Lata Perro",1,"1200");
        this.agregarProductos(86,"Royal Canin","Mini Puppy",1,"4400");
        this.agregarProductos(87,"Royal Canin","Mini Puppy",3,"12000");
        this.agregarProductos(88,"Royal Canin","Mini Puppy",7.5,"23000");
        this.agregarProductos(89,"Royal Canin","Mini Puppy",1,"3000");
        this.agregarProductos(90,"Royal Canin","Mini Adulto",1,"4000");
        this.agregarProductos(91,"Royal Canin","Mini Adulto",3,"11000");
        this.agregarProductos(92,"Royal Canin","Mini Adulto",7.5,"23000");
        this.agregarProductos(93,"Royal Canin","Mini Adulto",1,"30000");
        this.agregarProductos(94,"Royal Canin","X-small Adulto",1,"4300");
        this.agregarProductos(95,"Royal Canin","X-small Junior",1,"4800");
        this.agregarProductos(96,"Royal Canin","Pocuh Mini Adulto",1,"600");
        this.agregarProductos(97,"Royal Canin","Kitten",1.5,"10000");
        this.agregarProductos(98,"Royal Canin","Urinary",1.5,"10000");
        this.agregarProductos(99,"Royal Canin","Pouch Urinary",1,"1000");
        this.agregarProductos(100,"Royal Canin","Weight Control",1,"10000");
        this.agregarProductos(101,"Royal Canin","urinary S/O",1,"10200");
        this.agregarProductos(102,"Eukanuba","Mini Puppy",1,"3400");
        this.agregarProductos(103,"Eukanuba","Mini Puppy",3,"9000");
        this.agregarProductos(104,"Eukanuba","Mini Puppy",15,"32500");
        this.agregarProductos(105,"Eukanuba","Md/Lg Puppy",1,"3400");
        this.agregarProductos(106,"Eukanuba","Md/Lg Puppy",15,"31000");
        this.agregarProductos(107,"Eukanuba","Md/Lg Puppy",3,"8800");
        this.agregarProductos(108,"Eukanuba","Adulto Small",1,"3300");
        this.agregarProductos(109,"Eukanuba","Adulto Small",3,"8700");
        this.agregarProductos(110,"Eukanuba","Adulto Small",15,"30000");
        this.agregarProductos(111,"Eukanuba","Adulto Md/Lg",3,"8500");
        this.agregarProductos(112,"Eukanuba","Adulto Mg/lg",15,"29000");
        this.agregarProductos(113,"Eukanuba","Adulto Senior",3,"9000");
        this.agregarProductos(114,"Eukanuba","Weight Control",3,"9500");
        this.agregarProductos(115,"Felix","Pouch",1,"400");
        this.agregarProductos(116,"Kro Line","Pretal Completo",1.5,"4000");
        this.agregarProductos(117,"Kro Line","Pretal Completo",2,"4400");
        this.agregarProductos(118,"Kro Line","Pretal Completo",2.5,"4600");
        this.agregarProductos(119,"Kro Line","Pretal Completo",3,"5600");
        this.agregarProductos(120,"Kro Line","Correa Sola",1.5,"1900");
        this.agregarProductos(121,"Kro Line","Correa Sola",2,"2000");
        this.agregarProductos(122,"Kro Line","Correa Sola",2.5,"2300");
        this.agregarProductos(123,"Kro Line","Correa Sola",3,"2500");
        this.agregarProductos(124,"Kro Line","Pretal Solo",1.5,"2400");
        this.agregarProductos(125,"Kro Line","Pretal Solo",1.5,"2600");
        this.agregarProductos(126,"Kro Line","Pretal Solo",1.5,"2900");
        this.agregarProductos(127,"Kro Line","Pretal Solo",1.5,"34000");
        
    }

    agregarProductos(id,marca,edad,kg,precio){
        const producto = new Producto (id,marca,edad,kg,precio);/* este const se vincula con la class Producto */
        this.productos.push(producto); 
    }

    traerProductos(){
        return this.productos;
    }

    BuscadorDeNombre(palabra){
        return this.productos.filter((producto) => producto.marca.toLowerCase().includes(palabra));
    }

    registroPorEdad(edad){
        return this.productos.filter((producto)=> producto.edad == edad);
    }

    registrosPorMarca(marca) {
        return this.productos.filter((producto) => producto.marca == marca);
    }

    registrosPorEdad(mascota) {
        return this.productos.filter((producto) => producto.mascota == mascota);
    }
    
}



class Producto{
    constructor(id,marca,edad,kg,precio){
        this.id = id;
        this.marca = marca;
        this.edad = edad;
        this.kg = kg;
        this.precio = precio;
    }
}

const bd = new Datos (); 
const divProductos = document.querySelector(".productos");


cargarProductos(bd.productos);

function cargarProductos(productos){

    divProductos.innerHTML = `
            <table>
            <tr class="nombres">
                <th> Marca </th>
                <th> Edad </th>
                <th> Kg </th>
                <th> Precio </th>
            </tr>
        </table>
    `;

    const tabla = divProductos.querySelector ("table");

    for (const producto of productos) {
        tabla.innerHTML += `
        <tr>
            <td>${producto.marca} </td>
            <td>${producto.edad}</td>
            <td>${producto.kg}</td>
            <td>$ ${producto.precio}</td>
        </tr>
        `;
    }
}

/* buscador de productos */

const Buscador = document.querySelector (".buscar_texto");

Buscador.addEventListener("keyup",(event) =>{
    event.preventDefault();
    const palabra = Buscador.value.toLowerCase();
    const productos = bd.BuscadorDeNombre(palabra); /*se llama a la variable ya declarada anteriormente */
    cargarProductos(productos);
})



// Menu de filtros

const abrir = document.querySelector('.filtro');
const cerrar = document.querySelector('.cerrar');
const contenido = document.querySelector('.contenido');

abrir.addEventListener('click', function(){
    contenido.classList.add ('show');
});

cerrar.addEventListener('click', function(){
    contenido.classList.remove('show');
})

// Filtros para productos

const botonesCategorias = document.querySelectorAll(".btnCategoria");
const botonMarca = document.querySelectorAll (".btnMarca");
const botonEdad = document.querySelectorAll (".btnEdad");
const check = document.querySelectorAll(".btnCategoria, .btnMarca, .btnEdad");
const closebtn = document.querySelector (".close");
const TodosProductos = document.getElementById("Todos");

TodosProductos.addEventListener("click", (event) => {
    event.preventDefault;
    quitarClase();
    TodosProductos.classList.add("seleccionado");

    cargarProductos (bd.productos);

})

function quitarClase() {
    const botonSeleccionado = document.querySelector(".seleccionado");
    if (botonSeleccionado) {
    botonSeleccionado.classList.remove("seleccionado");
    }
}


botonMarca.forEach((boton) => {
    boton.addEventListener("click", (event) => {
        event.preventDefault();
        boton.classList.add("seleccionado");
        const marcaSeleccionada = boton.innerText;
        const productosPorMarca = bd.registrosPorMarca(marcaSeleccionada);
        cargarProductos(productosPorMarca);
    });
});

