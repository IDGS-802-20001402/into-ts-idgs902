let vector1:Array<number> = [9,8,7,6]
vector1.push(10)
vector1[1] = 22
for (const tem of vector1) {
    console.log(tem)
}

//------------------------------------//

let tem:(number|string)[] = []
tem.push('Mario')
tem.push('123')

//------------------------------------//

interface Alumno {
    matricula?:number,
    nombre:string,
    edad:number,
    email:string
}

const alumno:Alumno={
    matricula:1234,
    nombre: 'Carlos',
    edad: 23,
    email: "cristian@gmail.com"
}

console.log(alumno)