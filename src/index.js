import validator from './validator.js';

let contenedor1 =document.getElementById("contenedor1");
let contenedor2 =document.getElementById("contenedor2");
const texto = document.getElementById('texto');
const name = document.getElementById('name');
const btn=document.getElementById("btn");
const btn2=document.getElementById("btn2");
contenedor2.style.display="none";
contenedor3.style.display="none";


const botonera  = (event) => {
	event.preventDefault();
		contenedor1.style.display="none";
		contenedor2.style.display="block";
		validator.isValid(name.value);
		texto.innerHTML = `Tu tarjeta ${String(validator.enmascarar(name.value))} ha sido ingresada`;
};


 const regresar = (event)=> {
	 event.preventDefault();
	contenedor2.style.display="none";
	contenedor1.style.display="block";
				
};

btn.addEventListener('click', botonera);
btn2.addEventListener('click', regresar);