


const section = document.querySelector('section');
const carrito = document.getElementById('carrito');
var contador =0;
const numero = document.createElement('p');
numero.textContent = contador + ' items'
carrito.appendChild(numero);
const informe = document.getElementById('tablaOrders');
var total =0;
var itemNumero=1;
var listado =[]

const requestURL = 'https://gist.githubusercontent.com/josejbocanegra/9a28c356416badb8f9173daf36d1460b/raw/5ea84b9d43ff494fcbf5c5186544a18b42812f09/restaurant.json';
//const requestURL = '../json/restaurant.json'
const request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    const restaurantes = request.response;
  
    
    crearObjetos(restaurantes);

}

   

function crearObjetos(jsonObj) {


    for (var i = 0; i < jsonObj.length; i++) {


        const row = document.createElement('div');
        row.className += 'row categoria';
        const myH1 = document.createElement('h2');
        myH1.textContent = jsonObj[i].name;
        row.appendChild(myH1);
        row.id += jsonObj[i].name;
        const hr = document.createElement('hr')
        row.appendChild(hr);
        row.style.display = 'none';
        if(i==0){
            row.style.display ='flex';
        }

        section.appendChild(row);
        
        var productos = jsonObj[i].products;
        
        for (var j = 0; j < productos.length; j++) {


            
            const col = document.createElement('div');
            col.className += 'col-3 columnas';
            
            const interior = document.createElement('div');
            row.appendChild(col);
            interior.className+='border p-3 interior'
            
            col.appendChild(interior);
            const name = document.createElement('h3');
            const image = document.createElement('img');
            const descripcion = document.createElement('p');
            const price = document.createElement('p');
            const button = document.createElement('button');
      
            price.textContent = productos[j].price;
            price.className+= 'precio'

            name.textContent = productos[j].name;

            descripcion.textContent = productos[j].description;
            descripcion.className+= 'descripcion';
            image.src = productos[j].image;
            image.className+='img-fluid productos';

            button.className += 'btn btn-dark';
            button.textContent = 'Add to cart';
            
            button.onclick = function() {
                contador ++;
                var encontro = false;
                numero.textContent = contador + ' items'
            
              
            for(var i=0; i < listado.length; i++){
                    if(name.textContent == listado[i].descripcion){
                        encontro = true
                        listado[i]={
                            "item":listado[i].item,
                            "qty":listado[i].qty +=1,
                            "descripcion": name.textContent,
                            "price": price.textContent,
                            "amount":listado[i].price * (listado[i].qty)
                        }

                        const qty = document.getElementById(listado[i].item+"Qty");
                        qty.textContent = listado[i].qty;

                        const amou = document.getElementById(listado[i].item+"Amount");
                        amou.textContent = listado[i].amount;
                        var agregar = parseFloat(listado[i].price)
                        total=total+ agregar;
                        const totalHtml = document.getElementById("total");
                        const pagar = document.createElement('p')
                        totalHtml.textContent = "Total: $"+total
                        totalHtml.appendChild(pagar);
                       

                    }

                }
                if(!encontro){
                    listado.push(
                        {
                            "item":itemNumero,
                            "qty":1,
                            "descripcion": name.textContent,
                            "price": price.textContent,
                            "amount":price.textContent
                        }
                    )
                    

                    var agregar = parseFloat(price.textContent)
                        total=total+ agregar;

                        const totalHtml = document.getElementById("total");
                        const pagar = document.createElement('p')
                        totalHtml.textContent = "Total: $"+total
                        totalHtml.appendChild(pagar);

                        
                    const  tr = document.createElement('tr');
                    tr.id +=itemNumero    

                    const thItem = document.createElement('th');
                    const tdQty = document.createElement('td');
                    const tdDescription = document.createElement('td');
                    const tdPrice = document.createElement('td');
                    const tdAmount = document.createElement('td');
                    const tdModify = document.createElement('td');

                    thItem.textContent=itemNumero;
                    tdQty.textContent = 1;
                    tdDescription.textContent = name.textContent;
                    tdPrice.textContent = price.textContent;    
                    tdAmount.textContent = price.textContent
                    thItem.id +=itemNumero+"Item"

                    tdQty.id +=itemNumero+"Qty"
                    tdDescription.id +=itemNumero+"Descrip"
                    tdPrice.id +=itemNumero+"Price"
                    tdAmount.id +=itemNumero+"Amount"
                    itemNumero+=1;
                    const mas = document.createElement('button')    
                    const menos = document.createElement('button')    
                    mas.textContent="+";
                    menos.textContent ="-";
                    mas.className +="btn btn-dark mr-2";

                    mas.onclick=function () {
                        const qty = document.getElementById(tdQty.id);

                        var x = 0;
                        for(var i =0; i < listado.length; i++){
                            if(tr.id== listado[i].item){
                                x = i
                            }
                        }
                        listado[x]={
                            "item":listado[x].item,
                            "qty":listado[x].qty +=1,
                            "descripcion": name.textContent,
                            "price": price.textContent,
                            "amount":listado[x].price * (listado[x].qty)
                        }

                        
                        var agregar = parseFloat(listado[x].price)
                        total=total+ agregar;

                        const totalHtml = document.getElementById("total");
                        const pagar = document.createElement('p')
                        totalHtml.textContent = "Total: $"+total
                        totalHtml.appendChild(pagar);
                
 
                        
                        qty.textContent = listado[x].qty;
                    
                        const amou = document.getElementById(tdAmount.id);
                        amou.textContent = listado[x].amount;
                      
                        contador++;
                        numero.textContent = contador + ' items'
                    }

                    


                    menos.className +="btn btn-dark ml-3";

                    menos.onclick=function () {
                        const qty = document.getElementById(tdQty.id);

                        var x = 0;
                        for(var i =0; i < listado.length; i++){
                            if(tr.id== listado[i].item){
                                x = i
                            }
                        }
                        listado[x]={
                            "item":listado[x].item,
                            "qty":listado[x].qty -=1,
                            "descripcion": name.textContent,
                            "price": price.textContent,
                            "amount":listado[x].price * (listado[x].qty)
                        }

                        var agregar = parseFloat(listado[x].price)
                        total=total- agregar;

                        const totalHtml = document.getElementById("total");
                        const pagar = document.createElement('p')
                        totalHtml.textContent = "Total: $"+total
                     

                        totalHtml.appendChild(pagar);
                

                  
                        qty.textContent = listado[x].qty;
                    
                        const amou = document.getElementById(tdAmount.id);
                        amou.textContent = listado[x].amount;
                        
                        contador--;
                        numero.textContent = contador + ' items'

                        if(listado[x].qty==0){
                            listado.splice( x, 1 );
                            const tabla = document.getElementById('tablaOrders');
                            tabla.removeChild(tr)

               
                        }
                        if(listado.length==0){
                            totalHtml.textContent = "Total: $"+0
                            total=0;
                        }

                        
                    }

                    tdModify.appendChild(mas);
                    tdModify.appendChild(menos);
                    tr.appendChild(thItem);
                    tr.appendChild(tdQty);
                    tr.appendChild(tdDescription);
                    tr.appendChild(tdPrice);
                    tr.appendChild(tdAmount);
                    tr.appendChild(tdModify);
                    informe.appendChild(tr);


                    
                }
                

                
                
            };

            interior.appendChild(image);
            interior.appendChild(name);
            interior.appendChild(descripcion);
            interior.appendChild(price);
            interior.appendChild(button);


        }
    }

}


