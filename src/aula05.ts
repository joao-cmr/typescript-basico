
let vteste:string|number;
vteste = "Teste";
vteste = 10;

let cursos=["JavaScript","TypeScript", "Python"];
let valores = [10,20,30,40,50];

cursos.push("Java");
valores.push(60);

console.log(cursos);
console.log(valores);
console.log(vteste);

//cuidado ao usar any, pois perde-se a tipagem e o controle do código, podendo gerar erros em tempo de execução
// o mesmo vale para o union, pois pode-se atribuir qualquer tipo de valor, o que pode gerar erros em tempo de execução