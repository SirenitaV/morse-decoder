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
        
        
        //console.log(decodedString);
        i = i + 10;
        // for (let entry of MORSE_TABLE) {
        //     console.log(entry);
        // }
        // for (let j = 0; j < Object.keys(MORSE_TABLE); j ++) {
        //   if(MORSE_TABLE[j] === morseExpr) {
        //       decodedString = `${decodedString}${MORSE_TABLE[j]}`;
        //       //console.log(morseExpr)
        //       console.log(MORSE_TABLE[j]);
        //       j = j + 1;
        //   }
        //   else {
        //      j = j + 1; 
        //   }            
        // }
        
        
        
    }
    return decodedString;
    
    //console.log(Object.values(MORSE_TABLE));
    
}

module.exports = {
    decode
}
