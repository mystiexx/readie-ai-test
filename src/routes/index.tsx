import { ErrorElement } from "@/errorBoundary";
import AddRecommendations from "@/pages/add-recommendations";
import Dashboard from "@/pages/dashboard";
import Recommendations from "@/pages/recommendations";
import { Navigate } from "react-router-dom";

export const routes = [
  {
    path: "/",
    component: <Navigate to="/dashboard" />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/dashboard",
    component: <Dashboard />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/recommendations",
    component: <Recommendations />,
    errorElement: <ErrorElement />,
  },
  {
    path: "/recommendations/add",
    component: <AddRecommendations />,
    errorElement: <ErrorElement />,
  },
];
