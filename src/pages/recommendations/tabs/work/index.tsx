import WorkCard from "@/blocks/work/card";
import { WorkHistory } from "@/utils/types";
import React from "react";

interface WorkProps {
  work: WorkHistory[];
}

const Work: React.FC<WorkProps> = ({ work }) => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {work?.map((work: WorkHistory, indx: number) => (
        <WorkCard work={work} key={indx} />
      ))}
    </div>
  );
};

export default Work;
