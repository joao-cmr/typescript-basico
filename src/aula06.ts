let numeros: number[] = [ 20, 30, 40, 50]
//let numeros: Array<number> = [1, 2, 3, 4, 5]
//let numeros: (number | string)[] = [1, 2, 3, 4, 5, 'seis']

numeros.push(60)
numeros.unshift(10)
numeros.pop()
numeros.shift() 
console.log(numeros)

let numeros_ro: ReadonlyArray<number> = [ 200, 300, 400, 500]
//numeros_ro.push(600) // erro
//numeros_ro.unshift(100) // erro
//numeros_ro.pop() // erro
//numeros_ro.shift() // erro
//Não disponível métodos de modificação em ReadonlyArray
console.log(numeros_ro)