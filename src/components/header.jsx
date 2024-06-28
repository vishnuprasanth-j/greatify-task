import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div className="w-full h-10 flex  bg-gray-100 py-8 px-3 rounded-t-lg  items-center border-b border-b-gray-200">
      <div className="flex-1">
        Welcome, <span className="text-teal-800 font-bold">Admin</span>
      </div>
      <div className="relative flex items-center ml-2">
        <Icon
          icon="iconamoon:search"
          width="1.2em"
          height="1.2em"
          style={{ color: "#5a595f" }}
          className="absolute left-2 text-gray-400 pointer-events-none"
        />
        <input
          type="text"
          placeholder="Search..."
          className="bg-white w-96 h-7 pl-10 pr-3 py-2 rounded-md shadow-sm"
        />
      </div>
      <Avatar
        alt="Remy Sharp"
        src="/avatar.jpg"
        sx={{ width: 30, height: 32 }}
        className="ml-2"
      />
      <div className="bg-white p-2 rounded-full ml-2">
        <Icon icon="lucide:bell" width="1.2em" height="1.2em" />
      </div>
      <div className="bg-white p-2 rounded-full ml-2">
        <Icon icon="lucide:settings" width="1.2em" height="1.2em" />
      </div>
      <Avatar
        alt="Remy Sharp"
        src="/avatar.jpg"
        sx={{ width: 30, height: 32 }}
        className="ml-2"
      />
    </div>
  );
};

export default Header;
