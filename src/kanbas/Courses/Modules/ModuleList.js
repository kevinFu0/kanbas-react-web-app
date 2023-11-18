import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


import { useSelector, useDispatch } from 'react-redux';
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from './modulesReducer';

import * as client from "./client";

import { createModule, findModulesForCourse } from "./client";


import './ModuleList.css';

function ModuleList() {
  const { courseId } = useParams();
  // const [modules, setModules] = useState(db.modules);
  // const [module, setModule] = useState({
  //   name: 'New Module',
  //   description: 'New Description',
  //   course: courseId,
  // });

  const handleAddModule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

   const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };





  useEffect(() => {
    findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);


  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  // const addModule = (module) => {
  //   setModules([
  //     { ...module, _id: new Date().getTime().toString() },
  //     ...modules,
  //   ]);
  // };

  // const deleteModule = (moduleId) => {
  //   setModules(modules.filter((module) => module._id !== moduleId));
  // };

  // const updateModule = () => {
  //   setModules(
  //     modules.map((m) => {
  //       if (m._id === module._id) {
  //         return module;
  //       } else {
  //         return m;
  //       }
  //     })
  //   );
  // };

  return (
    <ul className="list-group wd-assignment-table">
      <li className="list-group-item2">
        <button
          onClick={handleAddModule}>
          Add
        </button>
        <button onClick={() => handleUpdateModule()}> Update</button>

        <input
          className="form-control w-100"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <textarea
          className="form-control w-100"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
      </li>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li
            key={index}
            className="list-group-item"
            style={{ marginTop: '10px' }}
          >
            <div class="float-end pe-2">
              <button onClick={() => dispatch(setModule(module))}>Edit</button>

              <button onClick={() => handleDeleteModule(module._id)}>
                Delete
              </button>
            </div>

            <h3>{module.name}</h3>
            <p>{module.description}</p>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
