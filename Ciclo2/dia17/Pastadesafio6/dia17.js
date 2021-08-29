var aula ="Desafio dia 17";

alert(aula);//enviar caixa de alerta
var nome = prompt ("Digite seu nome");
var n= prompt (nome+ ", " +"digite o primeiro número:");
var n2= prompt (nome+ ", " +"digite o segundo número:");
//(4~6: Entrada de dados na caixa)
var nInt;
if(typeof(n)=="string"){
	alert("Uma string foi enviada.");
	alert("A string será convertida em um número inteiro.");
	nInt = parseInt(n);
}
var n2Int;
if(typeof(n2)=="string"){
	alert("Outra string foi enviada.");
	alert("Esta string também será convertida em um número inteiro.");
	n2Int = parseInt(n2);
}
var valor1=n;
var valor2=n2;
var v=(valor1==valor2);
console.log(v);
var a = parseInt(valor1) + parseInt(valor2);
console.log(a);
var s = (valor1-valor2);
console.log(s);
var r = (valor1%valor2);
console.log(r);
var p = (valor1*valor1);
console.log(p);
var p2 = (valor2*valor2);
console.log(p2);

document.write( "Seja bem vindo "+ nome +"<br>");
document.write( "você digitou o numero:"+ "("+ n +")"+"<br>");
document.write( "O retorno da comparação booleana é: "+ v +"<br>");
document.write( "A soma dos valores é: "+ a +"<br>");
document.write( "A subtracão dos valores é: "+ s +"<br>");
document.write( "A resto da divisão é: "+ r+"<br>" );
document.write( "O quadrado do primeiro número é: "+ p +"<br>");
document.write( "O quadrado do segundo número é: "+ p2 +"<br>");
//(35~42: Imprimir tela)

var frutas = prompt( nome + ", escolha sua fruta favorita entre laranja, pera, uva e manga ");
switch(frutas){
    case "laranja":
        document.write("Sua fruta favorita é: " + frutas);
    break;
    case "pera":
        document.write("Sua fruta favorita é: " + frutas);
    break;
    case "uva":
        document.write("Sua fruta favorita é: " + frutas);
    break;
    case "manga":
        document.write("Sua fruta favorita é: " + frutas);
    break;
    default:
    	alert("Opção inexistente...");
        document.write( nome  + ", não temos essa opção "+ frutas );
    break;
}