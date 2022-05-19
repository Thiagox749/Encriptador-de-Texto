function encriptar(){
    var texto=document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado;
    txtCifrado= texto.replace(/e/igm,"enter");
    txtCifrado= txtCifrado.replace(/i/igm,"imes");
    txtCifrado= txtCifrado.replace(/a/igm,"ai");
    txtCifrado= txtCifrado.replace(/o/igm,"ober");
    txtCifrado= txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("inputTexto").value="";
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("textoDer").style.display = "none";
    document.getElementById("textoParrafo").style.display= "none";
    document.getElementById("textoMostrar").value= txtCifrado;
    document.getElementById("textoMostrar").style.display= "block";
    document.getElementById("copy").style.display= "inherit";
}
function desencriptar(){
    var texto=document.getElementById("inputTexto").value.toLowerCase();
    var txtCifrado;
    txtCifrado= texto.replace(/enter/igm,"e");
    txtCifrado= txtCifrado.replace(/imes/igm,"i");
    txtCifrado= txtCifrado.replace(/ai/igm,"a");
    txtCifrado= txtCifrado.replace(/ober/igm,"o");
    txtCifrado= txtCifrado.replace(/ufat/igm,"u");
    
    document.getElementById("inputTexto").value="";
    document.getElementById("imgDer").style.display = "none";
    document.getElementById("textoDer").style.display = "none";
    document.getElementById("textoParrafo").style.display="none";
    document.getElementById("textoMostrar").value= txtCifrado;
    document.getElementById("textoMostrar").style.display= "block";
    document.getElementById("copy").style.display= "inherit";
}
function copiar(){
    let contenido= document.querySelector("#textoMostrar");
    contenido.select();
    document.execCommand("copy");
    alert("Se copió!");
}


