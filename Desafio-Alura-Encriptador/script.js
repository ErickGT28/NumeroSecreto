
let botonEncriptar = document.querySelector(".boton-encriptador");
let botonDesencriptar = document.querySelector(".boton-desencriptador");
let muñeco = document.querySelector(".imagen-muñeco");
let contenedor = document.querySelector(".parrafo");
let resultado = document.querySelector(".texto-resultado");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    let cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    let cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    let cajatexto = document.querySelector(".cajatexto")
    return cajatexto.value
}

function ocultarAdelante(){
    muñeco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptarTexto(mensaje){

    let encriptar = mensaje;
    let encriptado = [];

    for(let i=0; i<encriptar.length; i++){
    switch (encriptar[i]){
    case 'a':
    encriptado.push('ai');
    break;
    case 'e':
    encriptado.push("enter");
    break;
    case 'i':
    encriptado.push("imes");
    break;
    case 'o':
    encriptado.push("ober");
    break;
    case 'u':
    encriptado.push("ufat");
    break;
    default:
    encriptado.push(encriptar[i]);
    }
    }
    return encriptado.join("");
}

function desencriptarTexto(mensaje){

    let desencriptar = mensaje;
 
    let constante = 0;
    do{
    desencriptar = desencriptar.replace('ai','a');
    desencriptar = desencriptar.replace('enter','e');
    desencriptar = desencriptar.replace('imes','i');
    desencriptar = desencriptar.replace('ober','o');
    desencriptar = desencriptar.replace('ufat','u');
    constante++;
    }while(constante < desencriptar.length)

    return desencriptar;
}

const botonCopiar = document.querySelector(".boton-copiar"); 
    botonCopiar.addEventListener("click", copiar = () => {
    let contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});







