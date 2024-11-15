const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

function getLatinCharacterList(text){
    text = "Hello, world";
    let characters = text.split('');
    // console.log(characters)
}
getLatinCharacterList()

function translateLatinCharacter(character){
    for(let [key, value] of Object.entries(latinToMorse)){
        // console.log(`${key}: ${value}`);
        if(character === key){
            return(value) 
        }
      }
}
console.log(translateLatinCharacter('B'))