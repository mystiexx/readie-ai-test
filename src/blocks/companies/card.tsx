import { Company } from "@/utils/types";
import React from "react";
import { SiTheboringcompany } from "react-icons/si";

interface IProps {
  company: Company;
}

const CompaniesCard: React.FC<IProps> = ({ company }) => {
  return (
    <div className="p-4 border border-zircon rounded-xl bg-white">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 grid place-items-center shadow rounded-md">
          <SiTheboringcompany size={30} />
        </div>
        <div>
          <p className="text-[16px] text-blue-whale font-semibold ">
            {company?.name}
          </p>
          <p className="text-lynch text-[14px]">{company.location}</p>
        </div>
      </div>

      <p className="py-5 text-[14px] text-lynch">{company.match_reason}</p>

      <a href={company?.website} target="_blank" rel="noreferrer">
        <button className="w-full p-3 border border-zircon rounded-lg text-[14px] text-lynch cursor-pointer">
          Visit Website
        </button>
      </a>
    </div>
  );
};

export default CompaniesCard;
