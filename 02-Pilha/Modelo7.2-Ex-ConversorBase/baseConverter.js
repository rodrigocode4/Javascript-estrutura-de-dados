const Stack = require('../Modelo2-Classes/stack');

function baseConverter(decNumber, base) {
    const remStack = new Stack();
    let rem;
    let baseString = '';
    let digits = ['0', '1', '2', '3',
                  '4', '5', '6', '7',
                  '8', '9', 'A', 'B',
                  'C', 'D', 'E', 'F'] //'0123456789ABCDEF'
    while (decNumber > 0) {
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }
    while (!remStack.isEmpty()) {
        baseString += digits[remStack.pop()];
    }
    return baseString;
}

module.exports = baseConverter;