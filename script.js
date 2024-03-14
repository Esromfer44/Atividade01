const sumAges = (ages) => ages.reduce((total, age) => total + age, 0);

const calcularMedia = (ages) => sumAges(ages) / ages.length;

const encontrarMaiorIdade = (ages) => Math.max(...ages);


const encontrarIdadesImpares = (ages) => ages.filter(age => age % 2 !== 0);


const verificarMaioridade = (ages) => ages.every(age => age >= 18);


const verificarIdadesMaiorQue = (ages, value) => ages.every(age => age >= value);


const exibirIdadesMaioresQue = (ages, value) => ages.filter(age => age >= value);


const calcularMediaIdadesMaioresQue = (ages, value) => {
  const filteredAges = ages.filter(age => age >= value);
  return filteredAges.length > 0 ? calcularMedia(filteredAges) : 0;
};

const agesArray = [10, 21, 31, 40];

document.write(`<p>Soma das idades: ${sumAges(agesArray)}</p>`);
document.write(`<p>Média aritmética simples das idades: ${calcularMedia(agesArray)}</p>`);
document.write(`<p>Maior idade: ${encontrarMaiorIdade(agesArray)}</p>`);
document.write(`<p>Idades ímpares: ${encontrarIdadesImpares(agesArray)}</p>`);
document.write(`<p>Todas são maiores de idade: ${verificarMaioridade(agesArray)}</p>`);
document.write(`<p>Todas as idades são maiores ou iguais a 25: ${verificarIdadesMaiorQue(agesArray, 25)}</p>`);
document.write(`<p>Idades maiores ou iguais a 30: ${exibirIdadesMaioresQue(agesArray, 30)}</p>`);
document.write(`<p>Média das idades maiores ou iguais a 30: ${calcularMediaIdadesMaioresQue(agesArray, 30)}</p>`);