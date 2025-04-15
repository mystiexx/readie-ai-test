import TabComponent from "@/components/tabs";
import Layout from "@/layout";
import { recommendationTabs } from "@/utils/enums";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Companies from "./tabs/companies";
import Certifications from "./tabs/certifications";
import Education from "./tabs/education";
import { FaPlus } from "react-icons/fa";
import Work from "./tabs/work";
import Experience from "./tabs/experience";
import Loader from "@/components/loader";

const Recommendations: React.FC = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const selectedTab = params.get("tab");
  const location = useLocation()
  const state = location.state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // cleanup
  }, []);

  useEffect(() => {
    if (!params.has("tab")) {
      navigate(`/recommendations?tab=companies`);
    }
  }, [params, navigate]);

  const switchTab = (doc: string) => {
    const value = doc.replace(" ", "-").toLowerCase();
    navigate(`/recommendations?tab=${value}`, { state: state});
  };

  const tab = {
    companies: <Companies companies={state?.companies} />,
    certifications: <Certifications certifications={state?.certifications} />,
    education_history: <Education education={state?.educationHistory} />,
    work_history: <Work work={state?.workHistory} />,
    experience: <Experience experience={state?.experience} />,
  };
  return (
    <Layout>
      <div className="flex justify-between items-center pb-10 pt-6">
        <div>
          <h1 className="text-[24px] font-semibold">Recommendations</h1>
          <p className="text-[14px] text-lynch">See all recommendations</p>
        </div>

        <Link to="/recommendations/add">
          <button className="rounded-lg text-white bg-dodger-blue p-3 text-[16px]">
            <FaPlus className="block lg:hidden" />
            <p className="hidden lg:block"> Add Recommendation</p>
          </button>
        </Link>
      </div>

      <div>
        <TabComponent
          tabs={recommendationTabs}
          selectedTab={selectedTab}
          setSelectedTab={switchTab}
        />
      </div>

      {isLoading ? (
        <div className="h-[50dvh] grid place-items-center">
          {" "}
          <Loader color="text-dodger-blue" size={30} />{" "}
        </div>
      ) : (
        <>
          {" "}
          <div className="py-6">
            {tab[selectedTab?.replace("-", "_") as keyof typeof tab]}
          </div>
        </>
      )}
    </Layout>
  );
};

export default Recommendations;
