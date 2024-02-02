const e = "enter";
const i = "imes";
const a = "ai";
const o = "ober";
const u = "ufat";

function obtenerTexto() {
  let texto = document.querySelector("#texto-ingreso").value;
  texto = texto.toLowerCase();
  return texto;
}

function encriptar() {
  let palabra = obtenerTexto();
  let mensajeEncriptado = "";

  for (const letra of palabra) {
    switch (letra) {
      case "a":
        mensajeEncriptado += a;
        break;
      case "e":
        mensajeEncriptado += e;
        break;
      case "i":
        mensajeEncriptado += i;
        break;
      case "o":
        mensajeEncriptado += o;
        break;
      case "u":
        mensajeEncriptado += u;
        break;
      default:
        mensajeEncriptado += letra;
        break;
    }
  }
  document.querySelector("#texto-salida").value = mensajeEncriptado;
}

function desencriptar() {
  let palabra = obtenerTexto();
  let mensajeDesencriptado = "";

  for (let i = 0; i < palabra.length; i++) {
    const letra = palabra[i];
    switch (letra) {
      case "a":
        mensajeDesencriptado += letra;
        i += 1;
        break;
      case "e":
        mensajeDesencriptado += letra;
        i += 4;
        break;
      case "i":
        mensajeDesencriptado += letra;
        i += 3;
        break;
      case "o":
        mensajeDesencriptado += letra;
        i += 3;
        break;
      case "u":
        mensajeDesencriptado += letra;
        i += 3;
        break;
      default:
        mensajeDesencriptado += letra;
        break;
    }
  }
  document.querySelector("#texto-salida").value = mensajeDesencriptado;
}

function copiarTexto() {
  let texto = document.querySelector("#texto-salida").value;
  texto.toLowerCase();
  navigator.clipboard.writeText(texto);
}