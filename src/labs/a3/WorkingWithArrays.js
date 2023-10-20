import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import JsonStringfy from "./JsonStringify";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";



var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];

let variableArray1 = [
   functionScoped,   blockScoped,
   constant1,        numberArray1,   stringArray1
];




console.log("working with arrays");


function WorkingWithArrays() {
  return (
    <>
      <h3>Working With Arrays</h3>
      numberArray1 = {numberArray1}<br />
      stringArray1 = {stringArray1}<br />
      variableArray1 = {variableArray1}<br />
      <ArrayIndexAndLength />
      <AddingAndRemovingDataToFromArrays />
      <ForLoops />
      <MapFunction />
      <JsonStringfy/> 
      <FindFunction/>
      <FindIndex/>
      <FilterFunction/>
      <TemplateLiterals/>
      <House/>
      <Spread/>
      <Destructing/>
      <FunctionDestructing/>
    
    
    
    </>





  );


}

export default WorkingWithArrays;