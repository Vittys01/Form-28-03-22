const formulario = document.querySelector('form');
const botonSubmit = document.querySelector('form button');
const marcoHobbies =  document.querySelector('fieldset');
const inputNombre = document.querySelector('#nombre');
const inputContrasenia = document.querySelector('#pass');
const inputTelefono = document.querySelector('#tel');
const checkBoxes = document.querySelectorAll('[name=hobbies]');
// const checkboxes = document.getElementsByName('hobbies');
const radioButons = document.querySelectorAll('[name=nacionalidad]');

const mensajeNombre = document.querySelector('#mensajeNombre');

// objeto auxiliar para datos
const datosUsuario = {
    nombre: "",
    contrasenia: "",
    telefono: "",
    hobbies: [],
    nacionalidad: ""
};

/* -------- lanzamos la validacion de nombre cuando salimos del input ------- */
inputNombre.addEventListener('blur', function () {
    datosUsuario.nombre = inputNombre.value
    //validar nombre
    if (!validarNombre(inputNombre.value)) { // si su return es false
        mensajeNombre.classList.remove('oculto');
        inputNombre.classList.add('error');
    } else {
        mensajeNombre.classList.add('oculto');
        inputNombre.classList.remove('error');
    };

});

formulario.addEventListener('change', function() {
    console.log("cambio en el form");
    
    if(validarNombre(datosUsuario.nombre)){
        console.log("todo OKKKK");
        botonSubmit.removeAttribute('disabled');
    }else{
        console.log("NOOOOOOOOO")
        
    }
})

formulario.addEventListener('submit', function (event) {
    // frenamos el envío por defecto
    event.preventDefault();
    console.log("Submit");
    
    let nacionalidad;
    radioButons.forEach(button => {
        if (button.checked) {
            nacionalidad = button.id;
        }
    });

    let listadoHobbies = [];
    checkBoxes.forEach( hobbie => {
        if(hobbie.checked){
            console.log(hobbie.id);
            listadoHobbies.push(hobbie.id);
        }
    });
    //normalizar
    console.log(normalizar(inputNombre.value, inputContrasenia.value, inputTelefono.value, listadoHobbies, nacionalidad));

    //finalizar
    // formulario.reset();
    
});

function normalizar(nom, pass, tel, listado, pais) {
    const datos = {
        name: nom.toUpperCase(),
        password: pass,
        phone: tel,
        hobbies: listado,
        country: pais
    };

    return datos;
}

function validarNombre(nombre) {
    let resultado = true;
    let nombres = datosUsuario.nombre.split(" ");
    
    nombres.forEach(nombre =>{
        let caracteresInvalidos = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "-", ","];
        // validamos y mandamos true en caso de ser correcto
        // - debe tener un maximo de 20 caracteres y minimo de 2
        if (nombre.length < 2 || nombre.length > 150) {
            resultado = false;
        }
        // - no debe contener un caracter invalido
        caracteresInvalidos.forEach(caracter => {
            if (nombre.includes(caracter)) {
                resultado = false;
            }
        });
    });

    return resultado;
}
var cont = 0; 
checkBoxes.forEach(function(box){
    box.addEventListener("change",()=>{
        if(box.checked){
            cont++;
        }
        else{
            cont--;
        }
        if (cont > 4) {
            mensajeCheckBox.classList.remove('oculto');
        }else{
            mensajeCheckBox.classList.add('oculto');
        }
        
        if(box.id == "hobbiesCocina" && box.checked){
            document.getElementById('hobbiesVideoJuegos').disabled = true ;
        }else{
            document.getElementById('hobbiesVideoJuegos').disabled = false ;
        }
        if(box.id == "hobbiesVideoJuegos" && box.checked){
            document.getElementById('hobbiesCocina').disabled = true ;
        }else{
            document.getElementById('hobbiesCocina').disabled = false ;
        }
        if(box.id == "hobbiesGuitarra" && box.checked){
            document.getElementById('hobbiesLectura').disabled = true ;
        }else{
            document.getElementById('hobbiesLectura').disabled = false ;
        }
        if(box.id == "hobbiesLectura" && box.checked){
            document.getElementById('hobbiesGuitarra').disabled = true ;
        }else{
            document.getElementById('hobbiesGuitarra').disabled = false ;
        }
        if(box.id == "hobbiesNetflix" && box.checked){
            document.getElementById('hobbiesTejer').disabled = true ;
        }else{
            document.getElementById('hobbiesTejer').disabled = false ;
        }
        if(box.id == "hobbiesTejer" && box.checked){
            document.getElementById('hobbiesNetflix').disabled = true ;
        }else{
            document.getElementById('hobbiesNetflix').disabled = false ;
        }
    });
});

radioButons.forEach(function(radiobutton){
    radiobutton.addEventListener('change', function () {
        if (radiobutton.checked && radiobutton.id == "nacionalidadArgentina") {
            mensajeRadio.classList.remove('oculto');
        }else{
            mensajeRadio.classList.add('oculto');
        }
    })
});