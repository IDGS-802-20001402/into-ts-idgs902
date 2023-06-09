class PilaEnteros {
    private vec:number[] = []

    insertar(...x:number[]){
        for (const number of x) {
            this.vec.push(number)
        }
    }

    extraer() {
        return this.vec.length > 0 ? this.vec.pop() : null
    }
}

class PilaStirng {
    private vec:string[] = []

    insertar(...x:string[]){
        for (const string of x) {
            this.vec.push(string)
        }
    }

    extraer() {
        return this.vec.length > 0 ? this.vec.pop() : null
    }
}

let pila1 = new PilaEnteros()
pila1.insertar(1,2,4,5,4,3)
pila1.extraer()

let pila2 = new PilaStirng()
pila2.insertar('Hola', 'Mundo', '!')
pila2.extraer()

// Clases genericas

class PilaGenerica<T> {
    private vec:T[] = []

    insertar(...x:T[]){
        for (const value of x) {
            this.vec.push(value)
        }
    }

    extraer() {
        return this.vec.length > 0 ? this.vec.pop() : null
    }
}

let pila3 = new PilaGenerica<Number>()
pila1.insertar(1,2,4,5,4,3)
pila1.extraer()

let pila4 = new PilaGenerica<String>()
pila2.insertar('Hola', 'Mundo', '!')
pila2.extraer()