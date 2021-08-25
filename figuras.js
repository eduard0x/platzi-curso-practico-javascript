//Código del cuadrado

console.log("Hola mundo");

const ladoCuadrado = 5;

console.group("Cuadrado");

console.log("Los lados del cuadrado miden: "+ ladoCuadrado);

const perimetroCuadrado = ladoCuadrado * 4;

console.log("El perimetro del cuadrado es: "+perimetroCuadrado);

const areaCuadrado = ladoCuadrado * ladoCuadrado;

console.log("El area del cuadrado es: "+areaCuadrado);

console.groupEnd();
//Código del triangulo

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.group("Triangulo");
console.log("Los lados del triangulo miden: "
+ ladoTriangulo1 
+" cm, "+ ladoTriangulo2
+ " cm, y una base de "
+baseTriangulo
+ " cm.");


const alturaTriangulo = 5.5;

console.log("La altura del triangulo es de: "+alturaTriangulo+" cm.");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;



console.log("El perimetro del triangulo es de: "+perimetroTriangulo + " cm.");


const areaTriangulo = baseTriangulo * alturaTriangulo /2;

console.log("El area del triangulo es de: "+areaTriangulo + " cm2.");

console.groupEnd();

//Código del circulo

console.group("Circulo");

const pi = Math.PI;

const radio = 4;

const diametro = radio * 2;



console.groupEnd();

    

function calcularAltura(){
    const lado1 = document.getElementById("lado1").value;
    const lado2 = document.getElementById("lado2").value;
    const base = document.getElementById("base").value;
   
    if(lado1 == lado2 && lado1 != base){
       
        const altura = Math.sqrt(lado1**2 - base**2/4);
        return altura;
        
    }
    else{
        alert("El triangulo no es isosceles, vuelva a intentarlo.")
    }
    
  
}

function mostrarAltura(){
    const altura = calcularAltura();
    const mensaje = "La altura del triangulo es de: "+altura;
    alert(mensaje);
}

function calcularArea(){
    const base = document.getElementById("base").value;

    const altura = calcularAltura();

    const area = base * altura / 2;

    const mensaje = "El area del triangulo es de: "+area;

    alert(mensaje);


}