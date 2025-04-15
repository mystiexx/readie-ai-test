import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

export function ErrorElement() {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="min-h-screen h-screen grid place-items-center ">
      <div className="flex flex-col gap-3">
        <p className="text-[30px] text-blue-whale font-bold text-center">
          {isRouteErrorResponse(error)
            ? `${error.status} ${error.statusText}`
            : "An unknown error occurred"}
        </p>
        <p className="text-center text-lynch text-[16px]">
          {isRouteErrorResponse(error)
            ? error.data || "Something went wrong while loading this page."
            : error instanceof Error
            ? error.message
            : "An unknown error occurred."}
        </p>
        <div className="flex justify-center">
          <Link to="/">
            <button className="bg-dodger-blue p-3 text-center text-white rounded-lg cursor-pointer">
              Go Back home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
