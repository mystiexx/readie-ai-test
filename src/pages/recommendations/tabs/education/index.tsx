import EducationCard from "@/blocks/education/card";
import { EducationHistory } from "@/utils/types";
import React from "react";

interface IProps {
  education: EducationHistory[];
}

const Education: React.FC<IProps> = ({ education }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {education?.map((education: EducationHistory, indx: number) => (
        <EducationCard education={education} key={indx} />
      ))}
    </div>
  );
};

export default Education;
