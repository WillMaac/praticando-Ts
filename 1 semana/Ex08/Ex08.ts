// Crie uma função que recebe um array de objetos { nome: string, idade: number } e retorna quem é o mais velho.

type NewPerson = { name: string; age: number };

const arrayObject = (array: NewPerson[]): string => {
  const oldestPerson = array.reduce((oldest, current) =>
    current.age > oldest.age ? current : oldest
  );
  return oldestPerson.name;
};

const people: NewPerson[] = [
  { name: "Guss", age: 20 },
  { name: "Mary", age: 25 },
  { name: "João", age: 18 },
];

console.log(arrayObject(people));
