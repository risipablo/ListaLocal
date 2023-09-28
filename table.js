



/*; */


class Datos {
    constructor() {
        this.productos = [];
        this.agregarProductos(1,"Excellent","Adulto",1,"3000","Gato","Excellent","Adulto");
        this.agregarProductos(2,"Excellent","Adulto",7.5,"21500","Gato","Excellent","Adulto");
        this.agregarProductos(3,"Excellent","Kitten",1,"3500","Gato","Excellent","Cachorro");
        this.agregarProductos(4,"Excellent","Kitten",7.5,"26000","Gato","Excellent","Cachorro");
        this.agregarProductos(5,"Excellent","Sterilized",1,"3500","Gato","Excellent","Adulto");
        this.agregarProductos(6,"Excellent","Sterilized",7.5,"27000","Gato","Excellent","Adulto");
        this.agregarProductos(7,"Excellent","Urinary",1,"3500","Gato","Excellent","Adulto");
        this.agregarProductos(8,"Excellent","Urinary",7.5,"27000","Gato","Excellent","Adulto");
        this.agregarProductos(9,"Excellent","Puppy Small",1,"2000","Perro","Excellent","Cachorro");
        this.agregarProductos(10,"Excellent","Puppy Small",15,"29000","Perro","Excellent","Cachorro");
        this.agregarProductos(11,"Excellent","Puppy Grande",1,"2000","Perro","Excellent","Cachorro");
        this.agregarProductos(12,"Excellent","Puppy Grande",15,"29000","Perro","Excellent","Cachorro");
        this.agregarProductos(13,"Excellent","Mini Adulto",1,"1800","Perro","Excellent","Adulto");
        this.agregarProductos(14,"Excellent","Mini Adulto",15,"27000","Perro","Excellent","Adulto");
        this.agregarProductos(15,"Excellent","Adulto Grande",1,"1800","Perro","Excellent","Adulto");
        this.agregarProductos(16,"Excellent","Adulto Grande",15,"27000","Perro","Excellent","Adulto");
        this.agregarProductos(17,"Agility","Adulto Grande",20,"19000","Perro","Excellent","Adulto");
        this.agregarProductos(18,"Biopet","Adulto",1,"600","Perro","Biopet","Adulto");
        this.agregarProductos(19,"Biopet","Adulto",20,"9200","Perro","Biopet","Adulto");
        this.agregarProductos(20,"Old Prince","Mini Adulto",1,"1500","Perro","Old Prince","Adulto");
        this.agregarProductos(21,"Old Prince","Mini Adulto",15,"18000","Perro","Old Prince","Adulto");
        this.agregarProductos(22,"Old Prince","Derma Small",1,"1600","Perro","Old Prince","Adulto");
        this.agregarProductos(23,"Old Prince","Derma Small",15,"23000","Perro","Old Prince","Adulto");
        this.agregarProductos(24,"Old Prince ","Cachorro Small",1,"1300","Perro","Old Prince","Cachorro");
        this.agregarProductos(25,"Old Prince","Cachorro Small",7.5,"9500","Perro","Old Prince","Cachorro");
        this.agregarProductos(26,"Old Prince","Derma Adulto",1,"1300","Perro","Old Prince","Adulto");
        this.agregarProductos(27,"Old Prince","Derma Adulto",15,"19000","Perro","Old Prince","Adulto");
        this.agregarProductos(28,"Balanced","Derma Adulto",1,"1800","Perro","Balanced","Adulto");
        this.agregarProductos(29,"Balanced","Derma Adulto",15,"26000","Perro","Balanced","Adulto");
        this.agregarProductos(30,"Sieger","Mini Puppy",1,"2200","Perro","Sieger","Cachorro");
        this.agregarProductos(31,"Sieger","Mini Puppy",3,"7700","Perro","Sieger","Cachorro");
        this.agregarProductos(32,"Sieger","Mini Puppy",12,"25000","Perro","Sieger","Cachorro");
        this.agregarProductos(33,"Sieger","Cachorro",1,"2900","Perro","Sieger","Cachorro");
        this.agregarProductos(34,"Sieger ","Cachorro",3,"7200","Perro","Sieger","Cachorro");
        this.agregarProductos(35,"Sieger","Cachorro",15,"29000","Perro","Sieger","Cachorro");
        this.agregarProductos(36,"Sieger","Adulto Grande",1,"1900","Perro","Sieger","Adulto");
        this.agregarProductos(37,"Sieger","Adulto Grande",3,"7000","Perro","Sieger","Adulto");
        this.agregarProductos(38,"Sieger","Adulto Grande",15,"26500","Perro","Sieger","Adulto");
        this.agregarProductos(39,"Sieger","Mini Adulto",1,"2900","Perro","Sieger","Adulto");
        this.agregarProductos(40,"Sieger ","Mini Adulto",3,"7000","Perro","Sieger","Adulto");
        this.agregarProductos(30,"Sieger","Mini Adulto",12,"23000","Perro","Sieger","Adulto");
        this.agregarProductos(31,"Sieger","Mini Puppy",3,"7700","Perro","Sieger","Cachorro");
        this.agregarProductos(32,"Sieger","Mini Puppy",12,"25000","Perro","Sieger","Cachorro");
        this.agregarProductos(33,"Sieger","Senior Mini",3,"7500","Perro","Sieger","Senior");
        this.agregarProductos(34,"Sieger ","Senior Grande",3,"7000","Perro","Sieger","Senior");
        this.agregarProductos(35,"Sieger","Reduce",3,"7300","Perro","Sieger","Adulto");
        this.agregarProductos(36,"Sieger","Derma",3,"8000","Perro","Sieger","Adulto");
        this.agregarProductos(37,"Sieger","Derma",12,"25500","Perro","Sieger","Adulto");
        this.agregarProductos(38,"Sieger","Derma",1,"2200","Perro","Sieger","Adulto");
        this.agregarProductos(39,"Sieger","Criadores",1,"29500","Perro","Sieger","Adulto");
        this.agregarProductos(40,"Sieger ","Adulto Small",3,"2900","Perro","Sieger","Adulto");
        this.agregarProductos(41,"Cat Chow","Adulto ",1,"1800","Gato","Catchow","Adulto");
        this.agregarProductos(42,"Cat Chow","Adulto ",15,"26000","Gato","Catchow","Adulto");
        this.agregarProductos(43,"Cat Chow","Kitten ",1,"1600","Gato","Catchow","Cachorro");
        this.agregarProductos(44,"Cat Chow","Kitten ",15,"23000","Gato","Catchow","Cachorro");
        this.agregarProductos(45,"Gati","Adulto ",1,"1100","Gato","Gati","Adulto");
        this.agregarProductos(46,"Gati","Adulto ",15,"16000","Gato","Gati","Adulto");
        this.agregarProductos(47,"Infinity","Mini Adulto",1,"1100","Perro","Infinity","Adulto");
        this.agregarProductos(48,"Infinity","Mini Adulto ",15,"15700","Perro","Infinity","Adulto");
        this.agregarProductos(49,"Nutricare","Mini Adulto",1,"950","Perro","Nutricare","Adulto");
        this.agregarProductos(50,"Nutricare","Mini Adulto ",20,"14000","Perro","Nutricare","Adulto");
        this.agregarProductos(51,"Nutricare","Adulto Grande",1,"950","Perro","Nutricare","Adulto");
        this.agregarProductos(52,"Nutricare","Adulto Grande ",20,"14000","Perro","Nutricare","Adulto");
        this.agregarProductos(53,"Nutricare","Cachorro ",1,"1200","Perro","Nutricare","Cachorro");
        this.agregarProductos(54,"Nutricare","Cachorro",7.5,"9000","Perro","Nutricare","Cachorro");
        this.agregarProductos(55,"Wishka","Adulto ",1,"1400","Gato","Wishka","Adulto");
        this.agregarProductos(56,"Wishka","Adulto ",10,"14000","Gato","Wishka","Adulto");
        this.agregarProductos(57,"Bocato","Adulto",1,"750","Gato","Bocato","Adulto");
        this.agregarProductos(58,"Bocato","Adulto ",10,"6500","Gato","Bocato","Adulto");
        this.agregarProductos(59,"Optimun","Adulto",1,"2300","Gato","Optimun","Adulto");
        this.agregarProductos(60,"Optimun","Adulto ",10,"23000","Gato","Optimun","Adulto");
        this.agregarProductos(59,"Optimun","Adulto",3,"8300","Gato","Optimun","Adulto");
        this.agregarProductos(60,"Optimun","Mini Adulto ",15,"19000","Perro","Optimun","Adulto");
        this.agregarProductos(59,"Optimun","Mini Adulto",1,"1400","Perro","Optimun","Adulto");
        this.agregarProductos(60,"Pedigree","Mini Adulto",1,"900","Perro","Pedigree","Adulto");
        this.agregarProductos(61,"Pedigree","Mini Adulto",15,"14000","Perro","Pedigree","Adulto");
        this.agregarProductos(62,"Dog Chow","Mini Adulto",1,"1400","Perro","Dog Chow","Adulto");
        this.agregarProductos(63,"Dog Chow","Mini Adulto",20,"2800","Perro","Dog Chow","Adulto");
        this.agregarProductos(64,"Dog Chow","Adulto Light",1,"1500","Perro","Dog Chow","Adulto");
        this.agregarProductos(65,"Dog Chow","Adulto Light",20,"29600","Perro","Dog Chow","Adulto");
        this.agregarProductos(66,"Agility","Adulto Grande",1,"1000","Perro", "Agility","Adulto");
        this.agregarProductos(67,"Agility","Mini Adulto",1,"1200","Perro", "Agility","Adulto");
        this.agregarProductos(68,"Agility","Mini Adulto",15,"18000","Perro", "Agility","Adulto");
        this.agregarProductos(69,"Agility","Adulto Derma",1,"1400","Perro", "Agility","Adulto");
        this.agregarProductos(70,"Agility","Adulto Derma",15,"19000","Perro", "Agility","Adulto");
        this.agregarProductos(71,"Agility","Cachorro",1,"1200","Perro", "Agility","Adulto");
        this.agregarProductos(72,"Agility","Cahorro",20,"22000","Perro", "Agility","Adulto");
        this.agregarProductos(73,"Agility","Adulto",1,"2000","Gato", "Agility","Adulto");
        this.agregarProductos(74,"Agility","Adulto",1.5,"3800","Gato", "Agility","Adulto");
        this.agregarProductos(75,"Agility","Adulto",10,"19000","Gato", "Agility","Adulto");
        this.agregarProductos(76,"Agility","Kitten",1,"2100","Gato", "Agility","Cachorro");
        this.agregarProductos(77,"Agility","Kitten",1.5,"4100","Gato", "Agility","Cachorro");
        this.agregarProductos(78,"Agility","Kitten",10,"2000","Gato", "Agility","Cachoro");
        this.agregarProductos(79,"Agility","Urinary",1,"2100","Gato", "Agility","Adulto");
        this.agregarProductos(80,"Agility","Urinary",1.5,"4100","Gato", "Agility","Adulto");
        this.agregarProductos(81,"Agility","Urinary",10,"20000","Gato", "Agility","Adulto");
        this.agregarProductos(82,"Agility","Light",1,"21000","Gato", "Agility","Adulto");
        this.agregarProductos(83,"Agility","Light",1.5,"4100","Gato", "Agility","Adulto");
        this.agregarProductos(84,"Agility","Light",10,"20000","Gato", "Agility","Adulto");
        this.agregarProductos(85,"Agility","Lata Perro",1,"1200","Gato", "Agility","Adulto");
        this.agregarProductos(86,"Royal Canin","Mini Puppy",1,"4400","Perro","Royal Canin","Cachorro");
        this.agregarProductos(87,"Royal Canin","Mini Puppy",3,"12000","Perro","Royal Canin","Cachorro");
        this.agregarProductos(88,"Royal Canin","Mini Puppy",7.5,"23000","Perro","Royal Canin","Cachorro");
        this.agregarProductos(89,"Royal Canin","Mini Puppy",1,"3000","Perro","Royal Canin","Cachorro");
        this.agregarProductos(90,"Royal Canin","Mini Adulto",1,"4000","Perro","Royal Canin","Adulto");
        this.agregarProductos(91,"Royal Canin","Mini Adulto",3,"11000","Perro","Royal Canin","Aduto");
        this.agregarProductos(92,"Royal Canin","Mini Adulto",7.5,"23000","Perro","Royal Canin","Adulto");
        this.agregarProductos(93,"Royal Canin","Mini Adulto",1,"30000","Perro","Royal Canin","Adulto");
        this.agregarProductos(94,"Royal Canin","X-small Adulto",1,"4300","Perro","Royal Canin","Adulto");
        this.agregarProductos(95,"Royal Canin","X-small Junior",1,"4800","Perro","Royal Canin","Cachorro");
        this.agregarProductos(96,"Royal Canin","Pocuh Mini Adulto",1,"600","Perro","Royal Canin","Adulto");
        this.agregarProductos(97,"Royal Canin","Kitten",1.5,"10000","Gato","Royal Canin","Adulto");
        this.agregarProductos(98,"Royal Canin","Urinary",1.5,"10000","Gato","Royal Canin","Adulto");
        this.agregarProductos(99,"Royal Canin","Pouch Urinary",1,"1000","Gato","Royal Canin","Adulto");
        this.agregarProductos(100,"Royal Canin","Weight Control",1,"10000","Gato","Royal Canin","Adulto");
        this.agregarProductos(101,"Royal Canin","Urinary S/O",1,"10200","Gato","Royal Canin","Adulto");
        this.agregarProductos(102,"Eukanuba","Mini Puppy",1,"3400","Perro","Eukanuba","Cachorro");
        this.agregarProductos(103,"Eukanuba","Mini Puppy",3,"9000","Perro","Eukanuba","Cachorro");
        this.agregarProductos(104,"Eukanuba","Mini Puppy",15,"32500","Perro","Eukanuba","Cachorro");
        this.agregarProductos(105,"Eukanuba","Md/Lg Puppy",1,"3400","Perro","Eukanuba","Cachorro");
        this.agregarProductos(106,"Eukanuba","Md/Lg Puppy",15,"31000","Perro","Eukanuba","Cachorro");
        this.agregarProductos(107,"Eukanuba","Md/Lg Puppy",3,"8800","Perro","Eukanuba","Cachorro");
        this.agregarProductos(108,"Eukanuba","Mini Adulto",1,"3300","Perro","Eukanuba","Adulto");
        this.agregarProductos(109,"Eukanuba","Mini Adulto",3,"8700","Perro","Eukanuba","Adulto");
        this.agregarProductos(110,"Eukanuba","Mini Adulto",15,"30000","Perro","Eukanuba","Adulto");
        this.agregarProductos(111,"Eukanuba","Adulto Md/Lg",3,"8500","Perro","Eukanuba","Adulto");
        this.agregarProductos(112,"Eukanuba","Adulto Mg/lg",15,"29000","Perro","Eukanuba","Adulto");
        this.agregarProductos(113,"Eukanuba","Adulto Senior",3,"9000","Perro","Eukanuba","Senior");
        this.agregarProductos(114,"Eukanuba","Weight Control",3,"9500","Perro","Eukanuba","Adulto");
        this.agregarProductos(115,"Felix","Pouch",1,"400","Gato","Catchow","Adulto");
        this.agregarProductos(116,"Kro Line","Pretal Completo",1.5,"4000","Perro","Kro Line","Adulto");
        this.agregarProductos(117,"Kro Line","Pretal Completo",2,"4400","Perro","Kro Line","Adulto");
        this.agregarProductos(118,"Kro Line","Pretal Completo",2.5,"4600","Perro","Kro Line","Adulto");
        this.agregarProductos(119,"Kro Line","Pretal Completo",3,"5600","Perro","Kro Line","Adulto");
        this.agregarProductos(120,"Kro Line","Correa Sola",1.5,"1900","Perro","Kro Line","Adulto");
        this.agregarProductos(121,"Kro Line","Correa Sola",2,"2000","Perro","Kro Line","Adulto");
        this.agregarProductos(122,"Kro Line","Correa Sola",2.5,"2300","Perro","Kro Line","Adulto");
        this.agregarProductos(123,"Kro Line","Correa Sola",3,"2500","Perro","Kro Line","Adulto");
        this.agregarProductos(124,"Hueso","Corbata","6 cm" ,"300","Perro","Hueso","Adulto");
        this.agregarProductos(125,"Hueso","Corbata","13 cm","700","Perro","Hueso","Adulto");
        this.agregarProductos(126,"Hueso","Hueso Grande","34 cm","3300","Perro","Hueso","Adulto");
        this.agregarProductos(127,"Hueso","Palito Grising","20 cm","250","Perro","Hueso","Adulto");
        this.agregarProductos(128,"Hueso","Orejas","","300","Perro","Hueso","Adulto");
        this.agregarProductos(129,"Pedigree","Lata",1,"1000","Perro","Pedigree","Adulto","Perro","Pedigree","Adulto");
        this.agregarProductos(130,"Pedigree","Pouch",1,"250","Perro","Pedigree","Adulto","Perro","Pedigree","Adulto");
        this.agregarProductos(131,"Osspret Pipetas","Adulto","11-20","1300","Perro","Pipetas","Adulto");
        this.agregarProductos(132,"Osspret Pipetas","Adulto","2-10","1200","Perro","Pipetas","Adulto");
        this.agregarProductos(133,"Osspret Pipetas","Adulto","21-40","1600","Perro","Pipetas","Adulto");
        this.agregarProductos(134,"Osspret Pipetas","Adulto","+ 40","1700","Perro","Pipetas","Adulto");
        this.agregarProductos(135,"Osspret Pipetas","Adulto","+ 4","1200","Gato","Pipetas","Adulto");
        this.agregarProductos(136,"Osspret Shampoo","Pelo Blanco","1","2900","Perro","Shampoo","Adulto");
        this.agregarProductos(137,"Osspret Shampoo","Pelo Negro","1","2900","Perro","Shampoo","Adulto");
        this.agregarProductos(138,"Osspret Shampoo","Dermatitis","1","2300","Perro","Shampoo","Adulto");
        this.agregarProductos(139,"Osspret Shampoo","Algas","1","2300","Perro","Shampoo","Adulto");
        this.agregarProductos(140,"Osspret Shampoo","Duo","1","2500","Perro","Shampoo","Adulto");
        this.agregarProductos(141,"Osspret Shampoo","Extra Brillo","1","2900","Perro","Shampoo","Adulto");
        this.agregarProductos(142,"Agility","Lata Gato",1,"1200","Gato", "Agility","Adulto");
        this.agregarProductos(143,"Kro Line","Pechera Pitbul","5 cm","8000","Perro","Kro Line","Adulto");
        this.agregarProductos(144,"Stone Cat","Adulto","4","1900","Gato","Piedras","Adulto");
        this.agregarProductos(145,"Pellcats","Adulto","4","1100","Gato","Piedras","Adulto");
        this.agregarProductos(146,"Bandejas Sanitarias medianas","Adulto","1","1200","Gato","Piedras","Adulto");
        this.agregarProductos(147,"Mom Ami","Adulto","1","450","Gato","Bocaditos","Adulto");
        this.agregarProductos(148,"Mom Ami","Adulto","1","450","Gato","Bocaditos","Adulto");
        this.agregarProductos(149,"Arroz","Adulto",1,"650","Perro","Arroz","Adulto");
        this.agregarProductos(150,"Arroz","Adulto",15,"8200","Perro","Arroz","Adulto");
        this.agregarProductos(151,"Biopet","Mini Small",1,"700","Perro","Biopet","Mini Adulto");
        this.agregarProductos(152,"Biopet","Mini Small",15,"8000","Perro","Biopet","Mini Adulto");
        this.agregarProductos(153,"Excellent","Adulto",15,"45000","Gato","Excellent","Adulto");
        this.agregarProductos(154,"Dog Chow","Adulto Light",8,"1200","Perro","Dog Chow","Adulto");
        this.agregarProductos(155,"Dog Chow","Senior",8,"11800","Perro","Dog Chow","Senior");
        this.agregarProductos(156,"Dog Chow","Senior",1,"1500","Perro","Dog Chow","Senior");
        this.agregarProductos(157,"Excellent","Adulto",1,"4050","Gato","Excellent","Adulto");
        this.agregarProductos(158,"Excellent","Adulto",3,"11000","Gato","Excellent","Adulto");
        this.agregarProductos(159,"Excellent","Kitten",1,"4500","Gato","Excellent","Cachorro");
        this.agregarProductos(160,"Excellent","Urinary",1,"4700","Gato","Excellent","Adulto");
        this.agregarProductos(161,"Excellent","Steralized",1,"4700","Gato","Excellent","Adulto");
        this.agregarProductos(162,"Excellent","Puppy Small",3,"7700","Perro","Excellent","Cachorro");
        this.agregarProductos(163,"Excellent","Puppy Grande",3,"7600","Perro","Excellent","Cachorro");
        this.agregarProductos(164,"Excellent","Mini Adulto",3,"7100","Perro","Excellent","Adulto");
        this.agregarProductos(165,"Excellent","Adulto Grande",3,"6800","Perro","Excellent","Adulto");
        this.agregarProductos(166,"Excellent","Adulto Senior",1,"2000","Perro","Excellent","Senior");
        this.agregarProductos(167,"Excellent","Adulto Senior",15,"28000","Perro","Excellent","Senior");
        this.agregarProductos(168,"Maxxium","Adulto",20,"22500","Perro","Nutricare","Adulto");
        this.agregarProductos(169,"Keiko","Adulto","1","800","Gato","Keiko","Adulto");
        this.agregarProductos(170,"Keiko","Adulto","10","6800","Gato","Keiko","Adulto");
        this.agregarProductos(171,"Balanced","Derma Adulto",3,"7500","Perro","Balanced","Adulto");
        this.agregarProductos(172,"Cat Chow","Adulto ",8,"17400","Gato","Catchow","Adulto");
        this.agregarProductos(173,"Cat Chow","Kitten ",8,"18600","Gato","Catchow","Cachorro");
        this.agregarProductos(174,"Pro Plan","Adulto ",1,"3400","Perro","Pro Plan","Adulto");
        this.agregarProductos(175,"Pro Plan","Adulto ",3,"13800","Perro","Pro Plan","Adulto");
        this.agregarProductos(176,"Pro Plan","Adulto ",7.5,"25500","Perro","Pro Plan","Adulto");
        this.agregarProductos(177,"Piedras Blancas","Adulto","2","400","Gato","Piedras","Adulto")
        this.agregarProductos(178,"Nutricare","Adulto Grande ",7.5,"5000","Perro","Nutricare","Adulto");
        this.agregarProductos(179,"Nutricare","Mini Adulto ",7.5,"5000","Perro","Nutricare","Adulto");
        this.agregarProductos(180,"Nutricare","Adulto ",1,"1200","Gato","Nutricare","Adulto");
        this.agregarProductos(181,"Nutricare","Adulto ",7.5,"8500","Gato","Nutricare","Adulto");
        this.agregarProductos(182,"Collar Antipulgas","Cachorro ",1,"4800","Perro","Pipetas","Cachorro");
        this.agregarProductos(183,"Collar Antipulgas","Mini Adulto ",1,"4800","Perro","Pipetas","Adulto");
        this.agregarProductos(184,"Collar Antipulgas","Adulto Grande ",1,"4800","Perro","Pipetas","Adulto");
}
    agregarProductos(id,nombre,tamaño,kg,precio,mascota,marca,edad){
        const producto = new Producto (id,nombre,tamaño,kg,precio,mascota,marca,edad);/* este const se vincula con la class Producto */
        this.productos.push(producto); 
    }

