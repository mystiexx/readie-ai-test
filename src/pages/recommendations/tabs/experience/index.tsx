import ExperienceCard from "@/blocks/experience/card";
import { IExperience } from "@/utils/types";
import React from "react";
interface ExperienceProps {
  experience: IExperience[];
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
      {experience?.map((experience: IExperience, index: number) => (
        <ExperienceCard experience={experience} key={index} />
      ))}
    </div>
  );
};

export default Experience;
