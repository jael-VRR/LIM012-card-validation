const validar=(name) =>{
    const strReverse= name.split("").reverse();
	let suma=0;
	const arr = [];
	for (let i = 0; i <=strReverse.length-1; i++){
		if(i%2!==0){
			const n=parseInt(strReverse[i])
			const doble = n * 2
			if(doble > 9) {
				const division=doble%10+1
				suma+=parseInt(division);
			} else {
				suma +=parseInt(doble);
			}
		} else {
		    suma+=parseInt(strReverse[i]);
		}
	}
	if(suma%10===0){
		console.log(true);
	} else {
		console.log(false);
	}
}

const maskify = (name) => {
	let ocultar="";
	if (name.length <=4){
		return name
	}else{
		const charsToRemove = name.length - 4;
		let sliced = name.slice(charsToRemove, );
		for (let i=0; i<=name.length; i++){
			ocultar+="#"; 
		const modulo=ocultar.concat(sliced);
		return modulo
		}
    }
}

const validator = {

	isValid: (name)=>{
	return	validar(name);
	},

    enmascarar: (name) =>{
	 return   maskify(name);	  
	}
	
};
		

export default validator;
