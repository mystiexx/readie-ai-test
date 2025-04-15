import { SelectInput, TextInput } from "@/components/inputs";
import { getYearsFrom1925 } from "@/utils/helpers";
import React from "react";

interface EducationHistoryProps {
  formik: any;
}

const EducationHistory: React.FC<EducationHistoryProps> = ({ formik }) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <label className="text-[14px] text-lynch">
          School <span className="text-red-500">*</span>
        </label>
        <TextInput
          name="school"
          handleChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.school}
          placeholder="Ex: Boston University"
          required={true}
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-[14px] text-lynch">
          Degree <span className="text-red-500">*</span>
        </label>
        <TextInput
          name="degree"
          handleChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.degree}
          required={true}
          placeholder="Ex: Bachlelor's"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col gap-1">
          <label className="text-[14px] text-lynch">
            Start Year <span className="text-red-500">*</span>
          </label>
          <SelectInput
            name="education_start_year"
            handleChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.education_start_year}
            required={true}
            placeholder="Year"
            labels={getYearsFrom1925()}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-[14px] text-lynch">
            End Year <span className="text-red-500">*</span>
          </label>
          <SelectInput
            name="education_end_year"
            handleChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.education_end_year}
            required={true}
            placeholder="Year"
            labels={getYearsFrom1925()}
          />
        </div>
      </div>
    </div>
  );
};

export default EducationHistory;
