import WorkQueue from "../components/dashboard/workQueue/WorkQueue";
import QuickActions from "../components/dashboard/quickActions/QuickActions";
import PortfolioGoalsNivo from "../components/dashboard/portfolioGoals/PortfolioGoalsNivo";
import MarketIntelligence from "../components/dashboard/marketIntelligence/MarketIntelligence";
import { AccountsPage } from "../components/dashboard/myAccounts/AccountsPage";


function Dashboard() {
  return (
    <div className="space-y-4">
      {/* First Row */}
      <div className="flex flex-col lg:grid lg:grid-cols-10 gap-4">
        {/* Main content */}
        <div className="bg-[#101827] rounded-lg shadow-sm lg:col-span-6">
          <WorkQueue />
        </div>

        {/* Sidebar */}
        <div className="flex flex-col lg:grid lg:grid-cols-4 gap-4 lg:col-span-4">
          {/* Goals */}
          <div className="rounded-lg shadow-sm bg-[#101827] h-full lg:col-span-2">
            <PortfolioGoalsNivo />
          </div>

          {/* Quick Actions and Market Intelligence */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <div className="rounded-lg shadow-sm bg-[#101827] flex-1">
              <QuickActions />
            </div>
            <div className="p-4 rounded-lg shadow-sm bg-[#101827] flex-1">
              <MarketIntelligence />
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="lg:col-span-6 rounded-lg shadow-sm p-4 bg-[#101827]">
        <AccountsPage />
      </div>
    </div>
  );
}


export default Dashboard;
