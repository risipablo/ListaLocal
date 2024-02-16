

class Datos {
    constructor() {
        this.productos = [];
        this.agregarProductos(1,"Excellent","Adulto","suelto","6500","Gato","Excellent","Adulto");
        this.agregarProductos(170,"Excellent","Adulto",1,"8300","Gato","Excellent","Adulto");
        this.agregarProductos(171,"Excellent","Adulto",3,"22700","Gato","Excellent","Adulto");
        this.agregarProductos(2,"Excellent","Adulto",7.5,"48000","Gato","Excellent","Adulto");
        this.agregarProductos(166,"Excellent","Adulto",15,"93000","Gato","Excellent","Adulto");
        this.agregarProductos(3,"Excellent","Kitten","suelto","7400","Gato","Excellent","Cachorro");
        this.agregarProductos(172,"Excellent","Kitten",1,"9200","Gato","Excellent","Cachorro");
        this.agregarProductos(4,"Excellent","Kitten",7.5,"53000","Gato","Excellent","Cachorro");
        this.agregarProductos(5,"Excellent","Sterilized",1,"9600","Gato","Excellent","Adulto");
        this.agregarProductos(6,"Excellent","Sterilized",7.5,"55000","Gato","Excellent","Adulto");
        this.agregarProductos(7,"Excellent","Urinary","suelto","7500","Gato","Excellent","Adulto");
        this.agregarProductos(173,"Excellent","Urinary",1,"9600","Gato","Excellent","Adulto");
        this.agregarProductos(8,"Excellent","Urinary",7.5,"55000","Gato","Excellent","Adulto");
        this.agregarProductos(9,"Excellent","Puppy Small","suelto","4200","Perro","Excellent","Cachorro");
        this.agregarProductos(175,"Excellent","Puppy Small",3,"15800","Perro","Excellent","Cachorro");
        this.agregarProductos(10,"Excellent","Puppy Small",15,"61000","Perro","Excellent","Cachorro");
        this.agregarProductos(11,"Excellent","Puppy Grande","suelto","4200","Perro","Excellent","Cachorro");
        this.agregarProductos(176,"Excellent","Puppy Grande",3,"15000","Perro","Excellent","Cachorro");
        this.agregarProductos(12,"Excellent","Puppy Grande",15,"59000","Perro","Excellent","Cachorro");
        this.agregarProductos(13,"Excellent","Mini Adulto","suelto","3800","Perro","Excellent","Adulto");
        this.agregarProductos(177,"Excellent","Mini Adulto",3,"14500","Perro","Excellent","Adulto");
        this.agregarProductos(14,"Excellent","Mini Adulto",15,"55000","Perro","Excellent","Adulto");
        this.agregarProductos(15,"Excellent","Adulto Grande","suelto","3600","Perro","Excellent","Adulto");
        this.agregarProductos(178,"Excellent","Adulto Grande",3,"13800","Perro","Excellent","Adulto");
        this.agregarProductos(16,"Excellent","Adulto Grande",15,"53000","Perro","Excellent","Adulto");
        this.agregarProductos(179,"Excellent","Adulto Senior","suelto","4200","Perro","Excellent","Senior");
        this.agregarProductos(180,"Excellent","Adulto Senior",15,"59000","Perro","Excellent","Senior");
        this.agregarProductos(17,"Agility","Adulto Grande",20,"40000","Perro","Agility","Adulto");
        this.agregarProductos(18,"Biopet","Adulto",1,"1800","Perro","Biopet","Adulto");
        this.agregarProductos(19,"Biopet","Adulto",20,"25000","Perro","Biopet","Adulto");
        this.agregarProductos(164,"Biopet","Mini Small",1,"1800","Perro","Biopet","Mini Adulto");
        this.agregarProductos(165,"Biopet","Mini Small",15,"21000","Perro","Biopet","Mini Adulto");
        this.agregarProductos(20,"Old Prince","Mini Adulto",1,"3200","Perro","Old Prince","Adulto");
        this.agregarProductos(229,"Old Prince","Mini Adulto",7.5,"24000","Perro","Old Prince","Adulto");
        this.agregarProductos(21,"Old Prince","Mini Adulto",15,"44000","Perro","Old Prince","Adulto");
        this.agregarProductos(22,"Old Prince","Derma Mini Adulto / Cachorro",1,"4500","Perro","Old Prince","Adulto");
        this.agregarProductos(230,"Old Prince","Derma Mini Adulto/ Cachorro",7.5,"33000","Perro","Old Prince","Adulto");
        this.agregarProductos(23,"Old Prince","Derma Mini Adulto",15,"64000","Perro","Old Prince","Adulto");
        this.agregarProductos(24,"Old Prince ","Cachorro Small",1,"3700","Perro","Old Prince","Cachorro");
        this.agregarProductos(25,"Old Prince","Cachorro Small",7.5,"24000","Perro","Old Prince","Cachorro");
        this.agregarProductos(26,"Old Prince","Derma Adulto",1,"4200","Perro","Old Prince","Adulto");
        this.agregarProductos(231,"Old Prince","Derma Adulto",7.5,"30000","Perro","Old Prince","Adulto");
        this.agregarProductos(27,"Old Prince","Derma Adulto",15,"59000","Perro","Old Prince","Adulto");
        this.agregarProductos(28,"Balanced","Derma Adulto",1,"4200","Perro","Balanced","Adulto");
        this.agregarProductos(29,"Balanced","Derma Adulto",15,"60000","Perro","Balanced","Adulto");
        this.agregarProductos(30,"Sieger","Mini Puppy","suelto","4800","Perro","Sieger","Cachorro");
        this.agregarProductos(31,"Sieger","Mini Puppy",3,"16500","Perro","Sieger","Cachorro");
        this.agregarProductos(32,"Sieger","Mini Puppy",12,"53800","Perro","Sieger","Cachorro");
        this.agregarProductos(33,"Sieger","Cachorro","suelto","4500","Perro","Sieger","Cachorro");
        this.agregarProductos(34,"Sieger ","Cachorro",3,"15700","Perro","Sieger","Cachorro");
        this.agregarProductos(35,"Sieger","Cachorro",15,"60000","Perro","Sieger","Cachorro");
        this.agregarProductos(36,"Sieger","Adulto Grande","suelto","4000","Perro","Sieger","Adulto");
        this.agregarProductos(37,"Sieger","Adulto Grande",3,"15000","Perro","Sieger","Adulto");
        this.agregarProductos(38,"Sieger","Adulto Grande",15,"55000","Perro","Sieger","Adulto");
        this.agregarProductos(39,"Sieger","Mini Adulto","suelto","4300","Perro","Sieger","Adulto");
        this.agregarProductos(40,"Sieger ","Mini Adulto",3,"15000","Perro","Sieger","Adulto");
        this.agregarProductos(41,"Sieger","Mini Adulto",12,"39000","Perro","Sieger","Adulto");
        this.agregarProductos(42,"Sieger","Senior Mini",3,"15000","Perro","Sieger","Senior");
        this.agregarProductos(43,"Sieger ","Senior Grande",3,"15000","Perro","Sieger","Senior");
        this.agregarProductos(44,"Sieger","Reduce",3,"15000","Perro","Sieger","Adulto");
        this.agregarProductos(45,"Sieger","Derma",3,"17500","Perro","Sieger","Adulto");
        this.agregarProductos(46,"Sieger","Derma",12,"54800","Perro","Sieger","Adulto");
        this.agregarProductos(47,"Sieger","Derma","suelto","4900","Perro","Sieger","Adulto");
        this.agregarProductos(48,"Sieger","Criadores",20,"62000","Perro","Sieger","Adulto");
        this.agregarProductos(50,"Cat Chow","Adulto ",1,"3400","Gato","Catchow","Adulto");
        this.agregarProductos(185,"Cat Chow","Adulto ",8,"34000","Gato","Catchow","Adulto");
        this.agregarProductos(51,"Cat Chow","Adulto ",15,"60000","Gato","Catchow","Adulto");
        this.agregarProductos(52,"Cat Chow","Kitten ",1,"4500","Gato","Catchow","Cachorro");
        this.agregarProductos(186,"Cat Chow","Kitten ",8,"37000","Gato","Catchow","Cachorro");
        this.agregarProductos(53,"Cat Chow","Kitten ",15,"65000","Gato","Catchow","Cachorro");
        this.agregarProductos(54,"Gati","Adulto ",1,"2500","Gato","Gati","Adulto");
        this.agregarProductos(55,"Gati","Adulto ",15,"33000","Gato","Gati","Adulto");
        this.agregarProductos(56,"Infinity","Mini Adulto",1,"2600","Perro","Infinity","Adulto");
        this.agregarProductos(57,"Infinity","Mini Adulto ",15,"33000","Perro","Infinity","Adulto");
        this.agregarProductos(58,"Nutricare","Mini Adulto",1,"2000","Perro","Nutricare","Adulto");
        this.agregarProductos(59,"Nutricare","Mini Adulto ",20,"33000","Perro","Nutricare","Adulto");
        this.agregarProductos(60,"Nutricare","Adulto Grande",1,"2000","Perro","Nutricare","Adulto");
        this.agregarProductos(61,"Nutricare","Adulto Grande ",20,"33000","Perro","Nutricare","Adulto");
        this.agregarProductos(62,"Nutricare","Cachorro ",1,"1600","Perro","Nutricare","Cachorro");
        this.agregarProductos(63,"Nutricare","Cachorro",15,"21600","Perro","Nutricare","Cachorro");
        this.agregarProductos(190,"Piedras Blancas","Adulto","2","1400","Gato","Piedras","Adulto")
        this.agregarProductos(191,"Nutricare","Adulto Grande ",7.5,"12000","Perro","Nutricare","Adulto");
        this.agregarProductos(192,"Nutricare","Mini Adulto ",7.5,"12000","Perro","Nutricare","Adulto");
        this.agregarProductos(193,"Nutricare","Adulto ",1,"2500","Gato","Nutricare","Adulto");
        this.agregarProductos(194,"Nutricare","Adulto ",7.5,"22000","Gato","Nutricare","Adulto");
        this.agregarProductos(64,"Wishka","Adulto ",1,"3400","Gato","Wishka","Adulto");
        this.agregarProductos(65,"Wishka","Adulto ",10,"30000","Gato","Wishka","Adulto");
        this.agregarProductos(66,"Bocato","Adulto",1,"1800","Gato","Bocato","Adulto");
        this.agregarProductos(67,"Bocato","Adulto ",10,"14000","Gato","Bocato","Adulto");
        this.agregarProductos(232,"Bocato","Adulto",1,"1500","Perro","Bocato","Adulto");
        this.agregarProductos(233,"Bocato","Adulto ",20,"20000","Perro","Bocato","Adulto");
        this.agregarProductos(68,"Optimun","Adulto",1,"5000","Gato","Optimun","Adulto");
        this.agregarProductos(69,"Optimun","Adulto ",10,"48000","Gato","Optimun","Adulto");
        this.agregarProductos(70,"Optimun","Adulto",3,"13400","Gato","Optimun","Adulto");
        this.agregarProductos(71,"Optimun","Mini Adulto",1,"2400","Perro","Optimun","Adulto");
        this.agregarProductos(72,"Optimun","Mini Adulto ",15,"30000","Perro","Optimun","Adulto");
        this.agregarProductos(73,"Pedigree","Mini Adulto",1,"2500","Perro","Pedigree","Adulto");
        this.agregarProductos(74,"Pedigree","Mini Adulto",15,"32000","Perro","Pedigree","Adulto");
        this.agregarProductos(75,"Dog Chow","Mini Adulto",1,"3200","Perro","Dog Chow","Adulto");
        this.agregarProductos(76,"Dog Chow","Mini Adulto",21,"60000","Perro","Dog Chow","Adulto");
        this.agregarProductos(77,"Dog Chow","Adulto Light",1,"3200","Perro","Dog Chow","Adulto");
        this.agregarProductos(78,"Dog Chow","Adulto Light",21,"60000","Perro","Dog Chow","Adulto");
        this.agregarProductos(79,"Agility","Adulto Grande",1,"2500","Perro", "Agility","Adulto");
        this.agregarProductos(259,"Agility","Adulto Grande",15,"31000","Perro", "Agility","Adulto");
        this.agregarProductos(80,"Agility","Mini Adulto",1,"2900","Perro", "Agility","Adulto");
        this.agregarProductos(81,"Agility","Mini Adulto",15,"37000","Perro", "Agility","Adulto");
        this.agregarProductos(82,"Agility","Adulto Derma",1,"3200","Perro", "Agility","Adulto");
        this.agregarProductos(83,"Agility","Adulto Derma",15,"40000","Perro", "Agility","Adulto");
        this.agregarProductos(84,"Agility","Cachorro",1,"2900","Perro", "Agility","Adulto");
        this.agregarProductos(85,"Agility","Cahorro",20,"48000","Perro", "Agility","Adulto");
        this.agregarProductos(86,"Agility","Adulto",1,"4200","Gato", "Agility","Adulto");
        this.agregarProductos(87,"Agility","Adulto",1.5,"8200","Gato", "Agility","Adulto");
        this.agregarProductos(88,"Agility","Adulto",10,"39000","Gato", "Agility","Adulto");
        this.agregarProductos(89,"Agility","Kitten",1,"4700","Gato", "Agility","Cachorro");
        this.agregarProductos(90,"Agility","Kitten",1.5,"8800","Gato", "Agility","Cachorro");
        this.agregarProductos(91,"Agility","Kitten",10,"43000","Gato", "Agility","Cachoro");
        this.agregarProductos(92,"Agility","Urinary",1,"4700","Gato", "Agility","Adulto");
        this.agregarProductos(93,"Agility","Urinary",1.5,"8800","Gato", "Agility","Adulto");
        this.agregarProductos(94,"Agility","Urinary",10,"43000","Gato", "Agility","Adulto");
        this.agregarProductos(95,"Agility","Light",1,"4700","Gato", "Agility","Adulto");
        this.agregarProductos(96,"Agility","Light",1.5,"8800","Gato", "Agility","Adulto");
        this.agregarProductos(97,"Agility","Light",10,"43000","Gato", "Agility","Adulto");
        this.agregarProductos(98,"Agility","Lata",1,"2500","Gato", "Agility","Adulto");
        this.agregarProductos(99,"Royal Canin","Mini Puppy","suelto","6900","Perro","Royal Canin","Cachorro");
        this.agregarProductos(100,"Royal Canin","Mini Puppy",1,"9700","Perro","Royal Canin","Cachorro");
        this.agregarProductos(101,"Royal Canin","Mini Puppy",3,"26000","Perro","Royal Canin","Cachorro");
        this.agregarProductos(102,"Royal Canin","Mini Puppy",7.5,"50000","Perro","Royal Canin","Cachorro");
        this.agregarProductos(232,"Royal Canin","Mini Puppy",15,"88000","Perro","Royal Canin","Cachorro");
        this.agregarProductos(103,"Royal Canin","Mini Adulto","suelto","6900","Perro","Royal Canin","Adulto");
        this.agregarProductos(104,"Royal Canin","Mini Adulto",3,"24000","Perro","Royal Canin","Aduto");
        this.agregarProductos(105,"Royal Canin","Mini Adulto",7.5,"48000","Perro","Royal Canin","Adulto");
        this.agregarProductos(106,"Royal Canin","Mini Adulto",1,"8800","Perro","Royal Canin","Adulto");
        this.agregarProductos(107,"Royal Canin","X-small Adulto",1,"9400","Perro","Royal Canin","Adulto");
        this.agregarProductos(108,"Royal Canin","X-small Junior",1,"10500","Perro","Royal Canin","Cachorro");
        this.agregarProductos(109,"Royal Canin","Pocuh Mini Adulto",1,"1000","Perro","Royal Canin","Adulto");
        this.agregarProductos(110,"Royal Canin","Kitten",1.5,"21800","Gato","Royal Canin","Adulto");
        this.agregarProductos(111,"Royal Canin","Urinary",1.5,"22300","Gato","Royal Canin","Adulto");
        this.agregarProductos(112,"Royal Canin","Pouch Urinary",1,"-","Gato","Royal Canin","Adulto");
        this.agregarProductos(113,"Royal Canin","Weight Control",1,"21600","Gato","Royal Canin","Adulto");
        this.agregarProductos(114,"Royal Canin","Urinary S/O",1,"22600","Gato","Royal Canin","Adulto");
        this.agregarProductos(115,"Eukanuba","Mini Puppy",1,"5800","Perro","Eukanuba","Cachorro");
        this.agregarProductos(116,"Eukanuba","Mini Puppy",3,"15000","Perro","Eukanuba","Cachorro");
        this.agregarProductos(117,"Eukanuba","Mini Puppy",15,"54000","Perro","Eukanuba","Cachorro");
        this.agregarProductos(118,"Eukanuba","Md/Lg Puppy",1,"5700","Perro","Eukanuba","Cachorro");
        this.agregarProductos(119,"Eukanuba","Md/Lg Puppy",15,"51000","Perro","Eukanuba","Cachorro");
        this.agregarProductos(120,"Eukanuba","Md/Lg Puppy",3,"15000","Perro","Eukanuba","Cachorro");
        this.agregarProductos(121,"Eukanuba","Mini Adulto",1,"5600","Perro","Eukanuba","Adulto");
        this.agregarProductos(122,"Eukanuba","Mini Adulto",3,"14800","Perro","Eukanuba","Adulto");
        this.agregarProductos(123,"Eukanuba","Mini Adulto",15,"51000","Perro","Eukanuba","Adulto");
        this.agregarProductos(124,"Eukanuba","Adulto Md/Lg",3,"14600","Perro","Eukanuba","Adulto");
        this.agregarProductos(125,"Eukanuba","Adulto Mg/lg",15,"50000","Perro","Eukanuba","Adulto");
        this.agregarProductos(126,"Eukanuba","Adulto Senior",3,"15800","Perro","Eukanuba","Senior");
        this.agregarProductos(127,"Eukanuba","Weight Control",3,"16000","Perro","Eukanuba","Adulto");
        this.agregarProductos(128,"Felix","Pouch",1,"1000","Gato","Catchow","Adulto");
        this.agregarProductos(129,"Kro Line","Pretal Completo",1.5,"8000","Perro","Kro Line","Adulto");
        this.agregarProductos(130,"Kro Line","Pretal Completo",2,"8500","Perro","Kro Line","Adulto");
        this.agregarProductos(131,"Kro Line","Pretal Completo",2.5,"10500","Perro","Kro Line","Adulto");
        this.agregarProductos(132,"Kro Line","Pretal Completo",3,"12000","Perro","Kro Line","Adulto");
        this.agregarProductos(133,"Kro Line","Correa Sola",1.5,"4000","Perro","Kro Line","Adulto");
        this.agregarProductos(134,"Kro Line","Correa Sola",2,"4000","Perro","Kro Line","Adulto");
        this.agregarProductos(135,"Kro Line","Correa Sola",2.5,"4800","Perro","Kro Line","Adulto");
        this.agregarProductos(136,"Kro Line","Correa Sola",3,"4800","Perro","Kro Line","Adulto");
        this.agregarProductos(137,"Hueso","Corbata","6 cm" ,"600","Perro","Hueso","Adulto");
        this.agregarProductos(138,"Hueso","Corbata","13 cm","1200","Perro","Hueso","Adulto");
        this.agregarProductos(139,"Hueso","Hueso Grande","34 cm","7000","Perro","Hueso","Adulto");
        this.agregarProductos(140,"Hueso","Palito Grising","20 cm","500","Perro","Hueso","Adulto");
        this.agregarProductos(141,"Hueso","Orejas","","300","Perro","Hueso","Adulto");
        this.agregarProductos(142,"Pedigree","Lata",1,"1500","Perro","Pedigree","Adulto","Perro","Pedigree","Adulto");
        this.agregarProductos(143,"Pedigree","Pouch",1,"450","Perro","Pedigree","Adulto","Perro","Pedigree","Adulto");
        this.agregarProductos(144,"Osspret Pipetas","Adulto","2-10","4200","Perro","Pipetas","Adulto");
        this.agregarProductos(145,"Osspret Pipetas","Adulto","11-20","4200","Perro","Pipetas","Adulto");
        this.agregarProductos(146,"Osspret Pipetas","Adulto","21-40","4200","Perro","Pipetas","Adulto");
        this.agregarProductos(147,"Osspret Pipetas","Adulto","+ 40","4200","Perro","Pipetas","Adulto");
        this.agregarProductos(148,"Osspret Pipetas","Adulto","+ 4","4200","Gato","Pipetas","Adulto");
        this.agregarProductos(149,"Osspret Shampoo","Pelo Blanco","1","4200","Perro","Shampoo","Adulto");
        this.agregarProductos(150,"Osspret Shampoo","Pelo Negro","1","4200","Perro","Shampoo","Adulto");
        this.agregarProductos(151,"Osspret Shampoo","Dermatitis","1","4200","Perro","Shampoo","Adulto");
        this.agregarProductos(152,"Osspret Shampoo","Algas","1","4200","Perro","Shampoo","Adulto");
        this.agregarProductos(153,"Osspret Shampoo","Duo","1","4200","Perro","Shampoo","Adulto");
        this.agregarProductos(154,"Osspret Shampoo","Extra Brillo","1","4200","Perro","Shampoo","Adulto");
        this.agregarProductos(155,"Agility","Lata Gato",1,"1500","Gato", "Agility","Adulto");
        this.agregarProductos(156,"Kro Line","Pechera Pitbul","5 cm","17000","Perro","Kro Line","Adulto");
        this.agregarProductos(157,"Stone Cat","Adulto","4","4500","Gato","Piedras","Adulto");
        this.agregarProductos(158,"Pellcats","Adulto","4","2300","Gato","Piedras","Adulto");
        this.agregarProductos(159,"Bandejas Sanitarias medianas","Adulto","1","2000","Gato","Accesorios","Adulto");
        this.agregarProductos(160,"Golocan","Bocaditos","1","1150","Perro","Bocados","Adulto");
        this.agregarProductos(161,"Golocan","Galletas","1","1000","Perro","Bocados","Adulto");
        this.agregarProductos(162,"Arroz","Adulto",1,"1700","Perro","Arroz","Adulto");
        this.agregarProductos(163,"Arroz","Adulto",15,"20000","Perro","Arroz","Adulto");
        this.agregarProductos(167,"Dog Chow","Adulto Light",8,"24000","Perro","Dog Chow","Adulto");
        this.agregarProductos(168,"Dog Chow","Senior",8,"24000","Perro","Dog Chow","Senior");
        this.agregarProductos(169,"Dog Chow","Senior",1,"3300","Perro","Dog Chow","Senior");
        this.agregarProductos(181,"Maxxium","Adulto",20,"51000","Perro","Nutricare","Adulto");
        this.agregarProductos(182,"Smarty","Adulto","1","0","Perro","Smarty","Adulto");
        this.agregarProductos(183,"Smarty","Adulto","15","0","Perro","Smarty","Adulto");
        this.agregarProductos(184,"Balanced","Derma Adulto",3,"16500","Perro","Balanced","Adulto");
        this.agregarProductos(187,"Pro Plan","Adulto ",1,"7000","Perro","Pro Plan","Adulto");
        this.agregarProductos(188,"Pro Plan","Adulto ",3,"24800","Perro","Pro Plan","Adulto");
        this.agregarProductos(189,"Pro Plan","Adulto ",7.5,"51000","Perro","Pro Plan","Adulto");
        this.agregarProductos(254,"Pro Plan","Active Mind R.Pequeña ",3,"27000","Perro","Pro Plan","Adulto");
        this.agregarProductos(255,"Pro Plan","Active Mind R.Mediana y Grande ",3,"27000","Perro","Pro Plan","Adulto");
        this.agregarProductos(195,"Collar Antipulgas","Cachorro ",1,"4800","Perro","Pipetas","Cachorro");
        this.agregarProductos(196,"Collar Antipulgas","Mini Adulto ",1,"4800","Perro","Pipetas","Adulto");
        this.agregarProductos(197,"Collar Antipulgas","Adulto Grande ",1,"4800","Perro","Pipetas","Adulto");
        this.agregarProductos(198,"Balanced","Mini Senior",3,"14000","Perro","Balanced","Senior");
        this.agregarProductos(199,"Balanced","Mini Senior",7.5,"33000","Perro","Balanced","Senior");
        this.agregarProductos(258,"Balanced","Mini Adulto","suelto","3400","Perro","Balanced","Adulto")
        this.agregarProductos(200,"Balanced","Mini Adulto",7.5,"28000","Perro","Balanced","Adulto");
        this.agregarProductos(201,"Balanced","Mini Adulto",15,"48000","Perro","Balanced","Adulto");
        this.agregarProductos(204,"Kro Line","Correa Ancha","4","9000","Perro","Kro Line","Adulto");
        this.agregarProductos(205,"Kro Line","Pretal Solo","1.5","4800","Perro","Kro Line","Adulto");
        this.agregarProductos(206,"Kro Line","Pretal Solo","2","5000","Perro","Kro Line","Adulto");
        this.agregarProductos(207,"Kro Line","Pretal Solo","2.5","5700","Perro","Kro Line","Adulto");
        this.agregarProductos(208,"Kro Line","Pretal Solo","3","6700","Perro","Kro Line","Adulto");
        this.agregarProductos(209,"Kro Line","Collar Pitbull","4","7200","Perro","Kro Line","Adulto");
        this.agregarProductos(210,"Mom Ami","Bocaditos","1","900","Perro","Bocados","Adulto");
        this.agregarProductos(211,"Pechera Animadas","Pechera","XS","4500","Perro","Accesorios","Adulto");
        this.agregarProductos(212,"Pechera Animadas","Pechera","S","4900","Perro","Accesorios","Adulto");
        this.agregarProductos(213,"Pechera Animadas","Pechera","M","5300","Perro","Accesorios","Adulto");
        this.agregarProductos(214,"Pechera Animadas","Pechera","L","5900","Perro","Accesorios","Adulto");
        this.agregarProductos(215,"Pechera Animadas ","Pechera","XL","6400","Perro","Accesorios","Adulto");
        this.agregarProductos(216,"Cardina","Chica","1","2300","Perro","Accesorios","Adulto");
        this.agregarProductos(217,"Cardina","Mediana","1","2900","Perro","Accesorios","Adulto");
        this.agregarProductos(218,"Cardina","Grande","1","4700","Perro","Accesorios","Adulto");
        this.agregarProductos(219,"Piedras Blancas","Adulto",4,"2200","Gato","Accesorios","Adulto");
        this.agregarProductos(49,"Sieger Katze ","Kitten",1,"9300","Gato","Sieger","Adulto");
        this.agregarProductos(220,"Sieger Katze ","Kitten",7.5,"45000","Gato","Sieger","Adulto");
        this.agregarProductos(221,"Sieger Katze ","Adulto",1,"9300","Gato","Sieger","Adulto");
        this.agregarProductos(222,"Sieger Katze ","Adulto",7.5,"45000","Gato","Sieger","Adulto");
        this.agregarProductos(223,"Sieger Katze ","Urinary",1,"9300","Gato","Sieger","Adulto");
        this.agregarProductos(224,"Sieger Katze ","Urinary",7.5,"45000","Gato","Sieger","Adulto");
        this.agregarProductos(225,"Sieger Katze ","Senior",1,"9300","Gato","Sieger","Adulto");
        this.agregarProductos(226,"Sieger Katze ","Senior",7.5,"45000","Gato","Sieger","Adulto");
        this.agregarProductos(227,"Sieger Katze ","Light",1,"9300","Gato","Sieger","Adulto");
        this.agregarProductos(202,"Sieger Katze ","Stress Control",1,"9300","Gato","Sieger","Adulto");
        this.agregarProductos(203,"Sieger Katze ","Stress Control",7.5,"45000","Gato","Sieger","Adulto");
        this.agregarProductos(228,"Keiko","Adulto",1,"0","Perro","Keiko","Adulto");
        this.agregarProductos(229,"Keiko","Adulto",21,"0","Perro","Keiko","Adulto");
        this.agregarProductos(230,"Keiko","Cachorro",1,"0","Perro","Keiko","Adulto");
        this.agregarProductos(231,"Keiko","Cachorro",15,"0","Perro","Keiko","Adulto");
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
        this.agregarProductos(243,"Colchoneta Desenfundable Chica","Adulto","60x70","9100","Perro","Accesorios");
        this.agregarProductos(244,"Colchoneta Desenfundable Mediana","Adulto","70x80","11100","Perro","Accesorios");
        this.agregarProductos(245,"Colchoneta Desenfundable Grande","Adulto","80x90","14000","Perro","Accesorios");
        this.agregarProductos(246,"Colchoneta Desenfundable Extra Grande","Adulto","90x100","18000","Perro","Accesorios");
        this.agregarProductos(247,"Colchonetas Anti Desgaro Medianas","Adulto","1","8500","Perro","Accesorios");
        this.agregarProductos(248,"Nidos","Adulto","1","114000","Gato","Accesorios",);
        this.agregarProductos(249,"Moises de Jean","Adulto","1","16000","Gato","Accesorios");
        this.agregarProductos(251,"Bolson Piedras Sanitarias","Adulto","20","6000","Gato","Accesorios");
        this.agregarProductos(252,"Suertudo","Adulto","1","1200","Perro","Suertudo","Adulto");
        this.agregarProductos(253,"Suertudo","Adulto","20","19000","Perro","Suertudo","Adulto");
        this.agregarProductos(254,"Biopet ","Derma Adulto","1","1900","Perro","Biopet","Adulto");
        this.agregarProductos(255,"Biopet ","Derma Adulto","20","26000","Perro","Biopet","Adulto");
        this.agregarProductos(256,"Paños Pets", "Adulto","1","850", "Perro", "-","Accesorios" );
        this.agregarProductos(257,"Paños Pets", "Adulto","10","8000", "Perro", "-","Accesorios" )
        this.agregarProductos(258,"Pedigree","Rodeos",1,"750","Perro","Pedigree","Adulto","Perro","Pedigree","Adulto");
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
                <th class="id"> ID </th>
                <th> Marca </th>
                <th class="id" > Tipo </th>
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
            <td class="id" >${producto.id} </td>
            <td>${producto.nombre} </td>
            <td class="id">${producto.mascota}</td>
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

// Recordatorio 

document.addEventListener("DOMContentLoaded",function() {

    const FechadeHoy = new Date();

    const FechadeDuracion = FechadeHoy.getFullYear();

    const año = 2024

    if( FechadeDuracion === año) {
        const recordatorio = document.getElementById("recordatorio");
        recordatorio.style.display = "block";
    } 
    setTimeout(function(){
        recordatorio.style.display = "none"
    },7000)
})


// Descuento 

// document.addEventListener("DOMContentLoaded", function(){

//     const hoy = new Date ();
//     const promo = hoy.getDay();

//     if (promo === 25){
//         const promocion = document.getElementById("descuento");
//         promocion.style.display = "block"
//         }
//     }
// )

// Menu
const toggleMenu = () => document.body.classList.toggle("open");