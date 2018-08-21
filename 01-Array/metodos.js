//--------------------concat()----------------------// concatena elementos do array em um novo
let zero = 0;
let positiveNumbers = [1, 2, 3];
let negativeNumbers = [-3, -2, -1];
let numbers = negativeNumbers.concat(zero, positiveNumbers);
console.log('1.', numbers);

//--------------------every()----------------------// itera cada elemento até que a função retorne false
let isEven = x => {
    console.log(x);
    return !!(x % 2 == 0);
}
let arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log('2.', arrNum.every(isEven))

//--------------------some()----------------------// itera cada elemento até que a função retorne true
console.log('3.', arrNum.some(isEven));

//--------------------forEach()----------------------// itera cada elemento como um for
numbers.forEach(x => console.log('4.', x, !!(x % 2 == 0)));

//--------------------map()----------------------// itera cada elemento, criando um novo array do mesmo tamanho
let myMap = arrNum.map(isEven);
console.log('5.', myMap);

//--------------------filter()----------------------// itera cada elemento, criando um novo array, retornando apenas os elementos true
let even = arrNum.filter(isEven);
console.log('6.', even);


//--------------------reduce()----------------------// itera cada elemento, podendo ser usado para fazer operações com todos os elemtnos do array
let sum = arrNum.reduce((acumulador, atual) => acumulador + atual);
console.log('7.', sum);

