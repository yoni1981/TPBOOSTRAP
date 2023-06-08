


const eResumen = document.getElementById("bResumen").addEventListener("click", fResumen);
function fResumen(){
    let cantidad = document.getElementById("tCantidad").value;   
    let categoria = document.getElementById("tCategoria").value;
    let totalSinDescuento=parseInt(200*cantidad);
    let totalDescuento;

    const cambioCategoria= document.getElementById("tCategoria").addEventListener("change",fResumen);
    //let cambioTotal= document.getElementById("tTotal").addEventListener("change",fResumen);
    
    if(categoria=="estudiante"){
        totalDescuento=totalSinDescuento * 0.8;

    }else{
            if(categoria=="trainee"){

                totalDescuento=totalSinDescuento * 0.5;
            }
             else{
                    if(categoria=="junior"){

                        totalDescuento=totalSinDescuento * 0.15;

                    }
                 }

         }

let total=totalSinDescuento-totalDescuento;
let Resumen = document.getElementById("tTotal");
Resumen.value = `Total a Pagar: $ ${total}`;
}