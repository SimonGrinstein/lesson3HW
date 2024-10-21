//console.log(document.body);

let counter = 0;

document.getElementById("counter").innerHTML= counter;

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

plus.onclick = () => {
    counter++;
    //console.log("counter plus:" + counter);
    document.getElementById("counter").innerHTML= counter;
}

minus.onclick = () => {
    counter--;
    //console.log("counter minus:" + counter);
    document.getElementById("counter").innerHTML= counter;
}