import Header from "../components/accounts/header/Header";
import AttentionBanner from "../components/accounts/header/AttentionBanner";
import PerformanceMetrics from "../components/accounts/performanceMetrics/PerformanceMetrics";
import Policies from "../components/accounts/policiesSection/Policies";
import AccountDetails from "../components/accounts/accountDetails/AccountDetails";
import StatusSection from "../components/accounts/accountStatus/StatusSection";
import InboxView from "../components/accounts/communication/InboxView";
import TablePage from "../components/accounts/policiesPage/TablePage";

function Account() {
  return (
    <>
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row md:space-x-4 w-full">
          <div className="w-full md:w-1/2">
            <Header />
          </div>
          <div className="w-full md:w-1/2">
            <AttentionBanner />
          </div>
        </div>

        <PerformanceMetrics />
        <Policies />
        <StatusSection />
        <AccountDetails />
        <InboxView />
        <TablePage/>  
      </div>
    </>
  );
}

export default Account;
