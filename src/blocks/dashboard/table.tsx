import { tableHead } from "@/utils/enums";
import { AssessmentResponse } from "@/utils/types";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  data: AssessmentResponse[];
}

const Table: React.FC<Props> = ({ data }) => {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (id: number) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id]
    );
  };
  return (
    <div className="bg-white rounded-xl p-2 border border-zircon">
      <div className="bg-zircon/50 p-4 rounded-t-xl">
        <p className="text-[16px] text-blue-whale font-semibold">Summary</p>
      </div>

      <div className="overflow-y-auto mt-1">
        <table className="min-w-full  divide-y divide-zircon">
          <thead>
            <tr>
              {tableHead.map((head, idx) => (
                <th
                  className="px-4 py-2 text-left font-normal text-nowrap text-lynch border-b border-zircon"
                  key={idx}
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((item) => {
              const isExpanded = expandedRows.includes(item.responseId);
              return (
                <React.Fragment key={item.responseId}>
                  <tr className="border-b border-zircon">
                    <td className="px-4 text-left py-2 text-nowrap">
                      {item.aiAssessmentCategory}
                    </td>
                    <td className="px-4 text-left py-2 text-nowrap">{item.userScore}</td>
                    <td className="px-4 py-3 text-nowrap">{item.userAnswerText}</td>
                    <td className="px-4 text-left py-2 text-nowrap">{item.aiUseCase}</td>
                    <td>
                      <button
                        onClick={() => toggleRow(item.responseId)}
                        className="cursor-pointer"
                      >
                        {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}

                      </button>
                    </td>
                  </tr>
                  {isExpanded && (
                    <tr className="bg-zircon/50 duration-700 ease-in-out">
                      <td
                        colSpan={5}
                        className="px-6 py-4 text-sm text-gray-700"
                      >
                        <div className="space-y-2">
                          <p>
                            <strong>Question:</strong> {item.questionText}
                          </p>
                         
                          <p>
                            <strong>Job Role:</strong> {item.jobRoleName}
                          </p>
                          <p>
                            <strong>Industry:</strong> {item.industryName}
                          </p>
                          <p>
                            <strong>Answered At:</strong>{" "}
                            {new Date(item.responseTimestamp).toLocaleString()}
                          </p>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
