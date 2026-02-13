class Nome{
    sobrenome:string
    nome:string 
    constructor(nome:string, sobrenome:string){
        this.nome=nome;
        this.sobrenome=sobrenome;
    }
}

let c1=new Nome("João","Moreira Rodrigues");
console.log(c1.nome);
console.log(c1.sobrenome);