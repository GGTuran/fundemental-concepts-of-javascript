// string slice,join,concat and includes
const sentence = 'Gotta be MERN stack soon';

let reverse = '';
for (const letter of sentence){
    reverse = letter + reverse;
}
console.log(reverse);
// shortcut
const reversed = sentence.split('').reverse().join('');
console.log(reversed);