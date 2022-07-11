//               F O R M A S

// CÍRCULO

var fotopordefecto10 = 'circulo1';

function cambiafoto10()
{   
    var imagen10 = document.getElementById('circulo');
    if (fotopordefecto10 == 'circulo1'){
        imagen10.src = './img/formas/circulo2.jpg.';
        fotopordefecto10 = 'circulo2';
    }
    else {
        imagen10.src = './img/formas/circulo1.jpg';
        fotopordefecto10 = 'circulo1';
    }
}

const audio10 = new Audio();
audio10.src = './mp3/formas/circulo.mp3';


// CUADRADO

var fotopordefecto11 = 'cuadrado1';

function cambiafoto11()
{   
    var imagen11 = document.getElementById('cuadrado');
    if (fotopordefecto11 == 'cuadrado1'){
        imagen11.src = './img/formas/cuadrado2.jpg.';
        fotopordefecto11 = 'cuadrado2';
    }
    else {
        imagen11.src = './img/formas/cuadrado1.jpg';
        fotopordefecto11 = 'cuadrado1';
    }
}

const audio11 = new Audio();
audio11.src = './mp3/formas/cuadrado.mp3';


// RECTÁNGULO

var fotopordefecto12 = 'rectangulo1';

function cambiafoto12()
{   
    var imagen12 = document.getElementById('rectangulo');
    if (fotopordefecto12 == 'rectangulo1'){
        imagen12.src = './img/formas/rectangulo2.jpg.';
        fotopordefecto12 = 'rectangulo2';
    }
    else {
        imagen12.src = './img/formas/rectangulo1.jpg';
        fotopordefecto12 = 'rectangulo1';
    }
}

const audio12 = new Audio();
audio12.src = './mp3/formas/rectangulo.mp3';


//TRIÁNGULO

var fotopordefecto13 = 'triangulo1';

function cambiafoto13()
{   
    var imagen13 = document.getElementById('triangulo');
    if (fotopordefecto13 == 'triangulo1'){
        imagen13.src = './img/formas/triangulo2.jpg.';
        fotopordefecto13 = 'triangulo2';
    }
    else {
        imagen13.src = './img/formas/triangulo1.jpg';
        fotopordefecto13 = 'triangulo1';
    }
}

const audio13 = new Audio();
audio13.src = './mp3/formas/triangulo.mp3';