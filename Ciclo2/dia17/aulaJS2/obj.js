/*

 var / let / const

*/
/*
var nome="Antonio"; // var global
let sobreNome = "Gabriel Satoshi";

if(true){
	console.log("Var nome= "+ nome);
	var nm = nome;
	console.log("Chamando o sobreNome "+sobreNome);
	let sn = "Tokunaga";
	console.log(sobreNome);
}

console.log("Meu nome é "+nm+" "+sobrenome+" "+sn);
console.log("Var nome= "+ nm);
*/

 var Pessoa = {
		nome:  "Antonio",
		rua :  "Estrada São Bento",
		ncasa: "Lote 77B",
		dados: function(){
			document.write(
				"Nome...:"+this.nome+"<br>"+
				"Rua...:"+this.rua+"<br>"+
				"N. casa ...:"+this.ncasa+"<br>")
		}		
 }

 Pessoa.dados();

/*console.log("Nome "+Pessoa.nome+
	" Endereço "+Pessoa.rua+" N."+Pessoa.ncasa);*/