    traerProductos(){
        return this.productos;
    }

    /* buscador con espacios incluidos */ 
    
    BuscadorDeNombre(palabra){
        const palabras = palabra.toLowerCase().split(" ");
        return this.productos.filter((producto) => {
            return palabras.every((p) => 
                producto.nombre.toLowerCase().includes(p) ||
                producto.tamaño.toLowerCase().includes(p) ||
                producto.mascota.toLowerCase().includes(p) ||
                producto.precio.toLowerCase().includes(p) ||
                producto.edad.toLowerCase().includes(p) ||
                producto.kg.toString().toLowerCase(). includes(p)
            );
        });
    }

    registroPorEdad(edad){
        return this.productos.filter((producto)=> producto.edad == edad);
    }

    registrosPorMarca(marca) {
        return this.productos.filter((producto) => producto.marca == marca);
    }

    registrosPorMascota(mascota) {
        return this.productos.filter((producto) => producto.mascota == mascota);
    }
    
    
}



class Producto{
    constructor(id,nombre,tamaño,kg,precio,mascota,marca,edad){
        this.id = id;
        this.nombre = nombre;
        this.tamaño = tamaño;
        this.kg = kg;
        this.precio = precio;
        this.mascota = mascota;
        this.marca = marca;
        this.edad = edad;
    }
}

