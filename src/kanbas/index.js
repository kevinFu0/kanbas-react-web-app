import KanbasNavigation from './KanbasNavigation';
import { Routes, Route, Navigate } from 'react-router';
import Dashboard from './Dashboard';
import Courses from './Courses';

import store from './store';
import { Provider } from 'react-redux';

import db from './Database';
import { useState } from 'react';

function Kanbas() {
  const [courses, setCourses] = useState(db.courses);
  const [course, setCourse] = useState({
    name: 'New Course',
    number: 'New Number',
    startDate: '2023-09-10',
    endDate: '2023-12-15',
  });

  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  // add course at the end of the array
  // overriding _id to current time stamp
  const addNewCourse = () => {
    setCourses([
      ...courses,
      { ...course, _id: new Date().getTime().toString() },
    ]);
  };

  // makes a new array of courses w/o the courseId
  const deleteCourse = (courseId) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  return (
    // wrap your application with the Provider so all
    // child elements can read and write to the store

    <Provider store={store}>
      <div className="d-flex">
        <div>
          <KanbasNavigation />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route
              path="Dashboard"
              element={
                <Dashboard
                  courses={courses}
                  course={course}
                  setCourse={setCourse}
                  addNewCourse={addNewCourse}
                  deleteCourse={deleteCourse}
                  updateCourse={updateCourse}
                />
              }
            />
            <Route
              path="Courses/:courseId/*"
              element={<Courses courses={courses} />}
            />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}
export default Kanbas;
