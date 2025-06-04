/* Crie um tipo que representa ou um número ou uma string, e uma função que formata:
Se for número adiciona 2 casas decimais.
Se for string transforma em maiúscula.*/

type NumberOrString = {
  x: number | string;
};

const verification = (y: NumberOrString) => {
  if (typeof y.x == "number") {
    return y.x.toFixed(2);
  } else {
    return y.x.toUpperCase();
  }
};

console.log(verification({ x: 10 }));
console.log(verification({ x: "Testando" }));
