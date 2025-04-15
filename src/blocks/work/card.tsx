import { WorkHistory } from "@/utils/types";
import React from "react";
import { MdWork } from "react-icons/md";

interface WorkProps {
  work: WorkHistory;
}

const WorkCard: React.FC<WorkProps> = ({ work }) => {
  return (
    <div className="p-4 bg-white border border-zircon rounded-xl flex flex-col gap-3">
      <div className="flex flex-col items-start gap-3">
        <div className="bg-zircon w-10 h-10 rounded-md grid place-items-center" ><MdWork className="text-blue-whale" size={20} /> </div>
        <div>
          <p className="font-semibold text-[16px] text-blue-whale">
            {work.company}
          </p>
          <p className="text-[14px] text-lynch">{work.role}</p>
          <p className="text-[14px] text-lynch">{work.years}</p>
        </div>
      </div>

      <div>
        <p className="text-[14px] font-medium text-blue-whale mb-1">Skills:</p>
        <div className="flex flex-wrap gap-2">
          {work.skills.split(",").map((skill, indx) => (
            <p
              key={indx}
              className="bg-zircon text-blue-whale rounded-full px-4 py-1 text-[12px]"
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
