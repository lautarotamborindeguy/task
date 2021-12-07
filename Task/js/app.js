$(document).ready(function(){
	$('.content-diapo').slick();
});

function validarCedula(ci) {
    //Inicializo los coefcientes en el orden correcto
    var arrCoefs = new Array(2, 9, 8, 7, 6, 3, 4, 1);
    var suma = 0;
    //Para el caso en el que la CI tiene menos de 8 digitos
    //calculo cuantos coeficientes no voy a usar
    var difCoef = parseInt(arrCoefs.length - ci.length);
    //recorro cada digito empezando por el de más a la derecha
    //o sea, el digito verificador, el que tiene indice mayor en el array
    for (var i = ci.length - 1; i > -1; i--) {
        //Obtengo el digito correspondiente de la ci recibida
        var dig = ci.substring(i, i + 1);
        //Lo tenía como caracter, lo transformo a int para poder operar
        var digInt = parseInt(dig);
        //Obtengo el coeficiente correspondiente al ésta posición del digito
        var coef = arrCoefs[i + difCoef];
        //Multiplico dígito por coeficiente y lo acumulo a la suma total
        suma = suma + digInt * coef;
    }
    var result = false;
    // si la suma es múltiplo de 10 es una ci válida
    if ((suma % 10) === 0) {
        result = true;
    }
    return result;
}
function validarEmail(valor) {
	if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(valor)){
	 return true
	} else {
	 return false;
	}
}
function validacionFormulario() {
	let formularioValido = true;
	
	let valueInputName = document.getElementById("inputNameUser").value;
	let valueInputLastName = document.getElementById("inputLastNameUser").value;

	if(valueInputName.length <= 1) {
		formularioValido = false;
		document.getElementById("inputNameUser").classList.add("campo-invalido");
		document.getElementById("espAlertName").classList.remove("d-none");
	} else {
		document.getElementById("espAlertName").classList.add("d-none")
		document.getElementById("inputNameUser").classList.remove("campo-invalido");
	}
	if(valueInputLastName.length <= 1) {
		formularioValido = false;
		document.getElementById("inputLastNameUser").classList.add("campo-invalido");
		document.getElementById("espAlertLastName").classList.remove("d-none");
	} else {
		document.getElementById("espAlertLastName").classList.add("d-none");
		document.getElementById("inputLastNameUser").classList.remove("campo-invalido");
	}
	if (validarEmail(document.getElementById("inputEmailUser").value) === false){
		formularioValido = false;
		document.getElementById("inputEmailUser").classList.add("campo-invalido");
		document.getElementById("espAlertGmailInv").classList.remove("d-none");
	} else {
		document.getElementById("espAlertGmailInv").classList.add("d-none");
		document.getElementById("inputEmailUser").classList.remove("campo-invalido");
	}
	if(document.getElementById("selectLoc").value === "Localidades") {
		formularioValido = false;
		document.getElementById("selectLoc").classList.add("campo-invalido");
		document.getElementById("espAlertLoc").classList.remove("d-none");
	} else {
		document.getElementById("espAlertLoc").classList.add("d-none");
		document.getElementById("selectLoc").classList.remove("campo-invalido");
	}
	if(document.getElementById("selectDptos").value === "Departamentos") {
		formularioValido = false;
		document.getElementById("selectDptos").classList.add("campo-invalido")
		document.getElementById("espAlertDpto").classList.remove("d-none")
	} else {
		document.getElementById("espAlertDpto").classList.add("d-none")
		document.getElementById("selectDptos").classList.remove("campo-invalido")
	}
	if (validarCedula(document.getElementById("inputCIUser").value) === false || document.getElementById("inputCIUser").value === "") {
		formularioValido = false;
		document.getElementById("inputCIUser").classList.add("campo-invalido")
		document.getElementById("espAlertCIInv").classList.remove("d-none")
	} else {
		document.getElementById("espAlertCIInv").classList.add("d-none")
		document.getElementById("inputCIUser").classList.remove("campo-invalido")
	}
	if(!document.getElementById('checkCondiciones').checked){
		formularioValido = false;
		document.getElementById('checkCondiciones').classList.add("campo-invalido")
		document.getElementById('espAlertCheckInv').classList.remove("d-none")
	} else {
		document.getElementById('espAlertCheckInv').classList.add("d-none")
		document.getElementById('checkCondiciones').classList.remove("campo-invalido")
	}
}
function removerAlertasBordes() {
	let valueInputName = document.getElementById("inputNameUser").value;
	let valueInputLastName = document.getElementById("inputLastNameUser").value;
	if(valueInputName.length >= 1) {
		document.getElementById("espAlertName").classList.add("d-none")
		document.getElementById("inputNameUser").classList.remove("campo-invalido");
	}
	if(valueInputLastName.length >= 1) {
		document.getElementById("espAlertLastName").classList.add("d-none");
		document.getElementById("inputLastNameUser").classList.remove("campo-invalido");
	}
	if (validarEmail(document.getElementById("inputEmailUser").value) !== false){
		document.getElementById("espAlertGmailInv").classList.add("d-none");
		document.getElementById("inputEmailUser").classList.remove("campo-invalido");
	}
	if(document.getElementById("selectLoc").value !== "Localidades") {
		document.getElementById("espAlertLoc").classList.add("d-none");
		document.getElementById("selectLoc").classList.remove("campo-invalido");
	}
	if(document.getElementById("selectDptos").value !== "Departamentos") {
		document.getElementById("espAlertDpto").classList.add("d-none")
		document.getElementById("selectDptos").classList.remove("campo-invalido")
	}
	if (validarCedula(document.getElementById("inputCIUser").value) !== false || document.getElementById("inputCIUser").value !== "") {
		document.getElementById("espAlertCIInv").classList.add("d-none")
		document.getElementById("inputCIUser").classList.remove("campo-invalido")
	}
	if(document.getElementById('checkCondiciones').checked){
		document.getElementById('espAlertCheckInv').classList.add("d-none")
		document.getElementById('checkCondiciones').classList.remove("campo-invalido")
	}
}


		  



