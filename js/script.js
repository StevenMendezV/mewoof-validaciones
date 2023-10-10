// SECCIONES DEL INDEX
const seccionLogin= document.getElementById("mw_login");
const seccionTipoUsuario= document.getElementById("mw_usuarioTipo");
const seccionRegister= document.getElementById("mw_register");
const seccionRegister2= document.getElementById("mw_register2");

// BOTONES BOTONES LOGIN PARTE 1 - USUARIO CONTRASEÑA
const botonLoginNav = document.getElementById("mw-loginNav");
const botonLoginApp = document.getElementById("mw-loginButton");
const botonCloseLogin= document.getElementById("mw-loginCloseButton");
const botonATipoUsuario = document.getElementById("mw-redireccionaTipoUsuario");
const botonMostrarPassword = document.getElementById("mw-mostrar_password");
const inputPassword = document.getElementById("mw_loginPassword");

botonLoginNav.addEventListener('click', () => {
    seccionLogin.style.display="flex";
});

botonLoginApp.addEventListener('click', () => {
    alert ("¡Ingreso Exitoso!");
});

botonCloseLogin.addEventListener('click', () => {
    seccionLogin.style.display="none";
})

botonATipoUsuario.addEventListener('click', () => {
    seccionLogin.style.display="none";
    seccionTipoUsuario.style.display="flex";
});

// botonMostrarPassword.addEventListener('click', () => {
//     inputPassword.type="text";
// });

// BOTONES LOGIN PARTE 2 - TIPO DE USUARIO
const botonBackTipoUsuario= document.getElementById("mw-usuarioTipoCloseButton1");
const botonCloseTipoUsuario= document.getElementById("mw-usuarioTipoCloseButton");
const botonARegister = document.getElementById("mv-usuarioTipoButton1");
const botonARegister2 = document.getElementById("mv-usuarioTipoButton2");
const botonALogin2 = document.getElementById("mw-redireccionaLogin2");

botonBackTipoUsuario.addEventListener('click', () => {
    seccionTipoUsuario.style.display="none";
    seccionLogin.style.display="flex";
});

botonCloseTipoUsuario.addEventListener('click', () => {
    seccionTipoUsuario.style.display="none";
});

botonARegister.addEventListener('click', () => {
    seccionTipoUsuario.style.display="none";
    seccionRegister.style.display="flex";
});

botonARegister2.addEventListener('click', () => {
    seccionTipoUsuario.style.display="none";
    seccionRegister2.style.display="flex";
});

botonALogin2.addEventListener('click', () => {
    seccionTipoUsuario.style.display="none";
    seccionLogin.style.display="flex";
});

// BOTONES LOGIN PARTE 3 - USUARIO DANDO EN ADOPCIÓN
const botonBackRegister= document.getElementById("mw-registerTipoCloseButton1");
const botonCloseRegister= document.getElementById("mw-registerCloseButton");
const botonALogin3 = document.getElementById("mw-redireccionaLogin3");
const botonRegistrarDandoAdopcion = document.getElementById("mw-registerButtonDandoAdopcion");

botonBackRegister.addEventListener('click', () => {
    seccionRegister.style.display="none";
    seccionTipoUsuario.style.display="flex";
});

botonCloseRegister.addEventListener('click', () => {
    seccionRegister.style.display="none";
});

botonALogin3.addEventListener('click', () => {
    seccionRegister.style.display="none";
    seccionLogin.style.display="flex";
});

// botonRegistrarDandoAdopcion.addEventListener('click', () => {
//     alert("¡Registro Exitoso! \n Bienvenido a la comunidad Mewoof");
//     seccionRegister.style.display="none";
//     seccionLogin.style.display="flex"
// });

// BOTONES LOGIN PARTE 4 - USUARIO ADOPTANDO

const botonBackRegister2= document.getElementById("mw-register2TipoCloseButton1");
const botonCloseRegister2= document.getElementById("mw-register2CloseButton");
const botonALogin4 = document.getElementById("mw-redireccionaLogin4");
const botonRegistrarAdoptante = document.getElementById("mw-registerButtonAdoptante");

