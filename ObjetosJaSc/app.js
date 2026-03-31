let alumno = {
    id: 424131111,
    nombre: "Ivan",
    primerApellido: "Cruz",
    segundoApellido: "Trejo",
    edad: 20,
    titulado: false,
    egresado: {
        estado: true
    },
    domicilio: { 
        calle: {
            nombre: "Folkloricos M.",
            numero: "...",
            interior: "...",
            manzana: 104,
            lote: 5
        }, 
        colonia: "Compositores M",
        CP: "07100",
        alcaldia: "Gustavo A. Madero",
        estado: "CDMX",
        pais: "México",
        continente: "América" 
    },
    kinder: {
        nombre: "Cuahutli",
        actividadPrimerdia() {
            console.log("Pintar con crayolas");
        },
        actividadRecurrente() {
            console.log("Jugar atrapadas");
        },
        datosMiss: {
            nombre: "Fer",
            edad: 28,
            estudios: "Maestría"
        }
    },
    primaria: {
        nombre: "Margarita Lopez",
        comer(comida) {
            return `Ahora está comiendo ${comida}`;
        },
        mensaje(mensajeAlumno) {

            return `${this.nombre} es la escuela y el alumno debe ir a ${mensajeAlumno}`;
        }
    }
};
console.log(alumno.kinder.datosMiss.nombre); 
console.log(alumno.primaria.mensaje("Dirección"));
console.log(alumno.primaria.comer("Pastel"));