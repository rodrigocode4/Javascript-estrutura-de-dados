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
let arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
console.log('2.', arrNumbers.every(isEven))

//--------------------some()----------------------// itera cada elemento até que a função retorne true
console.log('3.', arrNumbers.some(isEven));

//--------------------forEach()----------------------// itera cada elemento como um for
numbers.forEach(x => console.log('4.', x, !!(x % 2 == 0)));

//--------------------map()----------------------// itera cada elemento, criando um novo array do mesmo tamanho
let myMap = arrNumbers.map(isEven);
console.log('5.', myMap);

//--------------------filter()----------------------// itera cada elemento, criando um novo array, retornando apenas os elementos true
let even = arrNumbers.filter(isEven);
console.log('6.', even);


//--------------------reduce()----------------------// itera cada elemento, podendo ser usado para fazer operações com todos os elemtnos do array
let sum = arrNumbers.reduce((acumulador, atual) => acumulador + atual);
console.log('7.', sum);

//--------------------for..of----------------------// itera cada elemento, de uma forma reduzida, semanhante ao forEach
for (let n of arrNumbers) {
    console.log((n % 2 == 0) ? 'par' : 'impar')
}

//--------------------@@iterator - [Symbol.iterator]()----------------------// chama cada elemento do array por métodos, para saber o seu valor. Ex: next().value
let iterator = arrNumbers[Symbol.iterator]();

console.log('8.', iterator.next().value);
console.log('8.', iterator.next().value);
console.log('8.', iterator.next().value);
console.log('8.', iterator.next().value);

//--------------------@@iterator - entrues()----------------------// método para obtenção de chave e valor de um array: [key, value]. Em caso de somente números no array teremos [posição, valor];
let aEntrues = arrNumbers.entries();

console.log('9.', aEntrues.next().value);
console.log('9.', aEntrues.next().value);
console.log('9.', aEntrues.next().value);
console.log('9.', aEntrues.next());

//--------------------@@iterator - keys()----------------------// método para obtenção da chave de um array. Em caso de somente números no array teremos, a chave será a posição deste;

let aKey = arrNumbers.keys();

console.log('10.', aKey.next());
console.log('10.', aKey.next());
console.log('10.', aKey.next().value);
console.log('10.', aKey.next().value);

//--------------------@@iterator - value()----------------------// método para obtenção do valor de um array.

let aValues = arrNumbers.values();

console.log('11.', aValues.next().value);
console.log('11.', aValues.next().value);
console.log('11.', aValues.next().value);
console.log('11.', aValues.next().value);

//--------------------Array.from()----------------------// método para criação de um novo array a partir de um existente, podendo estabelecer condições para formação do novo array. Exemplo: arrNumbers2_1, que retona true ou false;
let arrNumbers2 = Array.from(arrNumbers);

console.log('12.', arrNumbers2);


let arrNumbers2_1 = Array.from(arrNumbers, x => (x % 2 == 0));

console.log('12.1.', arrNumbers2_1);

//--------------------Array.of()----------------------// método que cria um array a partir dos argumentos passados, que são os elementos. É uma notação diferente, mas como a mesma aplicabilidade do array literal: array = [..];
let arrNumbers3 = Array.of(1, 2, 3, 4, 5, 6, 7, 8);

console.log(arrNumbers3)

// neste exemplo usamos o operador spread (...), essa notaçã de três pontinhos. Esse operador poder ser usao para receber parametros sem um limite de tamanho.
let arrNumbers3Copy = Array.of(-1, 0, ...arrNumbers3)

console.log(arrNumbers3Copy);

//--------------------fill()----------------------// este método preenche os elementos com um univo valor, que é seu primeiro paranmetro, o 2º e 3º são os índices, que determinam o inicio e fim, repectivamente, do no elementos que serão preechido, sendo que o índice passado no 3º parâmetro, não inclui seu elemento, ou seja, o preenhimento é até o índice anterior a ele;
console.log(arrNumbers3.fill(1, 2, 6));

//--------------------copyWithin()----------------------// este método copia valores de uma sequência para posições anteriores no array. O 1º parâmetro é de onde começará a inserssão de valores, os 2º e 3º são o intervalo em que seus elementos serão copiados.
let copyArray = [1, 2, 3, 4, 5, 6];

console.log(copyArray.copyWithin(1, 3, 5));

//--------------------sort()----------------------// este método ordena o array e recebe com parâmetro outro método, com dois parâmetro, no qual será tratado essa ordenação.
console.log(arrNumbers.sort((a, b) => {
    if (a < b) {
        return -1;
    }
    if (a > b) {
        return 1;
    }
    return 0;
}));

// ou
console.log(arrNumbers.sort((a, b) => a - b));

// 1. Exemplo de ordenação por idade
const friends = [
    { name: 'Rodrigo', age: 22 },
    { name: 'Randerson', age: 21 },
    { name: 'Rafael', age: 23 }
]

function comparePerson(a, b) {
    if (a.age < b.age) {
        return -1;
    }
    if (a.age > b.age) {
        return 1;
    }
    return 0;
}

console.log(friends.sort(comparePerson));

// 2. Exemplo de ordenação de string
const names = ['Ana', 'ana', 'jhon', 'Jhon'];
console.log(names.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) {
        return -1;
    }
    if (a.toLowerCase() > b.toLowerCase()) {
        return 1;
    }
    return 0;
}));
//--------------------indexOf() e lastIndexOf()----------------------// 
const names2 = ['Maève','Maeve']
console.log(names2.sort((a, b) => {
    return a.localeCompare(b)
}));

console.log(arrNumbers.indexOf(10));
console.log(arrNumbers.indexOf(100));

arrNumbers.push(10) 
console.log(arrNumbers.lastIndexOf(10)); // retorna 15 não sei pq
console.log(arrNumbers.lastIndexOf(100));

//--------------------find() e findIndex()----------------------// 
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function multipleOf13(e,) {
    return !!(e % 13 === 0) ? true : false;
}

console.log(nums.find(multipleOf13)); //devolve o elemento em determinada condição
console.log(nums.findIndex(multipleOf13)); // devolve o índice de um elemento de determindada condição

//--------------------includes()----------------------//verifica se existe um determinado elemento no array

console.log(nums.includes(11)); 
console.log(nums.includes(18));

//--------------------toString()----------------------//converte os elementos para uma única string
console.log(nums.toString());

//--------------------join()----------------------// insere um separador entre os caracteres da string
console.log(nums.join('-'));


// ----------- class TypedArray() -------------------//

let length = 8;
let float64 = new Float64Array(length);

let array64 = []
array64.length = length

for (let i = 0; i < length; i++) {
    float64[i] = i + 1;
    array64[i] = i + 2;
}
console.log(float64);
console.log(array64);

// tutorial para trabalhar com arrays tipados: goo.gl/kZBsGx 