botonBackRegister2.addEventListener('click', () => {
    seccionRegister2.style.display="none";
    seccionTipoUsuario.style.display="flex";
});
botonCloseRegister2.addEventListener('click', () => {
    seccionRegister2.style.display="none";
});

botonALogin4.addEventListener('click', () => {
    seccionRegister2.style.display="none";
    seccionLogin.style.display="flex";
});

// botonRegistrarAdoptante.addEventListener('click', () => {
//     alert("¡Registro Exitoso! \n Bienvenido a la comunidad Mewoof");
//     seccionRegister2.style.display="none";
//     seccionLogin.style.display="flex"
// });



// BOTONTES MOSTRAR MÁS SECCION OUR TEAM
function mostrarMas1() {
    const member1 = document.querySelector("#mw-cardtext1");
    member1.style="display: block";
    document.getElementById("mostrar-menos1").style="display: block";
    document.getElementById("mostrar-mas1").style="display: none";
}

function mostrarMas2() {
    const member2 = document.querySelector("#mw-cardtext2");
    member2.style="display: block";
    document.getElementById("mostrar-menos2").style="display: block";
    document.getElementById("mostrar-mas2").style="display: none";
    
}

function mostrarMas3() {
    const member3 = document.querySelector("#mw-cardtext3");
    member3.style="display: block";
    document.getElementById("mostrar-menos3").style="display: block";
    document.getElementById("mostrar-mas3").style="display: none";
    
}

function mostrarMas4() {
    const member4 = document.querySelector("#mw-cardtext4");
    member4.style="display: block";
    document.getElementById("mostrar-menos4").style="display: block";
    document.getElementById("mostrar-mas4").style="display: none";
    
}

// BOTONTES MOSTRAR MENOS SECCION OUR TEAM
function mostrarMenos1() {
    const member1 = document.querySelector("#mw-cardtext1");
    member1.style="display: none"
    document.getElementById("mostrar-menos1").style="display: none";
    document.getElementById("mostrar-mas1").style="display: block";
}

function mostrarMenos2() {
    const member2 = document.querySelector("#mw-cardtext2");
    member2.style="display: none"
    document.getElementById("mostrar-menos2").style="display: none";
    document.getElementById("mostrar-mas2").style="display: block";
}

function mostrarMenos3() {
    const member3 = document.querySelector("#mw-cardtext3");
    member3.style="display: none"
    document.getElementById("mostrar-menos3").style="display: none";
    document.getElementById("mostrar-mas3").style="display: block";
}

function mostrarMenos4() {
    const member4 = document.querySelector("#mw-cardtext4");
    member4.style="display: none"
    document.getElementById("mostrar-menos4").style="display: none";
    document.getElementById("mostrar-mas4").style="display: block";
}

const navCont = document.querySelector(".mw-navcontainer-menu");
const botonNav = document.querySelector(".toggle");

botonNav.addEventListener("click", () => {
    navCont.classList.toggle("nav-menu-visible")
})

