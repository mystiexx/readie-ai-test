import CertificationCard from "@/blocks/certifications/card";
import { Certification } from "@/utils/types";
import React from "react";

interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {certifications?.map((certification: Certification, indx: number) => (
        <CertificationCard certification={certification} key={indx} />
      ))}
    </div>
  );
};

export default Certifications;