function mostrar(id) {
    var x = document.getElementById(id);
    
        x.style.display = "flex";
        
        if(id=='Burguers'){
            var a = document.getElementById('Tacos');
            var b = document.getElementById('Salads');
            var c = document.getElementById('Desserts');
            var d = document.getElementById('Drinks and Sides');
            var e = document.getElementById('order');
            
            a.style.display = "none"
            b.style.display = "none"
            c.style.display = "none"
            d.style.display = "none"
            e.style.display ="none"
        }
        else if(id=='Tacos'){
            var a = document.getElementById('Burguers');
            var b = document.getElementById('Salads');
            var c = document.getElementById('Desserts');
            var d = document.getElementById('Drinks and Sides');
            var e = document.getElementById('order');
            a.style.display = "none"
            b.style.display = "none"
            c.style.display = "none"
            d.style.display = "none"
            e.style.display ="none"

        }
        else if(id=='Salads'){
            var a = document.getElementById('Tacos');
            var b = document.getElementById('Burguers');
            var c = document.getElementById('Desserts');
            var d = document.getElementById('Drinks and Sides');
            var e = document.getElementById('order');
            a.style.display = "none"
            b.style.display = "none"
            c.style.display = "none"
            d.style.display = "none"
            e.style.display ="none"

        }
        else if(id=='Desserts'){
            var a = document.getElementById('Tacos');
            var b = document.getElementById('Salads');
            var c = document.getElementById('Burguers');
            var d = document.getElementById('Drinks and Sides');
            var e = document.getElementById('order');
            a.style.display = "none"
            b.style.display = "none"
            c.style.display = "none"
            d.style.display = "none"
            e.style.display ="none"

        }
        else if(id=='Drinks and Sides'){
            var a = document.getElementById('Tacos');
            var b = document.getElementById('Salads');
            var c = document.getElementById('Desserts');
            var d = document.getElementById('Burguers');
            var e = document.getElementById('order');
            a.style.display = "none"
            b.style.display = "none"
            c.style.display = "none"
            d.style.display = "none"
            e.style.display ="none"

        }
        else if(id=='order'){
            
            var a = document.getElementById('Tacos');
            var b = document.getElementById('Salads');
            var c = document.getElementById('Burguers');
            var d = document.getElementById('Drinks and Sides');
            var e = document.getElementById('Desserts');
            a.style.display = "none"
            b.style.display = "none"
            c.style.display = "none"
            d.style.display = "none"
            e.style.display ="none"

        }
    
}

  
const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');
const close2 = document.getElementById('close2');
open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

close2.addEventListener('click', () => {
    modal_container.classList.remove('show');
  });




  function cancelar(){
    

    total =0;
    for(var i =0; i < listado.length; i++){

        const tabla = document.getElementById('tablaOrders');
        const tr = document.getElementById(listado[i].item)
        tabla.removeChild(tr)
     
       
    }

    const totalHtml = document.getElementById("total");
    const pagar = document.createElement('p')
    totalHtml.textContent = "Total: $"+total
    totalHtml.appendChild(pagar);
    listado =[]
    contador=0;
    numero.textContent = contador + ' items';
    modal_container.classList.remove('show');
    itemNumero=1;
  }


  function confirmarOrden(){
      console.log(listado)
  }