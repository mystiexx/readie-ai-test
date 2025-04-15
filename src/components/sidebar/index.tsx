import { navRoutes } from "@/utils/enums";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="w-[232px] h-screen p-6 flex flex-col justify-between">
      <div>
        <p className="text-[16px] font-semibold">Readie AI</p>

        <div className="mt-[40px] flex flex-col gap-3">
          {navRoutes.map((routes, idx) => (
            <NavLink
              key={idx}
              to={routes.href}
              className={({ isActive }) =>
                isActive
                  ? "flex items-center  p-3 bg-dodger-blue text-white rounded-lg text-[14px] font-normal"
                  : "flex items-center p-3 text-[14px] font-normal"
              }
            >
              <p className="text-[16px] font-medium">{routes.name}</p>
            </NavLink>
          ))}
        </div>
      </div>

     
    </div>
  );
};

export default Sidebar;
