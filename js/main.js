

const header = document.querySelector('header');
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

        const myH1 = document.createElement('h1');
        myH1.textContent = jsonObj[i].name;
        header.appendChild(myH1);
        console.log(jsonObj[i].products)
        for (var j = 0; j > jsonObj[i].products.length; j++) {
            const descripcion = document.createElement('p');

            descripcion.textContent = jsonObj[i].products[j].description
            header.appendChild(descripcion)
        }
    }

}


