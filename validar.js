const nombreInput = document.querySelector('.contacto__text__name');
const nombreError = document.querySelector('.error__nombre');
const validarNombre = () => {
    const valorNombre = nombreInput.value.trim();
    if (!valorNombre) {
      nombreError.textContent = "El campo Nombre no puede estar vacio.";
    } else if(valorNombre.length < 10 || valorNombre.length > 50) {
      nombreError.textContent = 'Este campo debe tener al menos 10 caracteres y como máximo 50.';
    } else if(!/[A-Z]/.test(valorNombre)) {
      nombreError.textContent = 'El nombre debe tener al menos una letra mayúscula.';
    } else {
      nombreError.textContent = "";
    }
};
nombreInput.addEventListener('blur', validarNombre)




const inputCorreo = document.querySelector('.contacto__email')
const errorEmail = document.querySelector('.error__email')
const validarCorreo = () => {
    const expresionRegular = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    let correoValue = inputCorreo.value.trim();
    if(!correoValue) {
      errorEmail.textContent = 'Este campo no puede estar vacío.';
    } else if(!expresionRegular.test(correoValue)) {
        return errorEmail.textContent = 'El formato no es válido. Por favor, utiliza el siguiente formato: texto@texto.com';
    } else {
      errorEmail.textContent = '';
    }
};
inputCorreo.addEventListener('blur', validarCorreo)



const inputAsunto = document.querySelector('.contacto__asunto');
const errorAsunto = document.querySelector('.error__asunto');
const validarAsunto = () => {
    let asuntoValor = inputAsunto.value.trim()
    if(!asuntoValor) {
        errorAsunto.textContent = 'Este campo no puede estar vacio'
    } else if(asuntoValor.length < 10) {
        errorAsunto.textContent = 'Este campo debe tener al menos 10 carcacteres'
    } else  {
        errorAsunto.textContent = ''
    }

}
inputAsunto.addEventListener('blur', validarAsunto)



const inputMensaje = document.querySelector('.contacto__mensaje');
const errorMensaje = document.querySelector('.error__mensaje');
const validarMensaje = () => {
    let mensajeValor = inputMensaje.value.trim()
    if(!mensajeValor) {
        errorMensaje.textContent = 'Este campo no puede estar vacio'
    } else if(mensajeValor.length < 20 || mensajeValor.length > 300) {
        errorMensaje.textContent = 'Este campo debe tener al menos 30 caracteres y como maximo 300'
    } else {
        errorMensaje.textContent = ''
    }
}
inputMensaje.addEventListener('blur', validarMensaje)


  
const validarFormulario = (event) => {
    event.preventDefault()
    validarNombre();
    validarCorreo();
    validarAsunto();
    validarMensaje();

    if (!nombreError.textContent && !emailError.textContent && !asuntoError.textContent && !mensajeError.textContent) {
        alert('Formulario enviado exitosamente');
    } else {
        alert('Por favor, verifica los campos y corrige los errores');
    }
}
const formulario = document.querySelector('.contacto__formulario')
formulario.addEventListener('submit', validarFormulario)

  