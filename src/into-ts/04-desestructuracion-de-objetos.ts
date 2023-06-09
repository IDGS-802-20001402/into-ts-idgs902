// desestructuracion de objetos y arreglos

interface Alumno1 {
    matricula:number,
    nombre:string,
    edad:number,
    correo:string,
    grupo:Grupo
}

interface Grupo {
    grupo:string,
    year:number
}

const alumno1:Alumno1 = {
    matricula:12345,
    nombre: "Mario",
    edad:23,
    correo: "mario@gmail.com",
    grupo: {
        grupo: "IDGS",
        year: 2023
    }
}


console.log(`La matricula es: ${alumno1.matricula}`);
console.log(`El año del grupo es: ${alumno1.grupo.year}`)


const { matricula, grupo:xx } = alumno1
const { grupo, year:anio } = xx

console.log(`La matricula es: ${alumno1.matricula}`);
console.log(`El año del grupo es: ${alumno1.grupo.year}`)

//desestructuración de arreglos

const gps:string[] = ['IDGS', 'ENV', 'REDES']

console.log(`grupo 1: ${gps[0]}`);
console.log(`grupo 2: ${gps[1]}`);
console.log(`grupo 3: ${gps[2]}`);
console.log(`grupo 4: ${gps[3]}`);

const [a,,b] = gps

console.log(`Grupo 1 ${a}`);

