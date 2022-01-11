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
    let result = "";
    let char = "";
    for (let i = 0; i < expr.length; i += 10) {
        char = expr.slice(i, i + 10);
        if (char === "**********") {
            result += " ";
            continue;
        }
        let decodeChar = "";
        for (let j = 0; j < char.length; j += 2) {
            switch (char.slice(j, j + 2)) {
                case "10": 
                    decodeChar += ".";
                    break;
                case "11": 
                    decodeChar += "-";
                    break;
            }
        }
        result += MORSE_TABLE[decodeChar];
    }
    return result;
    // write your solution here
}

module.exports = {
    decode
}