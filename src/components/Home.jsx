import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col w-72 min-h-screen bg-gray-700 text-white p-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-8">
        <span className="text-2xl font-bold">Ag</span>
        <span className="text-xl text-gray-300">Ronomy</span>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-8">
        {/* Profile Picture */}
        <div className="w-20 h-20 mb-2 rounded-full bg-gray-500 flex items-center justify-center">
          <span className="text-2xl font-semibold">JR</span>
        </div>
        <span className="text-sm">Jennifer Ross</span>
      </div>

      {/* Navigation Section */}
      <nav className="flex flex-col gap-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Agronomy Dashboard</h2>
          <div className="flex flex-col gap-2">
            <Link
              to="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Refund Module
            </Link>
            <Link
              to="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Lecture Suggestions
            </Link>
            <Link
              to="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Agronomy Suggestions
            </Link>
            <Link
              to="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Add New Products
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">FloorManager Dashboard</h2>
          <div className="flex flex-col gap-2">
            <Link
              to="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              All Leads Assigned
            </Link>
            <Link
              to="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Calls Dashboard
            </Link>
            <Link
              to="#"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Top Selling SKUs Team Wise
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
