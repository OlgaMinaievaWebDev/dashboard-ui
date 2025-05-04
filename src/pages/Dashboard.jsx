import WorkQueue from "../components/workQueue/WorkQueue";
import QuickActions from "../components/quickActions/QuickActions";
import PortfolioGoalsNivo from "../components/portfolioGoals/PortfolioGoalsNivo";

function Dashboard() {
  return (
    <div className="grid gap-4">
      {/* First row */}
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4">
        {/* Main content (60%) */}
        <div className="md:col-span-6 p-4  rounded-lg shadow-sm">
          <WorkQueue />
        </div>

        {/* Sidebar (40% total) */}
        <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Goals (20%) */}
          <div className="md:col-span-2 h-full p-4">
            <div className="h-full rounded-lg  shadow-sm bg-[#101827]">
              <PortfolioGoalsNivo />
            </div>
          </div>

          {/* Quick actions stacked (20%) */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className=" p-4 rounded-lg shadow-sm flex-1">
              <QuickActions variant="primary" />
            </div>
            <div className=" p-4 rounded-lg shadow-sm flex-1">
              <QuickActions variant="secondary" />
            </div>
          </div>
        </div>
      </div>

      {/* Second row - full width */}
      <div className="bg-white p-4 rounded-lg shadow-sm"></div>
    </div>
  );
}

export default Dashboard;