const bd = new Datos (); 
const divProductos = document.querySelector (".productos");


cargarProductos(bd.productos);

function cargarProductos(productos){

    divProductos.innerHTML = `
            <table>
            <tr class="nombres">
                <th> Marca </th>
                <th> Edad </th>
                <th> Unidad </th>
                <th> Precio </th>
            </tr>
        </table>
    `;

    const tabla = divProductos.querySelector ("table");

    for (const producto of productos) {
        tabla.innerHTML += `
        <tr>
            <td>${producto.nombre} </td>
            <td>${producto.tamaño}</td>
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

const botonCategoria = document.querySelectorAll(".btnCategoria");
const botonMarca = document.querySelectorAll (".btnMarca");
const botonEdad = document.querySelectorAll (".btnEdad");
const TodosProductos = document.getElementById("Todos");
const Limpiar = document.getElementById("limpiar");

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

botonCategoria.forEach((boton) => {
    boton.addEventListener("click", (event) =>{
        event.preventDefault();
        boton.classList.add("seleccionado");
        const categoriaSeleccionada = boton.innerText;
        const categoria = bd.registrosPorMascota(categoriaSeleccionada) ;
        cargarProductos(categoria);
    })
})

botonEdad.forEach((boton) => {
    boton.addEventListener("click", (event) =>{
        event.preventDefault();
        boton.classList.add("seleccionado");
        const EdadSeleccionada = boton.innerText;
        const edad = bd.registroPorEdad(EdadSeleccionada) ;
        cargarProductos(edad);
    })
})