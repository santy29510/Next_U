function convertir(){
    var numero1=parseInt(document.getElementById("numero1").value);
    var resultado;
    var opcion=parseInt(document.getElementById("opciones").value);

    if(validar(numero1)){
        switch(opcion){
            // Sin opcion
            case 0:
                alert("Por favor elija una opción")
            break
            // Celcius a Kelvin
            case 1:
                resultado=numero1+273.15;
            break
            // Celcius a Farenheit
            case 2:
                resultado = numero1*(1.8)+32;
            break
            // Farenheit a Celcius
            case 3:
                resultado=((numero1-32)*5)/9;
            break
            // Farenheit a Kelvin
            case 4:
                resultado=((((numero1-32)*5))/9)+273.15;
            break
            // Kelvin a Celcius
            case 5:
                resultado=numero1-273.15;
            break
            // Kelvin a Farenheit
            case 6:
                resultado=((((numero1-273.15)*9))/5)+32;
        }
        document.getElementById("resultado").value=resultado;
    }
    else{
        alert("Formato de numero incorrecto");
        document.getElementById("opciones").selectedIndex="0";
    }
}
function validar(num1){
    if(isNaN(num1)){
        return false;
    }else{
        return true;
    }

}