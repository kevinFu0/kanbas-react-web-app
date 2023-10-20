import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";

function Dashboard() {
  const courses = db.courses;
  return (
    <div className = "wd-dashboard-content">
      <h1>Dashboard</h1>
      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div className="wd-dashboard-grid d-flex flex-row flex-wrap">
        <div className="wd-card-container row rows-col-4">
          
        {courses.map((course) => (
          <div className="col">
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
             <div class="card h-100">
                  <img src="dice.jpg" class="card-img-top" alt="..." />
                  <h5 class="card-title">{course.name}</h5>
                  <p class="card-text">This is a card</p>
                </div>
          </Link>
          </div>
          
        ))}
        </div>
        
      </div>
    </div>
  );
}
export default Dashboard;