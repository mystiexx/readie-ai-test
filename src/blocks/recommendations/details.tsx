import React from "react";
import EducationHistory from "./education-history";
import { TextArea } from "@/components/inputs";
import Questions from "./questions";
import { dataStrings } from "@/utils/helpers";

interface DetailsProps {
  formik: any;
  job_roles: any;
}

const Details: React.FC<DetailsProps> = ({ formik, job_roles }) => {
  return (
    <div>
      <div className="border-b border-zircon pb-5">
        <p className="mb-2 text-blue-whale text-[16px] font-semibold">
          Education History
        </p>
        <EducationHistory formik={formik} />
      </div>
      <div className="border-b border-zircon pb-5">
        <p className="mb-2 text-blue-whale text-[16px] font-semibold pt-4">
          Work History <span className="text-red-500">*</span>
        </p>
        <TextArea
          name="workHistory"
          handleChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.workHistory}
          placeholder="Ex: Software Engineer"
          required={true}
        />
      </div>

      <div className="border-b border-zircon pb-5">
        <p className="mb-2 text-blue-whale text-[16px] font-semibold pt-4">
          Ethical Considerations
        </p>
        <Questions
          name="Ethical_Considerations"
          questions={dataStrings?.filter(
            (item) => item.aiAssessmentCategory === "Ethical Considerations"
          )}
          formik={formik}
          job_roles={job_roles}
        />
      </div>

      <div className="border-b border-zircon pb-5">
        <p className="mb-2 text-blue-whale text-[16px] font-semibold pt-4">General AI Awareness</p>
        <Questions
          name="Ethical_Considerations"
          questions={dataStrings?.filter(
            (item) => item.aiAssessmentCategory === "General AI Awareness"
          )}
          formik={formik}
          job_roles={job_roles}
        />
      </div>

      <div className="border-b border-zircon pb-5">
        <p className="mb-2 text-blue-whale text-[16px] font-semibold pt-4">Future Learning</p>
        <Questions
          name="Ethical_Considerations"
          questions={dataStrings?.filter(
            (item) => item.aiAssessmentCategory === "Future Learning"
          )}
          formik={formik}
          job_roles={job_roles}
        />
      </div>

      <div className="border-b border-zircon pb-5">
        <p className="mb-2 text-blue-whale text-[16px] font-semibold pt-4">Workplace Adaptation</p>
        <Questions
          name="Ethical_Considerations"
          questions={dataStrings?.filter(
            (item) => item.aiAssessmentCategory === "Workplace Adaptation"
          )}
          formik={formik}
          job_roles={job_roles}
        />
      </div>
    </div>
  );
};

export default Details;
