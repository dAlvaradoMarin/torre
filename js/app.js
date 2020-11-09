"use strict"

function validar()
{
    var ok = true;
    var cadena = "";

    if( document.getElementById("txtUser").value == "")
    {
        alert("Introduzca el nombre de usuario a consultar");
        ok = false;
    } else
    {
        cadena = txtUser.value;
        //pasarVariables(cadCons, cadena);
    }
    
    return ok;
}

function pasarVariables(pagina, nombres) {
    
    nomVec = nombres.split(",");
    for (i=0; i<nomVec.length; i++)
        pagina += nomVec[i] + "=" + escape(eval(nomVec[i]))+"&";
    pagina = pagina.substring(0,pagina.length-1);

    location.href=pagina;
  }
