const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let zeroOneExpr = '';
    let morseExpr = '';
    let decodedString = '';
    for (let i = 0; i < expr.length; i + 1) {
        let value = expr.substring(i, i + 10);
        if(value !== '**********') {
          zeroOneExpr = `${value.replace(/00/g, '')}`;
          morseExpr = zeroOneExpr.replace(/10/g, '.');
          morseExpr = morseExpr.replace(/11/g, '-');
          decodedString = `${decodedString}${MORSE_TABLE[morseExpr]}`;
        }
        
        else {
          decodedString = `${decodedString} `;  
        }        
        i = i + 10;
    }
    return decodedString;
    
}

module.exports = {
    decode
}