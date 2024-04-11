const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//Obtener coordenadas y tamaño de dimensiones de la pantalla actual
const window_height = window.innerHeight;  //Ancho 
const window_width = window.innerWidth;    //Alto

//El canvas tiene las mismas dimensiones que la pantalla

canvas.height = window_height;
canvas.width = window_width;

//Añadir fondo
canvas.style.background = "#ff8";

class Circle {
    constructor(x, y, radius, color, text) {
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
    }

    draw(context) {
        context.beginPath();
        context.strokeStyle = this.color;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "20px Arial";
        context.lineWidth = 5;
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();
        context.fillText(this.text, this.posX, this.posY);

    }
}
let arryCircle = [];


for (let i = 0; i < 10; i++) {

    let randomX = Math.random() * window_height;
    let randomY = Math.random() * window_width;
    let randomRadius = Math.floor(Math.random() * 100 + 10); //floor redondea hacia arriba o abajo en los decimales

    let miCirculo = new Circle(randomX, randomY, randomRadius, 'blue', i +1 );

    //Agrega el objeto al array
    arryCircle.push(miCirculo);
    arryCircle[i].draw(ctx);


}

/* let miCirculo = new Circle(100, 100, 50, 'blue','Tec');
miCirculo.draw(ctx);

let miCirculo2 = new Circle(270, 270, 50, 'black', 'Pachuca');
miCirculo2.draw(ctx); */

//shift + alt + a comentarios rápidos

