
import Nav from "../../Nav";

import Bnm from "./Bnm";
import JsonStringfy from "./JsonStringify";

import Xyz from "./Xyz";




const q = [1,2,3,4,5]
const w = q.map(a => a === 3 ? 6: a);



const y = [123, 234, 345, 456];
const z = [234, ...y];

const q2 = {a: 123, b:234} 
const w2 = {...q2, c:456, b:345}

const q3 = ["ewq", "dsa", "asd", "tre", "zxc"];
const w3 = q3.find((a, b) => a === "tre");

const q4 = [51, 42, 33, 24, 15];
const b = q4.findIndex(w => w === 42);


// prints 456 then 234
// const qwe = { asd: 123, sdf: 234 }
// // ...qwe overwrites the sdf: 345
// const zxc = { sdf: 345, ...qwe, asd: 456, zxc: 567 }
// const { sdf, asd } = zxc
// console.log(asd)
// console.log(sdf)

// const qwe2 = 456
// const asd2 = 456
// const zxc2 = [321, qwe2, 432, asd2, 321]
// const [ewq, rew] = zxc2
// console.log(ewq)
// console.log(rew)

// 321 -> 987
const qwe = 987
const asd = 321
const ytr = [321, qwe, 432, asd, 987]
const [rew, ewq] = ytr
console.log(rew)
console.log(ewq)




const b5 = [1, 2, 3, 4, 5]
const w5 = b5.filter(q => q > 1)


const q8 = [5,4,3,2,1]
const w8 = q8.map(a => a * a)

// const rty = [123, 234, 345, 456]
// const vbn = [123, ...rty, 456]

// const qwe = {asd: 123, bnm: 345}
// const wer = {bnm: 234, ...qwe, cvb: 456}

// const qwe = ["890", "789", "678", "567", "456"]
// const wer = qwe.find((bnm, asd) => bnm === "678")

// const wer = [51, 42, 33, 24, 15]
// const qwe = wer.findIndex(bnm => bnm === 42)


// 456 432 
// const qwe = { asd: 123, sdf: 432 }
// const cxz = { sdf: 345, ...qwe,
//               asd: 456, zxc: 567 }
// const { sdf, asd } = cxz
// console.log(asd)
// console.log(sdf)




function HelloWorld() {
  return (
    <div>
      <Nav />

    




      <h1 id="hello">Hello </h1>
      


      <h1>Hello World</h1>
      <h2>midterm practice </h2>

      w = {w}<br />

      {/* label for ... makes the input field get focus when you click on Email
          title gives you a tooltip when you hover */}
      <label for="email">Email</label>
      <input
        defaultValue="alice@wonderland.com"
        placeholder="john@doe.com"
        id = "email"
        title="Type your email"/>

      {/* spread operator   */}
      <br />
      z = {JSON.stringify(z)}<br />
      <br />

      <Bnm />

      w2 = {JSON.stringify(w2)}<br />
      w3 = {w3}<br />

      <label><input type="checkbox" name="radio" id="ABC "/>ABC </label>
      <label><input type="checkbox" name="radio" id="DEF "/>DEF </label>
      <label><input type="checkbox" name="radio" id="GHI"/>GHI</label>



      b = {b}<br /> 

    

      {/* // name allows them to be mutually exclusive(one of each group can be selected) */}
      <input type="radio"  name="genre" placeholder="color"/>Comedy
      <input type="radio"  name="color" placeholder="genre"/>Red
      <input type="radio"  name="genre" placeholder="color"/>Horror
      <input type="radio"  name="color" placeholder="genre"/>Blue
      <input type="radio"  name="genre" placeholder="color"/>Drama
      <input type="radio"  name="color" placeholder="genre"/>Yellow

      <br />
      Xyz = <Xyz/> <br />

      
      <br /> w5 = {JSON.stringify(w5)}

      <br /> w8 = {JSON.stringify(w8)} <br />
      
      
      
      


    </div>
  );
}

export default HelloWorld;
