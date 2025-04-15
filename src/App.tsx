import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { routes } from "./routes";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {routes.map((route, idnx) => (
          <Route
            key={idnx}
            path={route.path}
            element={route.component}
            errorElement={route.errorElement}
          />
        ))}
      </>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
