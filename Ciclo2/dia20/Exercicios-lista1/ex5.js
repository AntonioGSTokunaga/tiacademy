salario = parseFloat(prompt("Insira o salário:"));

bonif = 0

if (salario <= 500){
	bonif = salario * 0.05;
	console.log("Debug - bonif: ", bonif);
} else if (salario >= 500.01 && salario <= 1200){
	bonif = salario * 0.12;
}
console.log("Debug - bonif: ", bonif);

aux = 0;

if (salario <= 600){
	aux = 150;
} else {
	aux = 600;
}
console.log("Debug - aux: ", aux);

salario = salario + bonif + aux;

console.log("Salário final: R$ ", salario.toFixed(2));