import React from 'react';
import { Link, useParams } from 'react-router-dom';
import db from '../../Database';

import { FaEllipsisV } from 'react-icons/fa';
import { AiFillCheckCircle } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';

import './index.css';

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div>
      <h2>
        Assignments for course {courseId}
        <FaEllipsisV className="float-end" />
        <AiOutlinePlus className="float-end" />
        <span class="border border-secondary rounded-pill p-1 float-end">
          40% of Total
        </span>
      </h2>

      <table class="">
        <tbody>
          <tr>
            <td>
              <input
                class="form-control w-100"
                placeholder="Search for Assignments"
              ></input>
            </td>
            <td>
              <button class="btn btn-secondary float-end">
                <FaEllipsisV />
              </button>
              <button class="btn btn-danger float-end">
                <AiOutlinePlus />
                Assignment
              </button>
              <button class="btn btn-secondary float-end">
                <AiOutlinePlus />
                Group
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="list-group wd-assignment-table">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
            {assignment.title}
            <FaEllipsisV className="wd-assignment-ellipsis float-end" />
            <AiFillCheckCircle className="wd-assignment-check float-end" />

            
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;
