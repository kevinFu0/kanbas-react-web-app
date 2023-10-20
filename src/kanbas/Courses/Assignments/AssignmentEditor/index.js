import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import db from '../../../Database';

import './index.css';

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log('Actually saving assignment TBD in later assignments');
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div>
      <h2>Assignment Name</h2>
      <input value={assignment.title} className="form-control mb-2" />

      <textarea class="form-control">
        This is the Assignment Description
      </textarea>

      <div class="row">
        <div class="col-2">
          <div class="float-end">Points</div>
        </div>
        <div class="col-8">
          <input class="form-control w-50" id="input-2" value="100" />
        </div>
        <div class="col-2"></div>
      </div>

      <br />

      <div class="row">
        <div class="col-2">
          <div class="float-end">Assignment Group</div>
        </div>
        <div class="col-8">
          <select class="form-select w-50">
            <option selected>ASSIGNMENTS</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div class="col-2"></div>
      </div>

      <div class="row wd-row5">
        <div class="col-2">
          <div class="float-end">Display Grade as</div>
        </div>
        <div class="col-8">
          <select class="form-select w-50">
            <option selected>PERCENTAGE</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div class="col-2"></div>
      </div>

      <div class="row">
        <div class="col-2">
          <div class="float-end"></div>
        </div>
        <div class="col-8">
          <input class="form-check-input" type="checkbox" id="check-1" />
          <label class="form-check-label" for="check-1">
            Do not count this assignment towards the final grade
          </label>
        </div>
        <div class="col-2"></div>
      </div>

      <div class="row wd-row5">
        <div class="col-2">
          <div class="float-end">Submission Type</div>
        </div>
        <div class="col-8">
          <select class="form-select w-50">
            <option selected>Online</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>

      <div class="row wd-row5">
        <div class="col-2">
          <div class="float-end my-2">Online Entry Options</div>
        </div>
        <div class="col-8">
          <input
            type="checkbox"
            value="TEXT_ENTRY"
            name="check-genre"
            id="chkbox-text-entry"
            checked
          />
          <label for="chkbox-text-entry">Text Entry</label> <br />
          <input
            type="checkbox"
            value="WEBSITE_URL"
            name="check-genre"
            id="chkbox-website-url"
            checked
          />
          <label for="chkbox-website-url">Website URL</label> <br />
          <input
            type="checkbox"
            value="MEDIA_RECORDINGS"
            name="check-genre"
            id="chkbox-media-recordings"
            checked
          />
          <label for="chkbox-media-recordings">Media Recordings</label> <br />
          <input
            type="checkbox"
            value="STUDENT_ANNOTATION"
            name="check-genre"
            id="chkbox-student-annotation"
          />
          <label for="chkbox-student-annotation">Student Annotation</label>
          <br />
          <input
            type="checkbox"
            value="FILE_UPLOADS"
            name="check-genre"
            id="chkbox-file-uploads"
          />
          <label for="chkbox-file-uploads">File Uploads</label>
        </div>
      </div>

      <div class="row wd-row5">
        <div class="col-2">
          <div class="float-end my-2">Submission Attempts</div>
        </div>
        <div class="col-8">
          <select class="form-control w-50">
            <option value="Edit">Unlimited</option>
          </select>
        </div>
      </div>

      <div class="row wd-row5">
        <div class="col-2">
          <div class="float-end my-2">Plagiarism Review</div>
        </div>
        <div class="col-8">
          <select class="form-control w-50">
            <option value="Edit">None</option>
          </select>
        </div>
      </div>

      <div class="row wd-row5">
        <div class="col-2">
          <div class="float-end my-2">Group Assignment</div>
        </div>
        <div class="col-8">
          <input
            type="checkbox"
            value="COMEDY"
            name="check-genre"
            id="chkbox-comedy"
            checked
          />
          <label for="chkbox-group">This is a group assignment</label>
        </div>
      </div>

      <div class="row wd-row5">
        <div class="col-2">
          <div class="float-end my-2">Peer Reviews</div>
        </div>
        <div class="col-8">
          <input
            type="checkbox"
            value="COMEDY"
            name="check-genre"
            id="chkbox-comedy"
            checked
          />
          <label for="chkbox-peer">Require Peer Reviews</label>
        </div>
      </div>

      <div class="row wd-row5">
        <div class="col-2">
          <div class="float-end my-2">Assign To</div>
        </div>
        <div class="col-8">
          <input class="form-control w-50" value="Everyone" />
        </div>
      </div>

      <div class="row wd-row5">
        <div class="col-2">
          <div class="float-end my-2">Due</div>
        </div>
        <div class="col-8">
          <input type="date" value="2023-10-10" class="form-control w-50" />
        </div>
      </div>

      <div class="row wd-row5">
        <div class="col-2">
          <div class="float-end my-2">Available From</div>
        </div>
        <div class="col-8">
          <input type="date" value="2023-10-01" class="form-control w-50" />
        </div>
      </div>

      <div class="row wd-row5">
        <div class="col-2">
          <div class="float-end my-2">Available To</div>
        </div>
        <div class="col-8">
          <input type="date" value="2023-10-04" class="form-control w-50" />
        </div>
      </div>

      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger"
      >
        Cancel
      </Link>
      <button onClick={handleSave} className="btn btn-success me-2">
        Save
      </button>
    </div>
  );
}

export default AssignmentEditor;
