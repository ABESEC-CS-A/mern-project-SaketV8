import { NavLink } from "react-router";

const PageNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-linear-to-b from-rose-50 to-rose-100 text-center px-4">
      <h1 className="text-7xl font-extrabold text-rose-600 drop-shadow-sm">
        404
      </h1>

      <h2 className="text-2xl md:text-3xl font-semibold text-rose-700 mt-2">
        Page Not Found
      </h2>

      <p className="text-gray-700 mt-2 max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <NavLink
        to="/"
        className="mt-6 px-6 py-3 bg-rose-600 text-white rounded-lg shadow hover:bg-rose-700 transition-all duration-200"
      >
        Go Back Home
      </NavLink>
    </div>
  );
};

export default PageNotFound;
