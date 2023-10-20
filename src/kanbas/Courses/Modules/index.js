import ModuleList from "./ModuleList";
import { FaEllipsisV } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";

function Modules() {
  return (
    <div>
    <div>
      <button class="btn btn-secondary float-end mx-1"><FaEllipsisV /></button>
      <button class="btn btn-danger float-end mx-1"><AiOutlinePlus />Module</button>
        <div class="dropdown float-end mx-1">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <AiFillCheckCircle />
            Publish All
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      <button class="btn btn-secondary float-end mx-1">View Progress</button>
      <button class="btn btn-secondary float-end mx-1">Collapse All</button>
      <br></br>
      <br></br>
    </div>
    <ModuleList />
  </div>
  );
}
export default Modules;