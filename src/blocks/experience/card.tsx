import { IExperience } from "@/utils/types";
import React from "react";

interface ExperienceProps {
  experience: IExperience;
}

const ExperienceCard: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <div className="bg-white p-4 border border-zircon rounded-xl flex flex-col">
      <p className="text-blue-whale text-[16px] font-semibold">
        {experience.area}
      </p>
      <p className="text-lynch text-[13px]">{experience.level}</p>
      <p className="py-4 text-blue-whale text-[14px]">
        {experience.description}
      </p>
    </div>
  );
};

export default ExperienceCard;
