window.onload = function(){

		//alert("Olá mundo")


	const btnBuscaCep = document.querySelector("#btnBuscaCep");
	const cxCep = document.querySelector(".cxCep")

	const dadosCep = async function(cepUrl){

		var url = `https://viacep.com.br/ws/${cep}/json/`;
		var consultaCep = await fetch(url);
		var dadosCep    = await consultaCep.json()	;
		//logradouro
		//bairro

		//console.log(consultaCep);
		//console.log(dadosCep);
		for( var campos in dadosCep ){
			console.log(campos);
			if(document.querySelector("#"+campos)){
			document.querySelector("#"+campos).value = dadosCep[campos];
			}
		}

	}


	btnBuscaCep.addEventListener('click',()=>{

		let cep = cxCep.value;
		dadosCep(cep);

		//console.log(url);
		//alert(cxCep.value);
	})


}