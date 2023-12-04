import { Link, useLocation } from "react-router-dom";
import "./index.css";

import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBook, FaCreativeCommonsSa } from "react-icons/fa";
import { BsCalendar2Week, BsInboxFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FiMonitor } from "react-icons/fi";
import { BiHelpCircle, BiUserCircle } from "react-icons/bi";
// import "bootstrap-5.1.3-dist/css/bootstrap.min.css";

function KanbasNavigation() {
  const links = [

    "signin",
    "signup",
    "signout",
    "Account2",
    "admin/users",


    "Account", 
    "Dashboard",
    "Courses", 
    "Calendar", 
    "Inbox", 
    "History",
    "Studio",
    "Commons",
    "Help",

   
  ];

  const icons = {

    Signin: <BiUserCircle className="fs-1 text" />,
    Signup: <BiUserCircle className="fs-1 text" />,
    Signout: <BiHelpCircle className="fs-1 text" />,
    Account2: <BiHelpCircle className="fs-1 text" />,
    admin: <BiHelpCircle className="fs-1 text" />,


    Account: <MdOutlineAccountCircle className="fs-1 text wd-white" />,
    AccountGray: <MdOutlineAccountCircle className="fs-1 text wd-gray" />,
    Dashboard: <RiDashboard3Line className="fs-1 text" />,
    Courses: <FaBook className="fs-1 text" />,
    Calendar: <BsCalendar2Week className="fs-1 text" />,
    Inbox: <BsInboxFill className="fs-1 text" />,
    History: <AiOutlineClockCircle className="fs-1 text"/>,
    Studio: <FiMonitor className="fs-1 text" />,
    Commons: <FaCreativeCommonsSa className="fs-1 text" />,
    Help: <BiHelpCircle className="fs-1 text" />

  
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{ width: 150 }}>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}>
            {icons[link]}<br />
          {link}
        </Link>
      ))}
    </div>
  );
}


export default KanbasNavigation;