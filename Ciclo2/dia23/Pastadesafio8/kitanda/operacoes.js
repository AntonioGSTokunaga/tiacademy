window.onload=function(){

      //produtos
      (()=>{

            let mostrarProdutosCliente=document.querySelector("div#content-produtos > ul#produtos");

            for(let idx in produtos){
                  mostrarProdutosCliente.innerHTML+=`<li class="itemProduto" data-preco=${produtos[idx].prodPreco}>${produtos[idx].prodDesc} - ${produtos[idx].valorRS}</li>`
            }

      })(produtos)


      //carrinho de compras
      const itemProduto=document.querySelectorAll("ul#produtos > li");
      const cestaDoCliente=document.querySelector("ul#cestaDoCliente");
      const mostraTotalCompra=document.querySelector("input#mostraTotalCompra");

      const armazenaItem=[];
      var totalPedido=0;

      itemProduto.forEach((item)=>{
            item.addEventListener("click",()=>{
                  li=document.createElement("li");
                  li.setAttribute("data-preco",`${item.dataset.preco}`);
                


                  if(armazenaItem.indexOf(item.textContent) == -1){
                        armazenaItem.push(item.textContent);
                        cestaDoCliente.appendChild(li).textContent=item.textContent;

                        totalPedido+=Number(item.dataset.preco);
                        mostraTotalCompra.value=totalPedido.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

                  }else{
                        alert(`Este item ${item.textContent} já está na sua cesta`);
                  }

            }) 

      })     


      var cestaCliente=document.querySelectorAll("#cestaDoCliente");

            cestaCliente.forEach((listaDeProdutos)=>{

                  listaDeProdutos.addEventListener("click",(produto)=>{

                        let indexProduto=armazenaItem.indexOf(produto.target.textContent);

                              if (indexProduto > -1){
                                    if(confirm(`Realmente deseja remover esta fruta da cesta?`)){
                                          armazenaItem.splice(indexProduto, 1);
                                          totalPedido-=Number(produto.target.dataset.preco);
                                                if(totalPedido<=0){      
                                                      totalPedido=0;
                                                }
                                          cestaDoCliente.removeChild(produto.target);
                                          mostraTotalCompra.value=totalPedido.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
                                    }
                              }


                        }) 

                  }) 

}// fim 