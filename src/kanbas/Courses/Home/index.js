import ModuleList from '../Modules/ModuleList';

import { FaEllipsisV} from 'react-icons/fa';
import {AiOutlinePlus } from 'react-icons/ai';




import React from 'react';

function Home() {
  const statusButtons = [
    'Import Existing Content',
    'Import From Commons',
    'Choose Home Page',
    'View Course Stream',
    'New Announcement',
    'New Analytics',
    'View Course Notifications',
  ];

  return (
    <div className="row">
      <div className="col-9">
        <button className="btn btn-secondary float-end mx-1">
          <FaEllipsisV />
        </button>
        <button className="btn btn-danger float-end mx-1">
          <AiOutlinePlus />
          Module
        </button>
        <div class="dropdown float-end mx-1">
          <select class="form-select btn btn-secondary">
            <option selected>Publish All</option>
            <option value="1">Week 1</option>
            <option value="2">Week 2</option>
            <option value="3">Week 3</option>
          </select>
        </div>
        <button className="btn btn-secondary float-end mx-1">
          View Progress
        </button>
        <button className="btn btn-secondary float-end mx-1">
          Collapse All
        </button>
        <br></br>
        <br></br>
        <ModuleList />
      </div>

      <div className="col-3 pe-5">
        <div class="d-flex flex-row flex-grow1">
          <button class="btn btn-outline-secondary" type="button">Unpublish</button>
          <button class="btn btn-outline-secondary" type="button">Published</button>
        </div>

        <h1>Course Status</h1>
        <ul className="d-flex flex-column mt-3">
          {statusButtons.map((buttonText, index) => (
            <li className=" wd-course-status-list" key={index}>
              <a href="#" className="btn btn-secondary">
                {buttonText}
              </a>
            </li>
          ))}
        </ul>
        <h2>Coming Up</h2>
        <hr></hr>
        <a href="#">View Calendar</a>
        <ul>
          <li>
            <a href="#">Lecture CS4550.12631.202410 Sep 7 at 11:45am</a>
          </li>
          <li>
            <a href="#">Lecture CS4550.12631.202410 Sep 11 at 11:45am</a>
          </li>
          <li>
            <a href="#">CS5610 06 SP23 Lecture Sep 11 at 6pm</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Home;
