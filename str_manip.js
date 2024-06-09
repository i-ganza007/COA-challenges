// Check if string is a text , not null , undefined or a number 
// Use the reverse method by turning the elements into an array and the joining them again 
new_str = [];
final_str = [];
function Str_manip(text){
    if (typeof text !== 'string'){
        return 'This input is not a string';
    }
    if (text.length % 3 ===0){
        return text.split('').reverse().join('');
    }
    else if (text.length % 5 === 0){
        text = text.replace(" ","");
        for (let i=0;i<text.length;i++){
            new_str.push(text.charCodeAt(i))
        }
        return new_str.join(" ");
    }
    else if (text.length % 3 === 0 && text.length() % 5 === 0){
        text = text.split('').reverse().join('');
        for (let j=0;j<text.length-1;j++){
            final_str.push(text.charCodeAt(j))
        }
        return final_str.join("").replace(" ","");
    }
}

console.log(Str_manip("Chocolate Chip Cookie"))