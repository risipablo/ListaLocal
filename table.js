

class Datos {
    constructor() {
        this.productos = [];
        this.agregarProductos(1,"Excellent","Adulto","suelto","3800","Gato","Excellent","Adulto");
        this.agregarProductos(170,"Excellent","Adulto",1,"4800","Gato","Excellent","Adulto");
        this.agregarProductos(171,"Excellent","Adulto",3,"13300","Gato","Excellent","Adulto");
        this.agregarProductos(2,"Excellent","Adulto",7.5,"28000","Gato","Excellent","Adulto");
        this.agregarProductos(166,"Excellent","Adulto",15,"55000","Gato","Excellent","Adulto");
        this.agregarProductos(3,"Excellent","Kitten","suelto","4300","Gato","Excellent","Cachorro");
        this.agregarProductos(172,"Excellent","Kitten",1,"5400","Gato","Excellent","Cachorro");
        this.agregarProductos(4,"Excellent","Kitten",7.5,"31900","Gato","Excellent","Cachorro");
        this.agregarProductos(5,"Excellent","Sterilized",1,"5600","Gato","Excellent","Adulto");
        this.agregarProductos(6,"Excellent","Sterilized",7.5,"32000","Gato","Excellent","Adulto");
        this.agregarProductos(7,"Excellent","Urinary","suelto","4500","Gato","Excellent","Adulto");
        this.agregarProductos(173,"Excellent","Urinary",1,"5600","Gato","Excellent","Adulto");
        this.agregarProductos(8,"Excellent","Urinary",7.5,"32000","Gato","Excellent","Adulto");
        this.agregarProductos(9,"Excellent","Puppy Small",1,"2600","Perro","Excellent","Cachorro");
        this.agregarProductos(175,"Excellent","Puppy Small",3,"9300","Perro","Excellent","Cachorro");
        this.agregarProductos(10,"Excellent","Puppy Small",15,"36000","Perro","Excellent","Cachorro");
        this.agregarProductos(11,"Excellent","Puppy Grande",1,"2500","Perro","Excellent","Cachorro");
        this.agregarProductos(176,"Excellent","Puppy Grande",3,"8900","Perro","Excellent","Cachorro");
        this.agregarProductos(12,"Excellent","Puppy Grande",15,"34000","Perro","Excellent","Cachorro");
        this.agregarProductos(13,"Excellent","Mini Adulto",1,"2300","Perro","Excellent","Adulto");
        this.agregarProductos(177,"Excellent","Mini Adulto",3,"8500","Perro","Excellent","Adulto");
        this.agregarProductos(14,"Excellent","Mini Adulto",15,"32000","Perro","Excellent","Adulto");
        this.agregarProductos(15,"Excellent","Adulto Grande",1,"2300","Perro","Excellent","Adulto");
        this.agregarProductos(178,"Excellent","Adulto Grande",3,"8100","Perro","Excellent","Adulto");
        this.agregarProductos(16,"Excellent","Adulto Grande",15,"31000","Perro","Excellent","Adulto");
        this.agregarProductos(179,"Excellent","Adulto Senior",1,"2500","Perro","Excellent","Senior");
        this.agregarProductos(180,"Excellent","Adulto Senior",15,"34000","Perro","Excellent","Senior");
        this.agregarProductos(17,"Agility","Adulto Grande",20,"25000","Perro","Agility","Adulto");
        this.agregarProductos(18,"Biopet","Adulto",1,"1000","Perro","Biopet","Adulto");
        this.agregarProductos(19,"Biopet","Adulto",20,"16500","Perro","Biopet","Adulto");
        this.agregarProductos(164,"Biopet","Mini Small",1,"1200","Perro","Biopet","Mini Adulto");
        this.agregarProductos(165,"Biopet","Mini Small",15,"14500","Perro","Biopet","Mini Adulto");
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
        this.agregarProductos(28,"Balanced","Derma Adulto",1,"2700","Perro","Balanced","Adulto");
        this.agregarProductos(29,"Balanced","Derma Adulto",15,"38500","Perro","Balanced","Adulto");
        this.agregarProductos(30,"Sieger","Mini Puppy",1,"4550.5","Perro","Sieger","Cachorro");
        this.agregarProductos(31,"Sieger","Mini Puppy",3,"10550","Perro","Sieger","Cachorro");
        this.agregarProductos(32,"Sieger","Mini Puppy",12,"34000","Perro","Sieger","Cachorro");
        this.agregarProductos(33,"Sieger","Cachorro",1,"4150","Perro","Sieger","Cachorro");
        this.agregarProductos(34,"Sieger ","Cachorro",3,"10000","Perro","Sieger","Cachorro");
        this.agregarProductos(35,"Sieger","Cachorro",15,"39700","Perro","Sieger","Cachorro");
        this.agregarProductos(36,"Sieger","Adulto Grande",1,"2400","Perro","Sieger","Adulto");
        this.agregarProductos(37,"Sieger","Adulto Grande",3,"7000","Perro","Sieger","Adulto");
        this.agregarProductos(38,"Sieger","Adulto Grande",15,"32000","Perro","Sieger","Adulto");
        this.agregarProductos(39,"Sieger","Mini Adulto",1,"2500","Perro","Sieger","Adulto");
        this.agregarProductos(40,"Sieger ","Mini Adulto",3,"7900","Perro","Sieger","Adulto");
        this.agregarProductos(41,"Sieger","Mini Adulto",12,"25500","Perro","Sieger","Adulto");
        this.agregarProductos(42,"Sieger","Senior Mini",3,"9700","Perro","Sieger","Senior");
        this.agregarProductos(43,"Sieger ","Senior Grande",3,"9600","Perro","Sieger","Senior");
        this.agregarProductos(44,"Sieger","Reduce",3,"9900","Perro","Sieger","Adulto");
        this.agregarProductos(45,"Sieger","Derma",3,"11200","Perro","Sieger","Adulto");
        this.agregarProductos(46,"Sieger","Derma",12,"36000","Perro","Sieger","Adulto");
        this.agregarProductos(47,"Sieger","Derma",1,"3200","Perro","Sieger","Adulto");
        this.agregarProductos(48,"Sieger","Criadores",20,"40000","Perro","Sieger","Adulto");
        this.agregarProductos(50,"Cat Chow","Adulto ",1,"2500","Gato","Catchow","Adulto");
        this.agregarProductos(51,"Cat Chow","Adulto ",15,"35000","Gato","Catchow","Adulto");
        this.agregarProductos(52,"Cat Chow","Kitten ",1,"2700","Gato","Catchow","Cachorro");
        this.agregarProductos(53,"Cat Chow","Kitten ",15,"38500","Gato","Catchow","Cachorro");
        this.agregarProductos(54,"Gati","Adulto ",1,"1500","Gato","Gati","Adulto");
        this.agregarProductos(55,"Gati","Adulto ",15,"20000","Gato","Gati","Adulto");
        this.agregarProductos(56,"Infinity","Mini Adulto",1,"1500","Perro","Infinity","Adulto");
        this.agregarProductos(57,"Infinity","Mini Adulto ",15,"19000","Perro","Infinity","Adulto");
        this.agregarProductos(58,"Nutricare","Mini Adulto",1,"1400","Perro","Nutricare","Adulto");
        this.agregarProductos(59,"Nutricare","Mini Adulto ",20,"22000","Perro","Nutricare","Adulto");
        this.agregarProductos(60,"Nutricare","Adulto Grande",1,"1200","Perro","Nutricare","Adulto");
        this.agregarProductos(61,"Nutricare","Adulto Grande ",20,"22000","Perro","Nutricare","Adulto");
        this.agregarProductos(62,"Nutricare","Cachorro ",1,"1400","Perro","Nutricare","Cachorro");
        this.agregarProductos(63,"Nutricare","Cachorro",15,"18000","Perro","Nutricare","Cachorro");
        this.agregarProductos(190,"Piedras Blancas","Adulto","2","800","Gato","Piedras","Adulto")
        this.agregarProductos(191,"Nutricare","Adulto Grande ",7.5,"8000","Perro","Nutricare","Adulto");
        this.agregarProductos(192,"Nutricare","Mini Adulto ",7.5,"8000","Perro","Nutricare","Adulto");
        this.agregarProductos(193,"Nutricare","Adulto ",1,"2000","Gato","Nutricare","Adulto");
        this.agregarProductos(194,"Nutricare","Adulto ",7.5,"14000","Gato","Nutricare","Adulto");
        this.agregarProductos(64,"Wishka","Adulto ",1,"2200","Gato","Wishka","Adulto");
        this.agregarProductos(65,"Wishka","Adulto ",10,"21000","Gato","Wishka","Adulto");
        this.agregarProductos(66,"Bocato","Adulto",1,"1100","Gato","Bocato","Adulto");
        this.agregarProductos(67,"Bocato","Adulto ",10,"9000","Gato","Bocato","Adulto");
        this.agregarProductos(232,"Bocato","Adulto",1,"800","Perro","Bocato","Adulto");
        this.agregarProductos(233,"Bocato","Adulto ",20,"12500","Perro","Bocato","Adulto");
        this.agregarProductos(68,"Optimun","Adulto",1,"2500","Gato","Optimun","Adulto");
        this.agregarProductos(69,"Optimun","Adulto ",10,"22000","Gato","Optimun","Adulto");
        this.agregarProductos(70,"Optimun","Adulto",3,"7900","Gato","Optimun","Adulto");
        this.agregarProductos(71,"Optimun","Mini Adulto ",15,"19000","Perro","Optimun","Adulto");
        this.agregarProductos(72,"Optimun","Mini Adulto",1,"1500","Perro","Optimun","Adulto");
        this.agregarProductos(73,"Pedigree","Mini Adulto",1,"1700","Perro","Pedigree","Adulto");
        this.agregarProductos(74,"Pedigree","Mini Adulto",15,"21000","Perro","Pedigree","Adulto");
        this.agregarProductos(75,"Dog Chow","Mini Adulto",1,"1800","Perro","Dog Chow","Adulto");
        this.agregarProductos(76,"Dog Chow","Mini Adulto",21,"32000","Perro","Dog Chow","Adulto");
        this.agregarProductos(77,"Dog Chow","Adulto Light",1,"1900","Perro","Dog Chow","Adulto");
        this.agregarProductos(78,"Dog Chow","Adulto Light",21,"35000","Perro","Dog Chow","Adulto");
        this.agregarProductos(79,"Agility","Adulto Grande",1,"1500","Perro", "Agility","Adulto");
        this.agregarProductos(80,"Agility","Mini Adulto",1,"1800","Perro", "Agility","Adulto");
        this.agregarProductos(81,"Agility","Mini Adulto",15,"24000","Perro", "Agility","Adulto");
        this.agregarProductos(82,"Agility","Adulto Derma",1,"2000","Perro", "Agility","Adulto");
        this.agregarProductos(83,"Agility","Adulto Derma",15,"25000","Perro", "Agility","Adulto");
        this.agregarProductos(84,"Agility","Cachorro",1,"1800","Perro", "Agility","Adulto");
        this.agregarProductos(85,"Agility","Cahorro",20,"30000","Perro", "Agility","Adulto");
        this.agregarProductos(86,"Agility","Adulto",1,"2700","Gato", "Agility","Adulto");
        this.agregarProductos(87,"Agility","Adulto",1.5,"5200","Gato", "Agility","Adulto");
        this.agregarProductos(88,"Agility","Adulto",10,"26000","Gato", "Agility","Adulto");
        this.agregarProductos(89,"Agility","Kitten",1,"2900","Gato", "Agility","Cachorro");
        this.agregarProductos(90,"Agility","Kitten",1.5,"5600","Gato", "Agility","Cachorro");
        this.agregarProductos(91,"Agility","Kitten",10,"27000","Gato", "Agility","Cachoro");
        this.agregarProductos(92,"Agility","Urinary",1,"2900","Gato", "Agility","Adulto");
        this.agregarProductos(93,"Agility","Urinary",1.5,"5600","Gato", "Agility","Adulto");
        this.agregarProductos(94,"Agility","Urinary",10,"27000","Gato", "Agility","Adulto");
        this.agregarProductos(95,"Agility","Light",1,"2900","Gato", "Agility","Adulto");
        this.agregarProductos(96,"Agility","Light",1.5,"5600","Gato", "Agility","Adulto");
        this.agregarProductos(97,"Agility","Light",10,"27000","Gato", "Agility","Adulto");
        this.agregarProductos(98,"Agility","Lata Perro",1,"1500","Gato", "Agility","Adulto");
        this.agregarProductos(99,"Royal Canin","Mini Puppy",1,"5600","Perro","Royal Canin","Cachorro");
        this.agregarProductos(100,"Royal Canin","Mini Puppy",3,"15000","Perro","Royal Canin","Cachorro");
        this.agregarProductos(101,"Royal Canin","Mini Puppy",7.5,"28000","Perro","Royal Canin","Cachorro");
        this.agregarProductos(232,"Royal Canin","Mini Puppy",15,"51000","Perro","Royal Canin","Cachorro");
        this.agregarProductos(102,"Royal Canin","Mini Puppy","suelto","3800","Perro","Royal Canin","Cachorro");
        this.agregarProductos(103,"Royal Canin","Mini Adulto","suelto","3800","Perro","Royal Canin","Adulto");
        this.agregarProductos(104,"Royal Canin","Mini Adulto",3,"13800","Perro","Royal Canin","Aduto");
        this.agregarProductos(105,"Royal Canin","Mini Adulto",7.5,"28000","Perro","Royal Canin","Adulto");
        this.agregarProductos(106,"Royal Canin","Mini Adulto",1,"5100","Perro","Royal Canin","Adulto");
        this.agregarProductos(107,"Royal Canin","X-small Adulto",1,"5400","Perro","Royal Canin","Adulto");
        this.agregarProductos(108,"Royal Canin","X-small Junior",1,"6000","Perro","Royal Canin","Cachorro");
        this.agregarProductos(109,"Royal Canin","Pocuh Mini Adulto",1,"1200","Perro","Royal Canin","Adulto");
        this.agregarProductos(110,"Royal Canin","Kitten",1.5,"12200","Gato","Royal Canin","Adulto");
        this.agregarProductos(111,"Royal Canin","Urinary",1.5,"12500","Gato","Royal Canin","Adulto");
        this.agregarProductos(112,"Royal Canin","Pouch Urinary",1,"1200","Gato","Royal Canin","Adulto");
        this.agregarProductos(113,"Royal Canin","Weight Control",1,"1200","Gato","Royal Canin","Adulto");
        this.agregarProductos(114,"Royal Canin","Urinary S/O",1,"11200","Gato","Royal Canin","Adulto");
        this.agregarProductos(115,"Eukanuba","Mini Puppy",1,"4500","Perro","Eukanuba","Cachorro");
        this.agregarProductos(116,"Eukanuba","Mini Puppy",3,"11000","Perro","Eukanuba","Cachorro");
        this.agregarProductos(117,"Eukanuba","Mini Puppy",15,"39600","Perro","Eukanuba","Cachorro");
        this.agregarProductos(118,"Eukanuba","Md/Lg Puppy",1,"4100","Perro","Eukanuba","Cachorro");
        this.agregarProductos(119,"Eukanuba","Md/Lg Puppy",15,"37000","Perro","Eukanuba","Cachorro");
        this.agregarProductos(120,"Eukanuba","Md/Lg Puppy",3,"11000","Perro","Eukanuba","Cachorro");
        this.agregarProductos(121,"Eukanuba","Mini Adulto",1,"4100","Perro","Eukanuba","Adulto");
        this.agregarProductos(122,"Eukanuba","Mini Adulto",3,"9400","Perro","Eukanuba","Adulto");
        this.agregarProductos(123,"Eukanuba","Mini Adulto",15,"33000","Perro","Eukanuba","Adulto");
        this.agregarProductos(124,"Eukanuba","Adulto Md/Lg",3,"8500","Perro","Eukanuba","Adulto");
        this.agregarProductos(125,"Eukanuba","Adulto Mg/lg",15,"37000","Perro","Eukanuba","Adulto");
        this.agregarProductos(126,"Eukanuba","Adulto Senior",3,"10900","Perro","Eukanuba","Senior");
        this.agregarProductos(127,"Eukanuba","Weight Control",3,"11800","Perro","Eukanuba","Adulto");
        this.agregarProductos(128,"Felix","Pouch",1,"700","Gato","Catchow","Adulto");
        this.agregarProductos(129,"Kro Line","Pretal Completo",1.5,"5500","Perro","Kro Line","Adulto");
        this.agregarProductos(130,"Kro Line","Pretal Completo",2,"6000","Perro","Kro Line","Adulto");
        this.agregarProductos(131,"Kro Line","Pretal Completo",2.5,"7000","Perro","Kro Line","Adulto");
        this.agregarProductos(132,"Kro Line","Pretal Completo",3,"7500","Perro","Kro Line","Adulto");
        this.agregarProductos(133,"Kro Line","Correa Sola",1.5,"2500","Perro","Kro Line","Adulto");
        this.agregarProductos(134,"Kro Line","Correa Sola",2,"2700","Perro","Kro Line","Adulto");
        this.agregarProductos(135,"Kro Line","Correa Sola",2.5,"3000","Perro","Kro Line","Adulto");
        this.agregarProductos(136,"Kro Line","Correa Sola",3,"3300","Perro","Kro Line","Adulto");
        this.agregarProductos(137,"Hueso","Corbata","6 cm" ,"300","Perro","Hueso","Adulto");
        this.agregarProductos(138,"Hueso","Corbata","13 cm","700","Perro","Hueso","Adulto");
        this.agregarProductos(139,"Hueso","Hueso Grande","34 cm","4000","Perro","Hueso","Adulto");
        this.agregarProductos(140,"Hueso","Palito Grising","20 cm","300","Perro","Hueso","Adulto");
        this.agregarProductos(141,"Hueso","Orejas","","300","Perro","Hueso","Adulto");
        this.agregarProductos(142,"Pedigree","Lata",1,"1000","Perro","Pedigree","Adulto","Perro","Pedigree","Adulto");
        this.agregarProductos(143,"Pedigree","Pouch",1,"350","Perro","Pedigree","Adulto","Perro","Pedigree","Adulto");
        this.agregarProductos(144,"Osspret Pipetas","Adulto","11-20","2000","Perro","Pipetas","Adulto");
        this.agregarProductos(145,"Osspret Pipetas","Adulto","2-10","2000","Perro","Pipetas","Adulto");
        this.agregarProductos(146,"Osspret Pipetas","Adulto","21-40","2500","Perro","Pipetas","Adulto");
        this.agregarProductos(147,"Osspret Pipetas","Adulto","+ 40","2500","Perro","Pipetas","Adulto");
        this.agregarProductos(148,"Osspret Pipetas","Adulto","+ 4","1800","Gato","Pipetas","Adulto");
        this.agregarProductos(149,"Osspret Shampoo","Pelo Blanco","1","3200","Perro","Shampoo","Adulto");
        this.agregarProductos(150,"Osspret Shampoo","Pelo Negro","1","3200","Perro","Shampoo","Adulto");
        this.agregarProductos(151,"Osspret Shampoo","Dermatitis","1","3000","Perro","Shampoo","Adulto");
        this.agregarProductos(152,"Osspret Shampoo","Algas","1","3200","Perro","Shampoo","Adulto");
        this.agregarProductos(153,"Osspret Shampoo","Duo","1","3200","Perro","Shampoo","Adulto");
        this.agregarProductos(154,"Osspret Shampoo","Extra Brillo","1","3200","Perro","Shampoo","Adulto");
        this.agregarProductos(155,"Agility","Lata Gato",1,"1500","Gato", "Agility","Adulto");
        this.agregarProductos(156,"Kro Line","Pechera Pitbul","5 cm","11000","Perro","Kro Line","Adulto");
        this.agregarProductos(157,"Stone Cat","Adulto","4","2400","Gato","Piedras","Adulto");
        this.agregarProductos(158,"Pellcats","Adulto","4","1400","Gato","Piedras","Adulto");
        this.agregarProductos(159,"Bandejas Sanitarias medianas","Adulto","1","2000","Gato","Accesorios","Adulto");
        this.agregarProductos(160,"Golocan","Bocaditos","1","800","Perro","Bocados","Adulto");
        this.agregarProductos(161,"Golocan","Galletas","1","650","Perro","Bocados","Adulto");
        this.agregarProductos(162,"Arroz","Adulto",1,"1200","Perro","Arroz","Adulto");
        this.agregarProductos(163,"Arroz","Adulto",15,"17000","Perro","Arroz","Adulto");
        this.agregarProductos(167,"Dog Chow","Adulto Light",8,"14800","Perro","Dog Chow","Adulto");
        this.agregarProductos(168,"Dog Chow","Senior",8,"14000","Perro","Dog Chow","Senior");
        this.agregarProductos(169,"Dog Chow","Senior",1,"1900","Perro","Dog Chow","Senior");
        this.agregarProductos(181,"Maxxium","Adulto",20,"29000","Perro","Nutricare","Adulto");
        this.agregarProductos(182,"Smarty","Adulto","1","700","Perro","Smarty","Adulto");
        this.agregarProductos(183,"Smarty","Adulto","15","9000","Perro","Smarty","Adulto");
        this.agregarProductos(184,"Balanced","Derma Adulto",3,"11300","Perro","Balanced","Adulto");
        this.agregarProductos(185,"Cat Chow","Adulto ",8,"20500","Gato","Catchow","Adulto");
        this.agregarProductos(186,"Cat Chow","Kitten ",8,"22000","Gato","Catchow","Cachorro");
        this.agregarProductos(187,"Pro Plan","Adulto ",1,"4200","Perro","Pro Plan","Adulto");
        this.agregarProductos(188,"Pro Plan","Adulto ",3,"14600","Perro","Pro Plan","Adulto");
        this.agregarProductos(189,"Pro Plan","Adulto ",7.5,"30500","Perro","Pro Plan","Adulto");
        this.agregarProductos(195,"Collar Antipulgas","Cachorro ",1,"4800","Perro","Pipetas","Cachorro");
        this.agregarProductos(196,"Collar Antipulgas","Mini Adulto ",1,"4800","Perro","Pipetas","Adulto");
        this.agregarProductos(197,"Collar Antipulgas","Adulto Grande ",1,"4800","Perro","Pipetas","Adulto");
        this.agregarProductos(198,"Balanced","Mini Senior",3,"10000","Perro","Balanced","Senior");
        this.agregarProductos(199,"Balanced","Mini Senior",7.5,"22800","Perro","Balanced","Senior");
        this.agregarProductos(200,"Balanced","Grande Senior",3,"10000","Perro","Balanced","Senior");
        this.agregarProductos(201,"Balanced","Grande Senior",15,"36600","Perro","Balanced","Senior");
        this.agregarProductos(204,"Kro Line","Correa Ancha","4","6000","Perro","Kro Line","Adulto");
        this.agregarProductos(205,"Kro Line","Pretal Solo","1.5","3200","Perro","Kro Line","Adulto");
        this.agregarProductos(206,"Kro Line","Pretal Solo","2","3400","Perro","Kro Line","Adulto");
        this.agregarProductos(207,"Kro Line","Pretal Solo","2.5","4000","Perro","Kro Line","Adulto");
        this.agregarProductos(208,"Kro Line","Pretal Solo","3","4600","Perro","Kro Line","Adulto");
        this.agregarProductos(209,"Kro Line","Collar Pitbull","4","6000","Perro","Kro Line","Adulto");
        this.agregarProductos(210,"Mom Ami","Bocaditos","1","900","Perro","Bocados","Adulto");
        this.agregarProductos(211,"Pechera Animadas","Pechera","XS","4500","Perro","Accesorios","Adulto");
        this.agregarProductos(212,"Pechera Animadas","Pechera","S","4900","Perro","Accesorios","Adulto");
        this.agregarProductos(213,"Pechera Animadas","Pechera","M","5300","Perro","Accesorios","Adulto");
        this.agregarProductos(214,"Pechera Animadas","Pechera","L","5900","Perro","Accesorios","Adulto");
        this.agregarProductos(215,"Pechera Animadas ","Pechera","XL","6400","Perro","Accesorios","Adulto");
        this.agregarProductos(216,"Cardina","Chica","1","2300","Perro","Accesorios","Adulto");
        this.agregarProductos(217,"Cardina","Mediana","1","2900","Perro","Accesorios","Adulto");
        this.agregarProductos(218,"Cardina","Grande","1","4700","Perro","Accesorios","Adulto");
        this.agregarProductos(219,"Piedras Blancas","Adulto",4,"1400","Gato","Accesorios","Adulto");
        this.agregarProductos(49,"Sieger Katze ","Kitten",1,"5900","Gato","Sieger","Adulto");
        this.agregarProductos(220,"Sieger Katze ","Kitten",7.5,"29700","Gato","Sieger","Adulto");
        this.agregarProductos(221,"Sieger Katze ","Adulto",1,"5900","Gato","Sieger","Adulto");
        this.agregarProductos(222,"Sieger Katze ","Adulto",7.5,"29700","Gato","Sieger","Adulto");
        this.agregarProductos(223,"Sieger Katze ","Urinary",1,"5900","Gato","Sieger","Adulto");
        this.agregarProductos(224,"Sieger Katze ","Urinary",7.5,"29700","Gato","Sieger","Adulto");
        this.agregarProductos(225,"Sieger Katze ","Senior",1,"5900","Gato","Sieger","Adulto");
        this.agregarProductos(226,"Sieger Katze ","Senior",7.5,"29700","Gato","Sieger","Adulto");
        this.agregarProductos(227,"Sieger Katze ","Light",1,"5900","Gato","Sieger","Adulto");
        this.agregarProductos(202,"Sieger Katze ","Stress Control",1,"5900","Gato","Sieger","Adulto");
        this.agregarProductos(203,"Sieger Katze ","Stress Control",7.5,"29700","Gato","Sieger","Adulto");
        this.agregarProductos(228,"Keiko","Adulto",1,"850","Perro","Keiko","Adulto");
        this.agregarProductos(229,"Keiko","Adulto",21,"14000","Perro","Keiko","Adulto");
        this.agregarProductos(230,"Keiko","Cachorro",1,"1000","Perro","Keiko","Adulto");
        this.agregarProductos(231,"Keiko","Cachorro",15,"14000","Perro","Keiko","Adulto");
        this.agregarProductos(232,"Kro Line","Iglu","Mini","6900","Gato","Kro Line","Adulto");
        this.agregarProductos(233,"Kro Line","Iglu ","Chico","7900","Gato","Kro Line","Adulto");
        this.agregarProductos(234,"Kro Line","Iglu ","Mediano","8900","Gato","Kro Line","Adulto");
        this.agregarProductos(235,"Kro Line","Iglu ","Grande","9900","Gato","Kro Line","Adulto");
        this.agregarProductos(236,"Comedero Doble","Adulto","1","5700","Perro","Accesorios");
        this.agregarProductos(237,"Comedero Plastico Chico","Adulto","1","600","Perro","Accesorios");
        this.agregarProductos(238,"Comedero Chico Inoxidable","Adulto","1","3200","Perro","Accesorios");
        this.agregarProductos(239,"Comedero Doble Europe","Adulto","1","1200","Perro","Accesorios");
        this.agregarProductos(240,"Comedero Huella","Adulto","1","900","Perro","Accesorios");
        this.agregarProductos(241,"Comedero Grande Inoxidable","Adulto","1","12000","Perro","Accesorios");
        this.agregarProductos(242,"Comedero Plastico Grande","Adulto","1","1800","Perro","Accesorios");
        
}
    agregarProductos(id,nombre,tamaño,kg,precio,mascota,marca,edad){
        const producto = new Producto (id,nombre,tamaño,kg,precio,mascota,marca,edad);/* este const se vincula con la class Producto */
        this.productos.push(producto); 
    }

