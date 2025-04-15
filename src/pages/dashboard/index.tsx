import AiAssessmentStatsChart from "@/blocks/dashboard/charts";
import Table from "@/blocks/dashboard/table";
import Loader from "@/components/loader";
import { useAuth } from "@/hooks/use-auth";
import { useGetDetails } from "@/hooks/use-requests";
import Layout from "@/layout";
import { getAssessmentsSummary } from "@/utils/helpers";
import { AiAssessmentStats } from "@/utils/types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const { userId } = user;
  const { data, isLoading } = useGetDetails(userId);
  const [stats, setStats] = useState<AiAssessmentStats>({
    totalQuestions: 0,
    totalScore: 0,
    averageScore: 0,
    minScore: 0,
    maxScore: 0,
    correctCount: 0,
    incorrectCount: 0,
    categoryStats: {},
  });

  useEffect(() => {
    if (data) {
      const stats = getAssessmentsSummary(data);
      setStats(stats);
    }
  }, [data]);


  return (
    <Layout>
      <div className="py-6 flex justify-between items-center">
        <div>
        <p className="text-[24px] font-semibold">Dashboard</p>
        <p className="text-lynch text-[16px]">
          Hi, {user?.fullName}. Welcome back to Readie AI
        </p>
        </div>

        <Link to='/recommendations/add' className="bg-dodger-blue p-2 text-white rounded-lg">
        <FaPlus className="block lg:hidden" />
        <p className="hidden lg:block">Career Recommendation</p>
        </Link>
        
      </div>

      {isLoading ? (
        <div className="h-screen grid place-items-center">
          <Loader color="text-dodger-blue" size={35} />
        </div>
      ) : (
        <div className="pb-[100px] flex flex-col gap-6">
          <AiAssessmentStatsChart stats={stats} />
          <Table data={data} />
        </div>
      )}
    </Layout>
  );
};

export default Dashboard;
