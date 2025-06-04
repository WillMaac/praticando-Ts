//Crie uma função que recebe um parâmetro que pode ser "asc" ou "desc" e retorna se é crescente ou decrescente.


const ascendingOrDescending = (a: 'asc' | 'desc') =>{
 if(a === 'asc'){
    return 'Crescente'
    
}else{
    return 'Descrescente'
    
}
}

console.log(ascendingOrDescending('asc'))