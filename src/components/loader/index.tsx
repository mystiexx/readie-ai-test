import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Props {
  size?: any;
  color: string;
}

const Loader: React.FC<Props> = ({ size, color }) => {
  return (
    <AiOutlineLoading3Quarters
      size={size || 20}
      className={`animate-spin ${color}`}
    />
  );
};

export default Loader;
