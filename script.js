//console.log(document.body);

let counter = 0;

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

plus.onclick = () => {
    counter++;
}

minus.onclick = () => {
    counter--;
}