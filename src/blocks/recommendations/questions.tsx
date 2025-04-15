import { SelectInput } from "@/components/inputs";
import { parseAnswers } from "@/utils/helpers";
import React from "react";

interface QuestionsProps {
  name: string;
  questions: any[];
  formik: any;
  job_roles: any;
}

const Questions: React.FC<QuestionsProps> = ({
  questions,
  formik,
  job_roles,
}) => {
  return (
    <div>
      <div className="flex flex-col gap-6">
        {questions.map((q, indx) => (
          <div key={indx} className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-[14px] mb-1 text-lynch">{q.questionText} <span className="text-red-500">*</span></p>
              <SelectInput
                name={`dataString[${indx}].userAnswerText`}
                handleChange={formik.handleChange}
                labels={parseAnswers(q.answerText)}
                placeholder="Select Answer"
                required={true}
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-[14px] text-lynch">Job Role <span className="text-red-500">*</span> </label>
                <select
                  name={`dataString[${indx}].jobRoleName`}
                  onChange={formik.handleChange}
                  required
                  className="border border-zircon w-full p-2 min-h-10 text-blue-whale placeholder:text-zircon rounded-xl focus:border focus:border-dodger-blue outline-none duration-700 ease-in-out focus:border-opacity-50 focus:shadow-solitude focus:ring focus:ring-dodger-blue focus-within:ring-opacity-30"
                >
                  <option value="" selected disabled className="text-zircon">
                    Job Role
                  </option>

                  {job_roles?.map((roles: any, idx: number) => (
                    <option key={idx} value={roles.jobRoleName}>
                      {roles.jobRoleName}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[14px] text-lynch">Industry <span className="text-red-500">*</span></label>
                <select
                  name={`dataString[${indx}].industryName`}
                  onChange={formik.handleChange}
                  required
                  className="border border-zircon w-full p-2 min-h-10 text-blue-whale placeholder:text-zircon rounded-xl focus:border focus:border-dodger-blue outline-none duration-700 ease-in-out focus:border-opacity-50 focus:shadow-solitude focus:ring focus:ring-dodger-blue focus-within:ring-opacity-30"
                >
                  <option value="" selected disabled className="text-zircon">
                    Industry
                  </option>

                  {job_roles
                    ?.filter(
                      (value: any, index: any, self: any) =>
                        index ===
                        self.findIndex(
                          (t: any) => t.industryName === value.industryName
                        )
                    )
                    ?.map((roles: any, idx: number) => (
                      <option key={idx} value={roles.industryName}>
                        {roles.industryName}
                      </option>
                    ))}
                </select>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Questions;
