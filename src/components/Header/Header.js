import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white px-10 h-12">
      <div>
        <h3>
          Home <span className="font-bold text-blue-900">DashBoard V2</span>
        </h3>
      </div>
      <div className="flex items-center">
        <div className="hidden md:block h-full w-[500px]">
          <input
            className="bg-gray-200 w-full pl-5 h-8 rounded-md"
            type="text"
            placeholder="Search anything..."
          />
        </div>
        <div className="ml-4">
          <p>User</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
