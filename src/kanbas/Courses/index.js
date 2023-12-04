import { Navigate, Route, Routes, json, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Breadcrumb from "./Breadcrumb";
import Modules from "./Modules";
import Home from "./Home"
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";

import { React, useState, useEffect } from "react";
import axios from "axios";



function Courses() {
  const { courseId } = useParams();

  const API_BASE = process.env.REACT_APP_API_BASE;

  // const API_BASE = 'http://localhost:4000/api';
  const URL = `${API_BASE}/courses`;
 
   //populate the course state variable from the server
  const [course, setCourse] = useState({});
  


  const findCourseById = async (courseId) => {
    // console.log(JSON.stringify(courseId));
    
    const response = await axios.get(
      `${URL}/${courseId}`
    );
    setCourse(response.data);
  };


  // on load, fetch the course from the server by its id
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);



 
  return (
   
    <div>
      <Breadcrumb />
      <hr style={{width: "80vw", marginLeft: "10px"}}/>
      <h1 style = {{marginLeft: "20px"}}>Course {course.name}</h1>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route
              path="Assignments/:assignmentId"
              element={<AssignmentEditor/>}
            />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>

    </div>
  );
}
export default Courses;