    traerProductos(){
        return this.productos;
    }

    /* buscador con espacios incluidos */ 
    BuscadorDeNombre(palabra) {    
        const palabras = palabra.toLowerCase().split(" ");
        return this.productos.filter((producto) => {
            return palabras.every((p) =>
                producto.nombre.toLowerCase().includes(p) ||
                producto.tamaño.toLowerCase().includes(p) ||
                producto.mascota.toLowerCase().includes(p) ||
                producto.precio.toLowerCase().includes(p) ||
                producto.kg.toString().toLowerCase().includes(p)
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

/* buscador de productos */

const Buscador = document.querySelector ("#inputBusqueda");
Buscador.addEventListener("keyup",(event) =>{
    event.preventDefault();
    const palabra = Buscador.value.toLowerCase();
    const productos = bd.BuscadorDeNombre(palabra); /*se llama a la variable ya declarada anteriormente */
    cargarProductos(productos);
})





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
                <th> Tipo </th>
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
            <td>${producto.id} </td>
            <td>${producto.nombre} </td>
            <td>${producto.mascota}</td>
            <td>${producto.tamaño}</td>
            <td>${producto.kg}</td>
            <td>$ ${producto.precio}</td>
        </tr>
        `;
    }
}



// Lista con anotaciones

const open = document.getElementById('anotaciones')
const close = document.querySelector('.close')
const contenido2 = document.querySelector ('.contenido2')


open.addEventListener('click', function(){
    contenido2.classList.add ('show');
} )


close.addEventListener('click', function(){
    contenido2.classList.remove ('show');
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

document.addEventListener("DOMContentLoaded",function() {

    const FechadeHoy = new Date();

    const FechadeDuracion = FechadeHoy.getFullYear();

    const año = 2023

    if( FechadeDuracion === año) {
        const recordatorio = document.getElementById("recordatorio");
        recordatorio.style.display = "block";
    } 
    setTimeout(function(){
        recordatorio.style.display = "none"
    },7000)
})