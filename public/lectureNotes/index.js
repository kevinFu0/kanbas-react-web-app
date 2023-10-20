import {add, subtract} from './math.js';

console.log(add(1,2));

document.getElementById("hello").innerHTML = "Hello World! " + subtract(5, 2);
const arr1 = [
  {id: 1, text: "wow"},
  {id: 2, text: "wow2"},
  {id: 3, text: "wow3"},

];
document.write("<ul>");

function renderArr1(arr1) {
  arr1.forEach((item) => {
    document.write("<li>" + item.text + "</li>");
  });
  document.write("</ul>");
}

renderArr1(arr1);




console.log("reee");
alert("Hello World!");