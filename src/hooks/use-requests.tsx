import {
  createCareerRecommendation,
  getDetails,
  getIndustries,
  getJobRoles,
  getRecommendations,
} from "@/services/endpoints";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export const useGetRecommendations = ({
  userId,
  uid,
}: {
  userId: number;
  uid: string;
}) => {
  return useQuery({
    queryKey: ["recommendations", userId, uid],
    queryFn: () => getRecommendations({ userId, uid }),
  });
};

export const useGetIndustries = () => {
  return useQuery({
    queryKey: ["industries"],
    queryFn: () => getIndustries(),
  });
};

export const useGetJobRoles = () => {
  return useQuery({
    queryKey: ["job-roles"],
    queryFn: () => getJobRoles(),
  });
};

export const usePostCareerRecommendations = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["career-create"],
    mutationFn: (doc: any) => createCareerRecommendation(doc),
    onSuccess: (res) => {
      toast.success("Recommendation Added");
      navigate("/recommendations?tab=companies", { state: res });
      queryClient.invalidateQueries({ queryKey: ["recommendations"] });
    },
    onError: (error) => {
      toast.error(error?.message);
    },
  });
};

export const useGetDetails = (userId: number) => {
  return useQuery({
    queryKey: ["get-details", userId],
    queryFn: () => getDetails(userId),
  });
};
