const validator = {
	isValid: (name) => {
		
		const strReverse = name.split("").reverse();
		let suma = 0;
		for (let i = 0; i <= strReverse.length - 1; i++) {
			if (i % 2 !== 0) {
				const n = parseInt(strReverse[i])
				const doble = n * 2
				if (doble > 9) {
					const division = doble % 10 + 1
					suma += parseInt(division);
				} else {
					suma += parseInt(doble);
				}
			}
			else {
				suma += parseInt(strReverse[i]);
			}
		}

		//let verificado = false;
		if (suma % 10 === 0) {
			alert("tarjeta válida")
			return true
		}else{
		alert("ingrese número válido de tarjeta")
		return false;
		//console.log(verificado);

		}
	},

	maskify: (name) => {
		let ocultar = "";
		if (name.length <= 4) {
			return name
		}
		else {
			const charsToRemove = name.length - 4;
			const sliced = name.slice(charsToRemove,);
			for (let i = 0; i < name.length-4; i++) {
				ocultar += "#";
			}
				const modulo = ocultar + sliced;
				return modulo;
			}
		}

	
};




export default validator;
