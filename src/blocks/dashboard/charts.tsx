import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

import { AiAssessmentStats } from "@/utils/types";

interface Props {
  stats: AiAssessmentStats;
}

const COLORS = ["#9170FF", "#4278f5"];

const AiAssessmentStatsChart: React.FC<Props> = ({ stats }) => {
  const barData = Object.entries(stats.categoryStats).map(
    ([category, data]) => ({
      category,
      averageScore: parseFloat(data.averageScore.toFixed(2)),
    })
  );

  const pieData = [
    { name: "Correct", value: stats.correctCount },
    { name: "Incorrect", value: stats.incorrectCount },
  ];

  const radarData = Object.entries(stats.categoryStats).map(
    ([category, data]) => ({
      subject: category,
      A: data.averageScore,
      fullMark: 100, // or use 100 depending on your scale
    })
  );

  return (
    <div className="grid gap-10 md:grid-cols-2">
      {/* Average Score per Category */}
      <div className="bg-white p-4 rounded-xl border border-zircon">
        <p className="text-[20px] text-blue-whale font-semibold mb-2">
          Average Score by Category
        </p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <XAxis dataKey="category" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="averageScore" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Correct vs Incorrect */}
      <div className="bg-white p-4 rounded-xl border border-zircon">
        <p className="text-[20px] font-semibold text-blue-whale mb-2">Correct vs Incorrect</p>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {pieData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Radar Chart: Performance Across Categories */}
      <div className="md:col-span-2 bg-white p-4 rounded-xl border border-zircon">
        <h2 className="text-xl font-semibold mb-2">Performance</h2>
        <ResponsiveContainer width="100%" height={350}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 10]} />
            <Radar
              name="Average Score"
              dataKey="A"
              stroke="#4278f5"
              fill="#4278f5"
              fillOpacity={0.6}
            />
            <Legend />
            <Tooltip />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AiAssessmentStatsChart;
