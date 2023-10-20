import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

import "./ModuleList.css"

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group wd-assignment-table">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item" 
           style = {{marginTop: "10px"}}>
             <h3>{module.name}</h3>
             <p>{module.description}</p>
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;