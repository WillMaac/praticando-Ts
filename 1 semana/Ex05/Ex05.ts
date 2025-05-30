//Crie um array tipado de números e faça uma função que retorne a média.

function average(grades: number[]): number {
  const sum = grades.reduce((acc, curr) => acc + curr, 0);
  return sum / grades.length;
}

const grades = [10, 5, 5];
console.log(average(grades).toFixed(2));
