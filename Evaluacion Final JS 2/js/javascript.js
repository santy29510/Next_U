var tabla =[]

window.onload = cargarEventos
function cargarEventos(){
    document.getElementById("mostrar-tabla").addEventListener("click", mostrarTabla,false);
    document.getElementById("nuevo-estudiante").addEventListener("submit", nuevoEstudiante, false);
    document.getElementById("promedio").addEventListener("click", promedio, false);
    document.getElementById("nota-alta").addEventListener("click", maxnote, false);
    document.getElementById("nota-baja").addEventListener("click", minnote, false);

}

function mostrarTabla(){
    var cuerpoTabla = document.getElementById("estudiantes-tabla");
    var tablaEstudiantes="";

    for(i=0;i<tabla.length;i++){

        tablaEstudiantes += "<tr><td>" + tabla[i].codigo + "</td><td>" + tabla[i].nombre + "</td><td>"+tabla[i].nota + "</td></tr>";
    }
    cuerpoTabla.innerHTML=tablaEstudiantes
}
function nuevoEstudiante(event){
    event.preventDefault();

    var codigoInput = document.getElementById("codigo").value;
    var nombreInput = document.getElementById("nombre").value;
    var notaInput = parseInt(document.getElementById("nota").value);

    var nuevoEstudiante ={ codigo: codigoInput, nombre: nombreInput, nota: notaInput}
    alert("Estudiante registrado")
    tabla.push(nuevoEstudiante);
    
    var form = document.getElementById("nuevo-estudiante");
    form.reset();
}
function promedio(json){
    var out = "";
    var sumanotas = 0.0;
    var aux = out += "";
    for (var i = 0; i < tabla.length; i++) {
        sumanotas += tabla[i].nota;
    }
   
    document.getElementById("datos").innerHTML = aux + "El promedio de notas es: "+sumanotas / tabla.length;
}
function maxnote(json) {
    var out = "";
    var notaAlta = tabla[0].nota;
    var pos = 0;
    var aux = out += "";
    for (i = 0; i < tabla.length; i++) {
        if (tabla[i].nota > notaAlta) {
            notaAlta = tabla[i].nota;
            pos = i;
        }
    }
    document.getElementById("datos").innerHTML = aux + "La nota mas alta es de: " + tabla[pos].nombre + "<br>" + " Con una nota de: " + tabla[pos].nota
}
function minnote(json) {
    var out = "";
    var notaBaja = tabla[0].nota;
    var pos = 0;
    var aux = out += "";
    for (i = 0; i < tabla.length; i++) {
        if (tabla[i].nota < notaBaja) {
            notaBaja = tabla[i].nota;
            pos = i;
        }
    }
    document.getElementById("datos").innerHTML = aux + "La nota mas baja es de: " + tabla[pos].nombre + "<br>" + " Con una nota de: " + tabla[pos].nota
}
minnote(jsObj);
maxnote(jsObj);
promedio(jsObj);
