import Header from "../components/accounts/Header"
import AttentionBanner from "../components/accounts/AttentionBanner";
import PerformanceMetrics from "../components/accounts/performanceMetrics/PerformanceMetrics";
import Policies from "../components/accounts/policiesSection/Policies";
import AccountDetails from "../components/accounts/accountDetails/AccountDetails";
import StatusSection from "../components/accounts/accountStatus/StatusSection";
import InboxView from "../components/accounts/communication/InboxView";


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
   <AccountDetails />
<InboxView/>
   
   </>
 );
}

export default Account
