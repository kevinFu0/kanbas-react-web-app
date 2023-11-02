import db from "../Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Breadcrumb from "./Breadcrumb";
import Modules from "./Modules";
import Home from "./Home"
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";



function Courses({courses}) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
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