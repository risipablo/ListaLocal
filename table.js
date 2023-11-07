



/*; */


class Datos {
    constructor() {
        this.productos = [];
        this.agregarProductos(1,"Excellent","Adulto","suelto","3500","Gato","Excellent","Adulto");
        this.agregarProductos(170,"Excellent","Adulto",1,"4400","Gato","Excellent","Adulto");
        this.agregarProductos(171,"Excellent","Adulto",3,"12000","Gato","Excellent","Adulto");
        this.agregarProductos(2,"Excellent","Adulto",7.5,"26000","Gato","Excellent","Adulto");
        this.agregarProductos(166,"Excellent","Adulto",15,"50000","Gato","Excellent","Adulto");
        this.agregarProductos(3,"Excellent","Kitten","suelto","3800","Gato","Excellent","Cachorro");
        this.agregarProductos(172,"Excellent","Kitten",1,"4900","Gato","Excellent","Cachorro");
        this.agregarProductos(4,"Excellent","Kitten",7.5,"28000","Gato","Excellent","Cachorro");
        this.agregarProductos(5,"Excellent","Sterilized",1,"4900","Gato","Excellent","Adulto");
        this.agregarProductos(6,"Excellent","Sterilized",7.5,"29000","Gato","Excellent","Adulto");
        this.agregarProductos(7,"Excellent","Urinary","suelto","3800","Gato","Excellent","Adulto");
        this.agregarProductos(173,"Excellent","Urinary",1,"4900","Gato","Excellent","Adulto");
        this.agregarProductos(8,"Excellent","Urinary",7.5,"28000","Gato","Excellent","Adulto");
        this.agregarProductos(9,"Excellent","Puppy Small",1,"2300","Perro","Excellent","Cachorro");
        this.agregarProductos(175,"Excellent","Puppy Small",3,"8400","Perro","Excellent","Cachorro");
        this.agregarProductos(10,"Excellent","Puppy Small",15,"33000","Perro","Excellent","Cachorro");
        this.agregarProductos(11,"Excellent","Puppy Grande",1,"2300","Perro","Excellent","Cachorro");
        this.agregarProductos(176,"Excellent","Puppy Grande",3,"8200","Perro","Excellent","Cachorro");
        this.agregarProductos(12,"Excellent","Puppy Grande",15,"32000","Perro","Excellent","Cachorro");
        this.agregarProductos(13,"Excellent","Mini Adulto",1,"2000","Perro","Excellent","Adulto");
        this.agregarProductos(177,"Excellent","Mini Adulto",3,"7700","Perro","Excellent","Adulto");
        this.agregarProductos(14,"Excellent","Mini Adulto",15,"29000","Perro","Excellent","Adulto");
        this.agregarProductos(15,"Excellent","Adulto Grande",1,"20000","Perro","Excellent","Adulto");
        this.agregarProductos(178,"Excellent","Adulto Grande",3,"7400","Perro","Excellent","Adulto");
        this.agregarProductos(16,"Excellent","Adulto Grande",15,"29000","Perro","Excellent","Adulto");
        this.agregarProductos(179,"Excellent","Adulto Senior",1,"2300","Perro","Excellent","Senior");
        this.agregarProductos(180,"Excellent","Adulto Senior",15,"32000","Perro","Excellent","Senior");
        this.agregarProductos(17,"Agility","Adulto Grande",20,"2100","Perro","Excellent","Adulto");
        this.agregarProductos(18,"Biopet","Adulto",1,"800","Perro","Biopet","Adulto");
        this.agregarProductos(19,"Biopet","Adulto",20,"12000","Perro","Biopet","Adulto");
        this.agregarProductos(20,"Old Prince","Mini Adulto",1,"1800","Perro","Old Prince","Adulto");
        this.agregarProductos(229,"Old Prince","Mini Adulto",7.5,"14000","Perro","Old Prince","Adulto");
        this.agregarProductos(21,"Old Prince","Mini Adulto",15,"25000","Perro","Old Prince","Adulto");
        this.agregarProductos(22,"Old Prince","Derma Small",1,"2500","Perro","Old Prince","Adulto");
        this.agregarProductos(230,"Old Prince","Derma Small",7.5,"19000","Perro","Old Prince","Adulto");
        this.agregarProductos(23,"Old Prince","Derma Small",15,"36000","Perro","Old Prince","Adulto");
        this.agregarProductos(24,"Old Prince ","Cachorro Small",1,"2000","Perro","Old Prince","Cachorro");
        this.agregarProductos(25,"Old Prince","Cachorro Small",7.5,"14000","Perro","Old Prince","Cachorro");
        this.agregarProductos(26,"Old Prince","Derma Adulto",1,"2100","Perro","Old Prince","Adulto");
        this.agregarProductos(231,"Old Prince","Derma Adulto",7.5,"1750","Perro","Old Prince","Adulto");
        this.agregarProductos(27,"Old Prince","Derma Adulto",15,"30000","Perro","Old Prince","Adulto");
        this.agregarProductos(28,"Balanced","Derma Adulto",1,"2400","Perro","Balanced","Adulto");
        this.agregarProductos(28,"Balanced","Derma Adulto",1,"2400","Perro","Balanced","Adulto");
        this.agregarProductos(29,"Balanced","Derma Adulto",15,"33000","Perro","Balanced","Adulto");
        this.agregarProductos(30,"Sieger","Mini Puppy",1,"3700","Perro","Sieger","Cachorro");
        this.agregarProductos(31,"Sieger","Mini Puppy",3,"8500","Perro","Sieger","Cachorro");
        this.agregarProductos(32,"Sieger","Mini Puppy",12,"27500","Perro","Sieger","Cachorro");
        this.agregarProductos(33,"Sieger","Cachorro",1,"3300","Perro","Sieger","Cachorro");
        this.agregarProductos(34,"Sieger ","Cachorro",3,"8000","Perro","Sieger","Cachorro");
        this.agregarProductos(35,"Sieger","Cachorro",15,"29000","Perro","Sieger","Cachorro");
        this.agregarProductos(36,"Sieger","Adulto Grande",1,"2200","Perro","Sieger","Adulto");
        this.agregarProductos(37,"Sieger","Adulto Grande",3,"7000","Perro","Sieger","Adulto");
        this.agregarProductos(38,"Sieger","Adulto Grande",15,"32000","Perro","Sieger","Adulto");
        this.agregarProductos(39,"Sieger","Mini Adulto",1,"3300","Perro","Sieger","Adulto");
        this.agregarProductos(40,"Sieger ","Mini Adulto",3,"7900","Perro","Sieger","Adulto");
        this.agregarProductos(41,"Sieger","Mini Adulto",12,"25500","Perro","Sieger","Adulto");
        this.agregarProductos(42,"Sieger","Senior Mini",3,"8300","Perro","Sieger","Senior");
        this.agregarProductos(43,"Sieger ","Senior Mini",1,"3600","Perro","Sieger","Senior");
        this.agregarProductos(44,"Sieger","Reduce",3,"8000","Perro","Sieger","Adulto");
        this.agregarProductos(45,"Sieger","Derma",3,"9100","Perro","Sieger","Adulto");
        this.agregarProductos(46,"Sieger","Derma",12,"28000","Perro","Sieger","Adulto");
        this.agregarProductos(47,"Sieger","Derma",1,"2500","Perro","Sieger","Adulto");
        this.agregarProductos(48,"Sieger","Criadores",20,"32000","Perro","Sieger","Adulto");
        this.agregarProductos(50,"Cat Chow","Adulto ",1,"2200","Gato","Catchow","Adulto");
        this.agregarProductos(51,"Cat Chow","Adulto ",15,"3200","Gato","Catchow","Adulto");
        this.agregarProductos(52,"Cat Chow","Kitten ",1,"2500","Gato","Catchow","Cachorro");
        this.agregarProductos(53,"Cat Chow","Kitten ",15,"34000","Gato","Catchow","Cachorro");
        this.agregarProductos(54,"Gati","Adulto ",1,"1300","Gato","Gati","Adulto");
        this.agregarProductos(55,"Gati","Adulto ",15,"18000","Gato","Gati","Adulto");
        this.agregarProductos(56,"Infinity","Mini Adulto",1,"900","Perro","Infinity","Adulto");
        this.agregarProductos(57,"Infinity","Mini Adulto ",15,"12000","Perro","Infinity","Adulto");
        this.agregarProductos(58,"Nutricare","Mini Adulto",1,"900","Perro","Nutricare","Adulto");
        this.agregarProductos(59,"Nutricare","Mini Adulto ",20,"15000","Perro","Nutricare","Adulto");
        this.agregarProductos(60,"Nutricare","Adulto Grande",1,"900","Perro","Nutricare","Adulto");
        this.agregarProductos(61,"Nutricare","Adulto Grande ",20,"15000","Perro","Nutricare","Adulto");
        this.agregarProductos(62,"Nutricare","Cachorro ",1,"1000","Perro","Nutricare","Cachorro");
        this.agregarProductos(63,"Nutricare","Cachorro",7.5,"13000","Perro","Nutricare","Cachorro");
        this.agregarProductos(64,"Wishka","Adulto ",1,"1600","Gato","Wishka","Adulto");
        this.agregarProductos(65,"Wishka","Adulto ",10,"14000","Gato","Wishka","Adulto");
        this.agregarProductos(66,"Bocato","Adulto",1,"750","Gato","Bocato","Adulto");
        this.agregarProductos(67,"Bocato","Adulto ",10,"7000","Gato","Bocato","Adulto");
        this.agregarProductos(68,"Optimun","Adulto",1,"2100","Gato","Optimun","Adulto");
        this.agregarProductos(69,"Optimun","Adulto ",10,"20000","Gato","Optimun","Adulto");
        this.agregarProductos(70,"Optimun","Adulto",3,"7200","Gato","Optimun","Adulto");
        this.agregarProductos(71,"Optimun","Mini Adulto ",15,"17000","Perro","Optimun","Adulto");
        this.agregarProductos(72,"Optimun","Mini Adulto",1,"1300","Perro","Optimun","Adulto");
        this.agregarProductos(73,"Pedigree","Mini Adulto",1,"900","Perro","Pedigree","Adulto");
        this.agregarProductos(74,"Pedigree","Mini Adulto",15,"14000","Perro","Pedigree","Adulto");
        this.agregarProductos(75,"Dog Chow","Mini Adulto",1,"1500","Perro","Dog Chow","Adulto");
        this.agregarProductos(76,"Dog Chow","Mini Adulto",21,"30000","Perro","Dog Chow","Adulto");
        this.agregarProductos(77,"Dog Chow","Adulto Light",1,"1700","Perro","Dog Chow","Adulto");
        this.agregarProductos(78,"Dog Chow","Adulto Light",21,"32000","Perro","Dog Chow","Adulto");
        this.agregarProductos(79,"Agility","Adulto Grande",1,"1200","Perro", "Agility","Adulto");
        this.agregarProductos(80,"Agility","Mini Adulto",1,"1400","Perro", "Agility","Adulto");
        this.agregarProductos(81,"Agility","Mini Adulto",15,"20000","Perro", "Agility","Adulto");
        this.agregarProductos(82,"Agility","Adulto Derma",1,"1600","Perro", "Agility","Adulto");
        this.agregarProductos(83,"Agility","Adulto Derma",15,"21000","Perro", "Agility","Adulto");
        this.agregarProductos(84,"Agility","Cachorro",1,"1700","Perro", "Agility","Adulto");
        this.agregarProductos(85,"Agility","Cahorro",20,"23500","Perro", "Agility","Adulto");
        this.agregarProductos(86,"Agility","Adulto",1,"2200","Gato", "Agility","Adulto");
        this.agregarProductos(87,"Agility","Adulto",1.5,"4200","Gato", "Agility","Adulto");
        this.agregarProductos(88,"Agility","Adulto",10,"20000","Gato", "Agility","Adulto");
        this.agregarProductos(89,"Agility","Kitten",1,"2400","Gato", "Agility","Cachorro");
        this.agregarProductos(90,"Agility","Kitten",1.5,"4500","Gato", "Agility","Cachorro");
        this.agregarProductos(91,"Agility","Kitten",10,"22000","Gato", "Agility","Cachoro");
        this.agregarProductos(92,"Agility","Urinary",1,"2400","Gato", "Agility","Adulto");
        this.agregarProductos(93,"Agility","Urinary",1.5,"4100","Gato", "Agility","Adulto");
        this.agregarProductos(94,"Agility","Urinary",10,"22000","Gato", "Agility","Adulto");
        this.agregarProductos(95,"Agility","Light",1,"2400","Gato", "Agility","Adulto");
        this.agregarProductos(96,"Agility","Light",1.5,"4500","Gato", "Agility","Adulto");
        this.agregarProductos(97,"Agility","Light",10,"22000","Gato", "Agility","Adulto");
        this.agregarProductos(98,"Agility","Lata Perro",1,"1350","Gato", "Agility","Adulto");
        this.agregarProductos(99,"Royal Canin","Mini Puppy",1,"4400","Perro","Royal Canin","Cachorro");
        this.agregarProductos(100,"Royal Canin","Mini Puppy",3,"12000","Perro","Royal Canin","Cachorro");
        this.agregarProductos(101,"Royal Canin","Mini Puppy",7.5,"23000","Perro","Royal Canin","Cachorro");
        this.agregarProductos(102,"Royal Canin","Mini Puppy",1,"3500","Perro","Royal Canin","Cachorro");
        this.agregarProductos(103,"Royal Canin","Mini Adulto",1,"3500","Perro","Royal Canin","Adulto");
        this.agregarProductos(104,"Royal Canin","Mini Adulto",3,"11000","Perro","Royal Canin","Aduto");
        this.agregarProductos(105,"Royal Canin","Mini Adulto",7.5,"23000","Perro","Royal Canin","Adulto");
        this.agregarProductos(106,"Royal Canin","Mini Adulto",1,"4100","Perro","Royal Canin","Adulto");
        this.agregarProductos(107,"Royal Canin","X-small Adulto",1,"4300","Perro","Royal Canin","Adulto");
        this.agregarProductos(108,"Royal Canin","X-small Junior",1,"4800","Perro","Royal Canin","Cachorro");
        this.agregarProductos(109,"Royal Canin","Pocuh Mini Adulto",1,"600","Perro","Royal Canin","Adulto");
        this.agregarProductos(110,"Royal Canin","Kitten",1.5,"10000","Gato","Royal Canin","Adulto");
        this.agregarProductos(111,"Royal Canin","Urinary",1.5,"10000","Gato","Royal Canin","Adulto");
        this.agregarProductos(112,"Royal Canin","Pouch Urinary",1,"1000","Gato","Royal Canin","Adulto");
        this.agregarProductos(113,"Royal Canin","Weight Control",1,"10000","Gato","Royal Canin","Adulto");
        this.agregarProductos(114,"Royal Canin","Urinary S/O",1,"10200","Gato","Royal Canin","Adulto");
        this.agregarProductos(115,"Eukanuba","Mini Puppy",1,"3400","Perro","Eukanuba","Cachorro");
        this.agregarProductos(116,"Eukanuba","Mini Puppy",3,"9000","Perro","Eukanuba","Cachorro");
        this.agregarProductos(117,"Eukanuba","Mini Puppy",15,"32500","Perro","Eukanuba","Cachorro");
        this.agregarProductos(118,"Eukanuba","Md/Lg Puppy",1,"3400","Perro","Eukanuba","Cachorro");
        this.agregarProductos(119,"Eukanuba","Md/Lg Puppy",15,"31000","Perro","Eukanuba","Cachorro");
        this.agregarProductos(120,"Eukanuba","Md/Lg Puppy",3,"8800","Perro","Eukanuba","Cachorro");
        this.agregarProductos(121,"Eukanuba","Mini Adulto",1,"3300","Perro","Eukanuba","Adulto");
        this.agregarProductos(122,"Eukanuba","Mini Adulto",3,"8700","Perro","Eukanuba","Adulto");
        this.agregarProductos(123,"Eukanuba","Mini Adulto",15,"30000","Perro","Eukanuba","Adulto");
        this.agregarProductos(124,"Eukanuba","Adulto Md/Lg",3,"8500","Perro","Eukanuba","Adulto");
        this.agregarProductos(125,"Eukanuba","Adulto Mg/lg",15,"29000","Perro","Eukanuba","Adulto");
        this.agregarProductos(126,"Eukanuba","Adulto Senior",3,"9000","Perro","Eukanuba","Senior");
        this.agregarProductos(127,"Eukanuba","Weight Control",3,"9500","Perro","Eukanuba","Adulto");
        this.agregarProductos(128,"Felix","Pouch",1,"400","Gato","Catchow","Adulto");
        this.agregarProductos(129,"Kro Line","Pretal Completo",1.5,"4000","Perro","Kro Line","Adulto");
        this.agregarProductos(130,"Kro Line","Pretal Completo",2,"4400","Perro","Kro Line","Adulto");
        this.agregarProductos(131,"Kro Line","Pretal Completo",2.5,"4600","Perro","Kro Line","Adulto");
        this.agregarProductos(132,"Kro Line","Pretal Completo",3,"5600","Perro","Kro Line","Adulto");
        this.agregarProductos(133,"Kro Line","Correa Sola",1.5,"1900","Perro","Kro Line","Adulto");
        this.agregarProductos(134,"Kro Line","Correa Sola",2,"2000","Perro","Kro Line","Adulto");
        this.agregarProductos(135,"Kro Line","Correa Sola",2.5,"2300","Perro","Kro Line","Adulto");
        this.agregarProductos(136,"Kro Line","Correa Sola",3,"2500","Perro","Kro Line","Adulto");
        this.agregarProductos(137,"Hueso","Corbata","6 cm" ,"300","Perro","Hueso","Adulto");
        this.agregarProductos(138,"Hueso","Corbata","13 cm","700","Perro","Hueso","Adulto");
        this.agregarProductos(139,"Hueso","Hueso Grande","34 cm","3300","Perro","Hueso","Adulto");
        this.agregarProductos(140,"Hueso","Palito Grising","20 cm","250","Perro","Hueso","Adulto");
        this.agregarProductos(141,"Hueso","Orejas","","300","Perro","Hueso","Adulto");
        this.agregarProductos(142,"Pedigree","Lata",1,"1000","Perro","Pedigree","Adulto","Perro","Pedigree","Adulto");
        this.agregarProductos(143,"Pedigree","Pouch",1,"250","Perro","Pedigree","Adulto","Perro","Pedigree","Adulto");
        this.agregarProductos(144,"Osspret Pipetas","Adulto","11-20","1300","Perro","Pipetas","Adulto");
        this.agregarProductos(145,"Osspret Pipetas","Adulto","2-10","1200","Perro","Pipetas","Adulto");
        this.agregarProductos(146,"Osspret Pipetas","Adulto","21-40","1600","Perro","Pipetas","Adulto");
        this.agregarProductos(147,"Osspret Pipetas","Adulto","+ 40","1700","Perro","Pipetas","Adulto");
        this.agregarProductos(148,"Osspret Pipetas","Adulto","+ 4","1200","Gato","Pipetas","Adulto");
        this.agregarProductos(149,"Osspret Shampoo","Pelo Blanco","1","2900","Perro","Shampoo","Adulto");
        this.agregarProductos(150,"Osspret Shampoo","Pelo Negro","1","2900","Perro","Shampoo","Adulto");
        this.agregarProductos(151,"Osspret Shampoo","Dermatitis","1","2300","Perro","Shampoo","Adulto");
        this.agregarProductos(152,"Osspret Shampoo","Algas","1","2300","Perro","Shampoo","Adulto");
        this.agregarProductos(153,"Osspret Shampoo","Duo","1","2500","Perro","Shampoo","Adulto");
        this.agregarProductos(154,"Osspret Shampoo","Extra Brillo","1","2900","Perro","Shampoo","Adulto");
        this.agregarProductos(155,"Agility","Lata Gato",1,"1350","Gato", "Agility","Adulto");
        this.agregarProductos(156,"Kro Line","Pechera Pitbul","5 cm","8000","Perro","Kro Line","Adulto");
        this.agregarProductos(157,"Stone Cat","Adulto","4","2400","Gato","Piedras","Adulto");
        this.agregarProductos(158,"Pellcats","Adulto","4","1200","Gato","Piedras","Adulto");
        this.agregarProductos(159,"Bandejas Sanitarias medianas","Adulto","1","1200","Gato","Accesorios","Adulto");
        this.agregarProductos(160,"Golocan","Bocaditos","1","650","Perro","Bocados","Adulto");
        this.agregarProductos(161,"Golocan","Galletas","1","650","Perro","Bocados","Adulto");
        this.agregarProductos(162,"Arroz","Adulto",1,"1200","Perro","Arroz","Adulto");
        this.agregarProductos(163,"Arroz","Adulto",15,"12000","Perro","Arroz","Adulto");
        this.agregarProductos(164,"Biopet","Mini Small",1,"800","Perro","Biopet","Mini Adulto");
        this.agregarProductos(165,"Biopet","Mini Small",15,"10500","Perro","Biopet","Mini Adulto");
        this.agregarProductos(167,"Dog Chow","Adulto Light",8,"13400","Perro","Dog Chow","Adulto");
        this.agregarProductos(168,"Dog Chow","Senior",8,"11800","Perro","Dog Chow","Senior");
        this.agregarProductos(169,"Dog Chow","Senior",1,"1500","Perro","Dog Chow","Senior");
        this.agregarProductos(181,"Maxxium","Adulto",20,"22500","Perro","Nutricare","Adulto");
        this.agregarProductos(182,"Keiko","Adulto","1","900","Gato","Keiko","Adulto");
        this.agregarProductos(183,"Keiko","Adulto","10","8000","Gato","Keiko","Adulto");
        this.agregarProductos(184,"Balanced","Derma Adulto",3,"8900","Perro","Balanced","Adulto");
        this.agregarProductos(185,"Cat Chow","Adulto ",8,"1890","Gato","Catchow","Adulto");
        this.agregarProductos(186,"Cat Chow","Kitten ",8,"20400","Gato","Catchow","Cachorro");
        this.agregarProductos(187,"Pro Plan","Adulto ",1,"3600","Perro","Pro Plan","Adulto");
        this.agregarProductos(188,"Pro Plan","Adulto ",3,"13300","Perro","Pro Plan","Adulto");
        this.agregarProductos(189,"Pro Plan","Adulto ",7.5,"27000","Perro","Pro Plan","Adulto");
        this.agregarProductos(190,"Piedras Blancas","Adulto","2","800","Gato","Piedras","Adulto")
        this.agregarProductos(191,"Nutricare","Adulto Grande ",7.5,"5600","Perro","Nutricare","Adulto");
        this.agregarProductos(192,"Nutricare","Mini Adulto ",7.5,"5600","Perro","Nutricare","Adulto");
        this.agregarProductos(193,"Nutricare","Adulto ",1,"1400","Gato","Nutricare","Adulto");
        this.agregarProductos(194,"Nutricare","Adulto ",7.5,"9500","Gato","Nutricare","Adulto");
        this.agregarProductos(195,"Collar Antipulgas","Cachorro ",1,"4800","Perro","Pipetas","Cachorro");
        this.agregarProductos(196,"Collar Antipulgas","Mini Adulto ",1,"4800","Perro","Pipetas","Adulto");
        this.agregarProductos(197,"Collar Antipulgas","Adulto Grande ",1,"4800","Perro","Pipetas","Adulto");
        this.agregarProductos(198,"Balanced","Mini Senior",1,"2600","Perro","Balanced","Senior");
        this.agregarProductos(199,"Balanced","Mini Senior",3,"7800","Perro","Balanced","Senior");
        this.agregarProductos(200,"Balanced","Mini Senior",7.5,"1800","Perro","Balanced","Senior");
        this.agregarProductos(201,"Balanced","Mini Senior",1,"2200","Perro","Balanced","Senior");
        this.agregarProductos(202,"Balanced","Mini Senior",3,"7800","Perro","Balanced","Senior");
        this.agregarProductos(203,"Balanced","Mini Senior",15,"29000","Perro","Balanced","Senior");
        this.agregarProductos(204,"Kro Line","Correa Ancha","4","4500","Perro","Kro Line","Adulto");
        this.agregarProductos(205,"Kro Line","Pretal Solo","1.5","2200","Perro","Kro Line","Adulto");
        this.agregarProductos(206,"Kro Line","Pretal Solo","2","2400","Perro","Kro Line","Adulto");
        this.agregarProductos(207,"Kro Line","Pretal Solo","2.5","2500","Perro","Kro Line","Adulto");
        this.agregarProductos(208,"Kro Line","Pretal Solo","3","2600","Perro","Kro Line","Adulto");
        this.agregarProductos(209,"Kro Line","Collar Pitbull","4","3800","Perro","Kro Line","Adulto");
        this.agregarProductos(210,"Mom Ami","Bocaditos","1","900","Perro","Bocados","Adulto");
        this.agregarProductos(211,"Pechera","Pechera","XS","4500","Perro","Accesorios","Adulto");
        this.agregarProductos(212,"Pechera","Pechera","S","4900","Perro","Accesorios","Adulto");
        this.agregarProductos(213,"Pechera","Pechera","M","5300","Perro","Accesorios","Adulto");
        this.agregarProductos(214,"Pechera","Pechera","L","5900","Perro","Accesorios","Adulto");
        this.agregarProductos(215,"Pechera","Pechera","XL","6400","Perro","Accesorios","Adulto");
        this.agregarProductos(216,"Cardina","Chica","1","1500","Perro","Accesorios","Adulto");
        this.agregarProductos(217,"Cardina","Mediana","1","1800","Perro","Accesorios","Adulto");
        this.agregarProductos(218,"Cardina","Grande","1","2000","Perro","Accesorios","Adulto");
        this.agregarProductos(219,"Piedras Blancas","Adulto",4,"1400","Gato","Accesorios","Adulto");
        this.agregarProductos(49,"Sieger Katze ","Kitten",1,"4700","Gato","Sieger","Adulto");
        this.agregarProductos(220,"Sieger Katze ","Kitten",7.5,"2900","Gato","Sieger","Adulto");
        this.agregarProductos(221,"Sieger Katze ","Adulto",1,"4400","Gato","Sieger","Adulto");
        this.agregarProductos(222,"Sieger Katze ","Adulto",7.5,"22500","Gato","Sieger","Adulto");
        this.agregarProductos(223,"Sieger Katze ","Urinary",1,"4700","Gato","Sieger","Adulto");
        this.agregarProductos(224,"Sieger Katze ","Urinary",7.5,"23700","Gato","Sieger","Adulto");
        this.agregarProductos(225,"Sieger Katze ","Senior",1,"4700","Gato","Sieger","Adulto");
        this.agregarProductos(226,"Sieger Katze ","Senior",7.5,"23700","Gato","Sieger","Adulto");
        this.agregarProductos(227,"Sieger Katze ","Light",1,"4700","Gato","Sieger","Adulto");
        this.agregarProductos(228,"Sieger Katze ","Light",7.5,"23700","Gato","Sieger","Adulto");
        
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
                <th> ID </th>
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
            <td>${producto.id} </td>
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