import { getErrorMessage } from "@/utils/helpers";
import { api, endpoint } from "./http-service";

type getRecommendationsProps = {
  userId: number;
  uid: string;
};

export const getRecommendations = async ({
  userId,
  uid,
}: getRecommendationsProps) => {
  try {
    const request = await api.get(
      `/auth/getUserProfileRecommendationJSON?userID=${userId}&uid=${uid}`
    );
    const response = request.data;
    return response;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    throw new Error(errorMessage);
  }
};

export const getIndustries = async () => {
  try {
    const request = await endpoint.get(`/auth/industries?industryId=1`);
    const response = request.data;
    return response;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    throw new Error(errorMessage);
  }
};

export const getJobRoles = async () => {
  try {
    const request = await endpoint.get(`/auth/jobroles?industryId=-1`);
    const response = request.data;
    return response;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    throw new Error(errorMessage);
  }
};

export const createCareerRecommendation = async (payload: any) => {
  try {
    const request = await api.post(`/auth/fullrecommendation`, payload);
    const response = request.data;
    return response;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    throw new Error(errorMessage);
  }
};

export const getDetails = async (doc: number) => {
  try {
    const request = await api.get(`/auth/userresponseqa?User_ID=${doc}`);
    const response = request.data;
    return response;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    throw new Error(errorMessage);
  }
};