//SECCIÓN CONTÁCTENOS
//Validación datos ingresados al formulario
document.addEventListener("DOMContentLoaded", function() {
    // Traer los datos de entrada
    let nombreInput = document.getElementById("nombre");
    let emailInput = document.getElementsByName("email")[0]; // getElementsByName se trae con el nombre
    let enviarButton = document.getElementById("enviarButton");
  
    // Validar nombre
    function validarNombre(nombreCompleto) {
        let nombreApellido = nombreCompleto.split(" ");
        return nombreApellido.length >= 2 && nombreApellido[0].length >= 3 && nombreApellido[1].length >= 3;
    }

    // Validar email
    function validarEmail(emailValido) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Permit verificar el cuerbo de un correo
        return regex.test(emailValido);
    } 

    enviarButton.addEventListener("click", function(event) {
        let nombreCompleto = nombreInput.value.trim();
        let emailValido = emailInput.value.trim();

        // Realizar validación de nombre y correo electrónico
        const parrafoAEliminar = document.getElementById("alert-nombre");
        const parrafoAEliminarC = document.getElementById("alert-correo");
        if(validarNombre(nombreCompleto) && parrafoAEliminar){
            const padre = parrafoAEliminar.parentNode;
            padre.removeChild(parrafoAEliminar); 
        }

        else if(validarEmail(emailValido) && parrafoAEliminarC){
            const padre = parrafoAEliminarC.parentNode;
            padre.removeChild(parrafoAEliminarC); 
        }

        else if (validarNombre(nombreCompleto) && validarEmail(emailValido)) {
            document.querySelector("form").submit();

            

            document.getElementById("nombre").value = ""; //Limpiar campos 
            document.getElementById("email").value = "";
        } else {
            if (!validarNombre(nombreCompleto)) {

                const parrafoNombreExiste = document.getElementById("alert-nombre");

                if(!parrafoNombreExiste){
                const inputPadre = document.getElementById("nombre");
                const nuevoParrafo = document.createElement("p");
                nuevoParrafo.id = "alert-nombre";
                nuevoParrafo.textContent = "Ingrese su nombre completo";
                nuevoParrafo.style.paddingLeft = "20px";
                nuevoParrafo.style.paddingBottom = "20px";
                nuevoParrafo.style.color = "red";
                inputPadre.parentNode.insertBefore(nuevoParrafo, inputPadre.nextSibling);
            }
                // alert("Ingrese su nombre completo.");
            }
            if (!validarEmail(emailValido)) {
                
                const parrafoCorreoExiste = document.getElementById("alert-correo");

                if(!parrafoCorreoExiste){
                const inputPadre = document.getElementById("email");
                const nuevoParrafoC = document.createElement("p");
                nuevoParrafoC.id = "alert-correo";
                nuevoParrafoC.textContent = "Ingrese un email válido";
                nuevoParrafoC.style.paddingLeft = "20px";
                nuevoParrafoC.style.paddingBottom = "20px";
                nuevoParrafoC.style.color = "red";
                inputPadre.parentNode.insertBefore(nuevoParrafoC, inputPadre.nextSibling);
                }
                // alert("Ingrese un email valido.");
            }
            event.preventDefault(); // no deja enviar el formulario antes de tiempo
        }
    });
});
// FIN SECCIÓN CONSTÁCTENOS

const enviarBotonRegister = document.getElementById("mw-registerButtonDandoAdopcion");



