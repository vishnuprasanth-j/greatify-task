import { Icon } from "@iconify/react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ icon, text, to, borderColor, iconColor }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `h-10 pl-4 text-white flex items-center mb-2 no-underline ${
          isActive ? `border-r-4 ${borderColor}` : ""
        }`
      }
    >
      <Icon
        icon={icon}
        width="1.2em"
        height="1.2em"
        style={{ color: `${iconColor}` }}
        className="mr-2"
      />
      <span className="text-sm font-light">{text}</span>
    </NavLink>
  );
};

const Sidenav = () => {
  return (
    <div className="w-52 h-3/4 bg-Cgreen m-2 rounded-md fixed top-2 left-0">
      <div className="flex flex-col ">
        <div className="h-16 bg-yellow-50 mb-4 flex items-center p-2 rounded-md m-1">
          <img
            src="https://www.amity.edu/images/amity_logo.png"
            alt="Amity University"
            className="h-8 w-8 mr-2"
          />
          <span className="text-sm font-semibold text-header">
            Amity University
          </span>
          <Icon
            icon="carbon:close-filled"
            width="1.2em"
            height="1.2em"
            style={{ color: "green" }}
            className="bg-yellow-50 relative left-7"
          />
        </div>
        <MenuItem
          icon="ic:outline-dashboard"
          text="Dashboard"
          to="/"
          borderColor="border-green-500"
          iconColor="rgb(34, 197, 94)"
        />
        <MenuItem
          icon="solar:medal-ribbons-star-outline"
          text="Degrees"
          to="/degrees"
          borderColor="border-orange-500"
          iconColor="rgb(249, 115, 22)"
        />
        <MenuItem
          icon="mdi:family-tree"
          text="Staff"
          to="/staff"
          borderColor="border-red-500"
        />
        <MenuItem
          icon="oi:book"
          text="Subjects"
          to="/subjects"
          borderColor="border-blue-500"
        />

        <MenuItem
          icon="streamline:hand-held-tablet-writing"
          text="Exam"
          to="/exam"
          borderColor="border-purple-500"
        />
        <MenuItem
          icon="ph:student"
          text="Student List"
          to="/students"
          borderColor="border-yellow-500"
        />
      </div>
    </div>
  );
};

export default Sidenav;
