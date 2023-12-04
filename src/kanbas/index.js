import KanbasNavigation from './KanbasNavigation';
import { Routes, Route, Navigate } from 'react-router';
import Dashboard from './Dashboard';
import Courses from './Courses';
import Signin from './users/signin';
import Account from './users/account';
import Signup from './users/signup';

import UserTable from './users/table';


import store from './store';
import { Provider } from 'react-redux';

import { React, useEffect, useState } from 'react';

import axios from "axios";

function Kanbas() {
  const [courses, setCourses] = useState([]);

  const API_BASE = process.env.REACT_APP_API_BASE;
  console.log(process.env.REACT_APP_API_BASE);
  // const API_BASE = 'http://localhost:4000/api';

  // console.log(API_BASE);
  const URL = `${API_BASE}/courses`;
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  // use effect to fetch data from the server
  // happens only once when the component is rendered
  useEffect(() => {
   
    findAllCourses();
  }, []);


  const [course, setCourse] = useState({
    name: 'New Course',
    number: 'New Number',
    startDate: '2023-09-10',
    endDate: '2023-12-15',
  });

  // puts the updated course to the server
  // swaps the updated course with the old course in courses array
  const updateCourse = async () => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
    setCourse({name: "New Title", number: "New Number"} );
  };

  // calls post request to add new course to the server
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses([
      ...courses,
      response.data
    ]);
    setCourse({name: "New Title", number: "New Number"} );
  };



  // deletes course from the server 
  // filters out the course from the courses array
  const deleteCourse = async (courseId) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );

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

            <Route path="/" element={<Navigate to="signin" />} />
            <Route path="/Account2" element={<Account />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Account2/:id" element={<Account />} />
            <Route path="/admin/users" element={<UserTable />} />

            {/* <Route path="Account" element={<h1>Account</h1>} /> */}

            <Route path="/signin" element={<Signin />} />
            
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
