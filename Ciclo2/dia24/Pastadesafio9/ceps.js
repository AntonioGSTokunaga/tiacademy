window.onload=function(){
	const btnBuscaCep=document.querySelector("#btnBuscaCep");
	const cxCep=document.querySelector(".cxCep");
	const dadosCep=async function(cepUrl){
	try{
		var url=`https://viacep.com.br/ws/${cepUrl}/json/`;
		var consultaCep=await fetch(url);
		var infoCEP=await consultaCep.json()
		for(var campo in infoCEP){
			if(document.querySelector("#"+campo)){
			document.querySelector("#"+campo).value=infoCEP[campo];
			console.log(document.querySelector("#rua").value);
				if((document.querySelector("#rua").value)==""){
					document.querySelector("#rua").value="Rua não localizada"
				}
				if((document.querySelector("#bairro").value)==""){
					document.querySelector("#bairro").value="Bairro não localizado"
				}
				if((document.querySelector("#municipio").value)==""){
					document.querySelector("#municipio").value="Cidade não localizada"
				}
				if((document.querySelector("#uf").value)==""){
					document.querySelector("#uf").value="UF não localizada"
				}
			}
		}
	}catch(erro){
		alert(`Erro! CEP inválido!`)
	 }
	}
	btnBuscaCep.addEventListener("click",()=>{
		let cep=cxCep.value;
		dadosCep(cep);
	})
}