window.onload = function(){
	const n1 = document.querySelector("#v1");
	const n2 = document.querySelector("#v2");
	const n3 = document.querySelector("#v3");
	const btnRes = document.querySelector("#btn");
		btnRes.addEventListener('click',()=>{
			var num = n1.value;
			var num2 = n2.value;
			var adc =  n3.value;
			var rslt = Number(num)+Number(num2); 
			console.log(adc);
			console.log(rslt);
			if(adc==rslt){
				alert ("A resposta está exata!")
			} else { 
				alert ("A resposta está errada!")
			}
		});
	} 