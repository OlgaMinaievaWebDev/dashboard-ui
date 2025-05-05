import Header from "../components/accounts/Header"
import AttentionBanner from "../components/accounts/AttentionBanner";

function Account() {
 return (
   <div className="space-y-10 flex justify-center items-center">
     <div className="w-1/2">
       <Header />
     </div>
     <div className="w-1/2">
       <AttentionBanner />
     </div>
   </div>
 );
}

export default Account
