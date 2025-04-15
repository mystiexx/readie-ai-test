import Details from "@/blocks/recommendations/details";
import Loader from "@/components/loader";
import { useAuth } from "@/hooks/use-auth";
import {
  useGetJobRoles,
  usePostCareerRecommendations,
} from "@/hooks/use-requests";
import Layout from "@/layout";
import { dataStrings } from "@/utils/helpers";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const AddRecommendations: React.FC = () => {
  const { data: job_roles } = useGetJobRoles();
  const { user } = useAuth();
  const { mutate: createRecommendation, isPending } =
    usePostCareerRecommendations();

  const formik = useFormik({
    initialValues: {
      educationHistory: "",
      workHistory: "",
      dataString: dataStrings.map((q) => ({
        ...q,
        userAnswerText: "",
      })),
    },
    onSubmit: async (doc: any) => {
      let data = {
        ...doc,
        userID: user.userId,
        educationHistory: `${doc.degree}, ${doc.school}, ${doc.education_start_year}-${doc.education_end_year}`,
      };
      delete data["degree"];
      delete data["school"];
      delete data["education_start_year"];
      delete data["education_end_year"];
      createRecommendation(data);
    },
  });
  return (
    <Layout>
      <div className="py-10 flex items-center gap-2">
        <Link to="/" className="text-lynch">
          Dashboard
        </Link>
        <p>
          {" "}
          <FaChevronRight className="text-lynch" size={10} />
        </p>

        <p className="text-blue-whale font-semibold">Add Recommendation</p>
      </div>
      <div className="flex justify-center pb-[100px]">
        <div className="bg-white w-full border border-zircon lg:w-[800px] rounded-lg p-1">
          <div className="rounded-t-lg bg-zircon p-4">
            <p className="text-[16px] font-semibold text-blue-whale">
              Add Career Recommendations
            </p>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="p-4 flex flex-col gap-6">
              <Details formik={formik} job_roles={job_roles} />

              <button
                className="bg-dodger-blue p-2 text-white rounded-lg grid place-items-center disabled:opacity-50"
                type="submit"
                disabled={isPending}
              >
                {isPending ? (
                  <div className="flex items-center gap-2">
                    <Loader color="text-white" size={20} /> <p>This might take a while...</p>
                  </div>
                ) : (
                  "Save"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default AddRecommendations;
