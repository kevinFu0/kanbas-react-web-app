import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import './index.css';

function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   name: 'New Course',
  //   number: 'New Number',
  //   startDate: '2023-09-10',
  //   endDate: '2023-12-15',
  // });

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };

  // // add course at the end of the array
  // // overriding _id to current time stamp
  // const addNewCourse = () => {
  //   setCourses([...courses, { ...course, _id: new Date().getTime() }]);
  // };

  // // makes a new array of courses w/o the courseId
  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

  return (
    <div className="wd-dashboard-content">
      <h1>Dashboard</h1>
      <button onClick={addNewCourse}>Add</button>
      <button onClick={updateCourse}>Update</button>

      <h5>Course</h5>
      <input
        value={course.name}
        className="form-control"
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control"
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control"
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />

      <hr />
      <h2>Published Courses ({courses.length})</h2>
      <div className="wd-dashboard-grid d-flex flex-row flex-wrap">
        <div className="wd-card-container row rows-col-4">
          {courses.map((course) => (
            <div className="col">
              <Link
                key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="list-group-item"
              >
                <div class="card h-240">
                  <img src="dice.jpg" class="card-img-top" alt="..." />
                  <h5 class="card-title">{course.name}</h5>
                  <p class="card-text">{course.number}</p>

                  {/* // puts course info into the course state variable */}
                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
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
