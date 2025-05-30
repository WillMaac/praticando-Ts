//Crie uma função que recebe um array de strings e retorna a string mais longa.

const longestString = (words: string[]): string => {
    return words.reduce((longest, current) =>
        current.length > longest.length ? current : longest
    , "");
};


const animal = ["cachorro", "gato", "elefante", "rinoceronte"];
console.log(longestString(animal));





