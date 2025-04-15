import { navRoutes } from "@/utils/enums";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  show: boolean;
  onClose: () => void;
}

const Modal: React.FC<Props> = ({ show, onClose }) => {
  return (
    <div>
      <div
        className={`bg-black/50 top-0 h-screen w-full fixed z-10 duration-700 ease-in-out  ${
          show ? "left-0" : "-left-full"
        }`}
        onClick={onClose}
      />
      <div className={`bg-white w-[232px] h-screen fixed top-0 z-20 duration-700 ease-in-out ${show ? 'left-0': '-left-full'}`}>
      <div className="p-6">
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
    </div>
  );
};

export default Modal;
