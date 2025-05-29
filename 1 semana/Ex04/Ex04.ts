/*Crie uma função que recebe uma pessoa (do tipo anterior) e retorna uma mensagem:
"Maria tem 25 anos e está ativa" ou "João tem 30 anos e não está ativo".*/

type Person1 = {
  name: string;
  age: number;
  active: boolean;
};
const personActive = (person: Person1) => {
  if (person.active) {
    return `${person.name} tem ${person.age} está ativa`;
  } else {
    return `${person.name} tem ${person.age} e não está ativo`;
  }
};

console.log(personActive({ name: "Maria", age: 25, active: true }));
console.log(personActive({ name: "João", age: 30, active: false }));