enviarBotonRegister.addEventListener('click', function(event) {
    //Declaro las variables que usaremos para validacion
    //Modificar esto porque ya se encuentra en el docuemnto
    const mwRegisterNombre= document.getElementById("mw_registerNombre");
    const mwRegisterApellido = document.getElementById("mw_registerApellido");
    const mwRegisterPais = document.getElementById("mw_registerPais");
    const mwRegisterCiudad = document.getElementById("mw_registerCiudad");
    const mwRegisterCel = document.getElementById("mw_registerCel");
    const mwRegisterEmail = document.getElementById("mw_registerMail");
    const mwRegisterPassword = document.getElementById("mw_registerPassword");
    const mwRegisterPasswordConfirm = document.getElementById("mw_registerPasswordConfirm");
    console.log(mwRegisterNombre);

    

    function validacionRegister(HTMLElement){
        console.log(HTMLElement);
        const fnNodeHtml = HTMLElement;
        // let nombreValido = false;
        // let mailValido = false;
        if(fnNodeHtml.id === "mw_registerNombre"){
            const registerNombre = fnNodeHtml.value.trim();
            const regexNombre = /^([A-z]{2,15})\s?(([A-z]{2,15}))?$/;
            let nombreValido = regexNombre.test(registerNombre);

            if(!nombreValido){
                const parrafoNombreExistencia = document.getElementById(`${fnNodeHtml.id}-alert`);
                if(!parrafoNombreExistencia){
                    creacionAlertaRegister();
                }
            } else{
                const parrafoNombreExistencia = document.getElementById(`${fnNodeHtml.id}-alert`);
                if(parrafoNombreExistencia != null){
                const padreParrafoNombre = parrafoNombreExistencia.parentNode;
                padreParrafoNombre.removeChild(parrafoNombreExistencia);
            }
            }

            
        } else if(fnNodeHtml.id === "mw_registerApellido"){
            const registerApellido = fnNodeHtml.value.trim();
            const regexApellido = /^([A-z]{2,15})\s?(([A-z]{2,15}))?$/;
            let apellidoValido = regexApellido.test(registerApellido);

            if(!apellidoValido){
                const parrafoNombreExistencia = document.getElementById(`${fnNodeHtml.id}-alert`);
                if(!parrafoNombreExistencia){
                    creacionAlertaRegister();
                }
            } else{
                const parrafoNombreExistencia = document.getElementById(`${fnNodeHtml.id}-alert`);
                if(parrafoNombreExistencia != null){
                const padreParrafoNombre = parrafoNombreExistencia.parentNode;
                padreParrafoNombre.removeChild(parrafoNombreExistencia);}
            }
        } else if(fnNodeHtml.id === "mw_registerPais"){

        } else if(fnNodeHtml.id === "mw_registerCiudad"){

        } else if(fnNodeHtml.id === "mw_registerCel"){
            const registerCel = fnNodeHtml.value.trim();
            const regexCel = /^\d+/;
            let celValido = regexCel.test(registerCel)
            console.log(celValido)
        } else if(fnNodeHtml.id === "mw_registerMail"){
            const registerMail = fnNodeHtml.value.trim();
            const regexMail = /^[\w_]{1,30}(\.?\+?[\w]{5,10})?@[\w]{2,10}\.\w{2,5}$/;
            let mailValido = regexMail.test(registerMail);

            if(!mailValido){
                const parrafoNombreExistencia = document.getElementById(`${fnNodeHtml.id}-alert`);
                if(!parrafoNombreExistencia){
                    creacionAlertaRegister();
                }
            } else{
                const parrafoNombreExistencia = document.getElementById(`${fnNodeHtml.id}-alert`);
                if(parrafoNombreExistencia != null){
                const padreParrafoNombre = parrafoNombreExistencia.parentNode;
                padreParrafoNombre.removeChild(parrafoNombreExistencia);
            }
            }
        
 
        } else if(fnNodeHtml.id === "mw_registerPassword"){

        } else if(fnNodeHtml.id === "mw_registerPasswordConfirm"){

        }
        

        function creacionAlertaRegister(){
            const padreParrafoNombre = fnNodeHtml.parentNode;
            // const padreParrafoNombre = document.getElementById("registerNombreUser");
            const nuevoTest=document.createElement("p")
            nuevoTest.id = `${fnNodeHtml.id}-alert`
            //switch
            if(fnNodeHtml.id === "mw_registerNombre"){
                nuevoTest.textContent = "Escriba un nombre válido"
            } else if(fnNodeHtml.id === "mw_registerApellido"){
                nuevoTest.textContent = "Escriba un apellido válido"
            } else if(fnNodeHtml.id === "mw_registerPais"){
                nuevoTest.textContent = "Escriba un país válido"
            } else if(fnNodeHtml.id === "mw_registerCiudad"){
                nuevoTest.textContent = "Escriba una ciudad válida"
            } else if(fnNodeHtml.id === "mw_registerCel"){
                nuevoTest.textContent = "Digite un teléfono válido"
            } else if(fnNodeHtml.id === "mw_registerMail"){
                nuevoTest.textContent = "Digite un Email válido"
            } else if(fnNodeHtml.id === "mw_registerPassword"){
                nuevoTest.textContent = "Digite una contraseña válida"
            } else if(fnNodeHtml.id === "mw_registerPasswordConfirm"){
                nuevoTest.textContent = "Las contraseñas no coinciden"
            } //Este queda pendiente a revision
            
            nuevoTest.style.color = "red";
            nuevoTest.style.fontSize = "12px";
            padreParrafoNombre.parentNode.insertBefore(nuevoTest, padreParrafoNombre.nextSibling)
            
        }
    }

    validacionRegister(mwRegisterNombre);
    validacionRegister(mwRegisterApellido)
    // validacionRegister(mwRegisterEmail)

    // event.preventDefault();

    

});


