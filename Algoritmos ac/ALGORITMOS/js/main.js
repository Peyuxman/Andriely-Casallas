function suma(){
    var a=0; 
    var b=0;
    var suma=0;
    alert("Ingrese el primer valor:");
    a = parseInt (prompt(" "));
    alert("Por favor ingrese el segunod valor: ");
    b = parseInt (prompt(" "));
    suma = a + b;
    alert("El resultado obtenido es:"+suma);
}
function opbasicas(){
    var a=0;
    var b=0;
    var suma=0;
    var resta=0;
    var multiplicacion=0;
    var division=0;
    a = parseInt (prompt("Ingrese el primer valor a realizar las operaciones basicas"));
    b = parseInt (prompt("Ingrese el segundo valor a realizar las operaciones basicas"));
    suma = a + b;
    resta = a - b;
    multiplicacion = a * b;
    division= a / b;
    alert("Los resultados de las diferentes operaciones basicas son: " + " suma: " + suma + " resta: " + resta + " división:  " + division + " multiplicación: " + multiplicacion);
}  
function promedio(){
    var n1 = 0;
    var n2 = 0;
    var n3 = 0;
    var n4 = 0;
    var n5 = 0;
    var n6 = 0;
    var n7 = 0;
    var r = 0;
    var p = 0;
    var m = " ";
    m = prompt("ingrese el nombre de la materia");
    n1 = parseInt(prompt("ingrese una de las notas a calificar"));
    n2 = parseInt(prompt("ingrese una de las notas a calificar"));
    n3 = parseInt(prompt("ingrese una de las notas a calificar"));
    n4 = parseInt(prompt("ingrese una de las notas a calificar"));
    n5 = parseInt(prompt("ingrese una de las notas a calificar"));
    n6 = parseInt(prompt("ingrese una de las notas a calificar"));
    n7 = parseInt(prompt("ingrese la ultima nota a calificar"));
    r = n1+n2+n3+n4+n5+n6+n7;
    p = r / 7;
    alert(" El promedio del estudiante es: " + p + " en la materia: " + m);
}
function capital(){
    monto = 0;
    Operacion = 0;
    Años = 0;
    P = 0;
    Meses = 0;
    percent = 0.017 ;
    an = 0;
    monto = parseInt(prompt("Ingrese el monto a invertir: "));
    Años = parseInt(prompt("Ingrese el numero de años a los que desea realizar su inversión: "));
    Meses = Años * 12;
    Op = monto*percent;
    P= Op*Meses;
    an = P + monto;
    alert("el monto ganado con esa inversión es de: " + P + " junto con tu inversión serian un total de: " + an);
}
function mayor(){
    x = 0;
    y = 0;
    op = 0;
    x = parseInt(prompt("Por favor ingrese el primer numero: "));
    y = parseInt(prompt("Ingrese el segundo dato: "));
    if (x>y){
        alert("El numero mayor es: " + x);
    }
    else if(y>x){
        alert("El numero mayor es: " + y);
        
    }
    else if(x==y){
        alert("Los numeros son los mismos: " + x);
    }
}
function circulo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("circulo");
}
function rectangulo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("rectangulo");
}
function rombo(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("rombo");
}
function gif(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("gif");
}
function left(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("left");
}
function up(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("up")
}
function down(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("down")
}
function rigth(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("rigth")
}
function diag(){
    var figura = document.getElementById("figura");
    figura.classList.toggle("diag")
}