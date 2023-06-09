interface Persona1 {
    nombre: string,
    grupo: () => void,
    edad: number,

}

const suma = (a: number, b: number): number => {
    return a + b
}

const multiplicar = (a: number, b?: number, base: number = 2): number => {
    return a * base
}


const utl = (alumno: Persona1, cuatrimestre: number): void => {
    alumno.edad = 21
    console.log(alumno)
}

const nuevoAlumno: Persona1 = {
    nombre: 'Mario',
    edad: 25,
    grupo() {
        console.log('IDGS902', this.edad)
    }
}

//funcion anonima

const funcSumar = function (n1: number, n2: number): number {
    return n1 + n2
}

console.log(funcSumar(1, 2));


function calcular(n1:number, n2:number, n3?:number):number {
    return n3 ? n1+n2+n3 : n1+n2
}

console.log(calcular(1,2,3));
console.log(calcular(1,2));

//parametros Rest en funciones

function calcular2(...valores:number[]):number{
    let suma = 0;

    valores.forEach(element => {
        suma += element
    });

    return suma;
}

console.log(calcular2(1,2,35, 4));
console.log(calcular2(1,1,1,1,1,1,1));



