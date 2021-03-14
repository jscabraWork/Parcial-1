
const burguers = true;
const tacos = false;
const salads = false;
const desserts = false;
const drinks = false;

const section = document.querySelector('section');


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
        section.appendChild(row);
        
        var productos = jsonObj[i].products;
        
        for (var j = 0; j < productos.length; j++) {


            const col = document.createElement('div');
            col.className += 'col-3';
            const interior = document.createElement('div');
            row.appendChild(col);
            interior.className+='border p-2'
            col.appendChild(interior);

            const name = document.createElement('h3');
            const image = document.createElement('img');
            const descripcion = document.createElement('p');
            const price = document.createElement('p');

            price.textContent = productos[j].price;

            name.textContent = productos[j].name;
            descripcion.textContent = productos[j].description;
            image.src = productos[j].image;
            image.className+='img-fluid';
            interior.appendChild(image);
            interior.appendChild(name);
            interior.appendChild(descripcion);
            interior.appendChild(price);



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
            a.style.display = "none"
            b.style.display = "none"
            c.style.display = "none"
            d.style.display = "none"
        }
        else if(id=='Tacos'){
            var a = document.getElementById('Burguers');
            var b = document.getElementById('Salads');
            var c = document.getElementById('Desserts');
            var d = document.getElementById('Drinks and Sides');
            a.style.display = "none"
            b.style.display = "none"
            c.style.display = "none"
            d.style.display = "none"

        }
        else if(id=='Salads'){
            var a = document.getElementById('Tacos');
            var b = document.getElementById('Burguers');
            var c = document.getElementById('Desserts');
            var d = document.getElementById('Drinks and Sides');
            a.style.display = "none"
            b.style.display = "none"
            c.style.display = "none"
            d.style.display = "none"

        }
        else if(id=='Desserts'){
            var a = document.getElementById('Tacos');
            var b = document.getElementById('Salads');
            var c = document.getElementById('Burguers');
            var d = document.getElementById('Drinks and Sides');
            a.style.display = "none"
            b.style.display = "none"
            c.style.display = "none"
            d.style.display = "none"

        }
        else if(id=='Drinks and Sides'){
            var a = document.getElementById('Tacos');
            var b = document.getElementById('Salads');
            var c = document.getElementById('Desserts');
            var d = document.getElementById('Burguers');
            a.style.display = "none"
            b.style.display = "none"
            c.style.display = "none"
            d.style.display = "none"

        }
    
}



 
                 