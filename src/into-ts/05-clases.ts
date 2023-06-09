class Persona2 {
    nombre: string
    edad: number

    constructor(nombre:string = '', edad:number = 0) {
        this.nombre = nombre
        this.edad = edad
    }
    
    imprimir(){
        console.log(`El nombre es ${this.nombre} con edad de ${this.edad}`)
    }
}

let persona:Persona2
persona = new Persona2('Juan', 23)
persona.imprimir()

class Dado {
    private valor!:number

    public tirar(){
        this.generar()
    }

    private generar() {
        this.valor = Math.floor(Math.random()*6) + 1
    }

    public imprimir() {
        console.log(`Valor: ${this.valor}`);
        
    }
}

let dado = new Dado()
dado.tirar()
dado.imprimir()

class Persona3 {
    constructor(public nombre:string ,public edad:number) {}

    imprimir(){
        console.log(`El nombre es ${this.nombre} con edad de ${this.edad}`)
    }

}

let persona3:Persona3
persona3 = new Persona3('Juan', 23)
persona3.imprimir()