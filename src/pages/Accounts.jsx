import Header from "../components/accounts/Header"
import AttentionBanner from "../components/accounts/AttentionBanner";
import PerformanceMetrics from "../components/accounts/performanceMetrics/PerformanceMetrics";
import Policies from "../components/accounts/policiesSection/Policies";
import AccountDetails from "../components/accounts/AccountDetails";
import InboxView from "../components/accounts/InboxView";
import StatusSection from "../components/accounts/accountStatus/StatusSection";

function Account() {
 return (
   <>
     <div className="space-y-10 flex justify-center items-center">
       <div className="w-1/2">
         <Header />
       </div>
       <div className="w-1/2">
         <AttentionBanner />
       </div>
     </div>
   <PerformanceMetrics />
   <Policies />
   <StatusSection/>
  
   </>
 );
}

export default Account
