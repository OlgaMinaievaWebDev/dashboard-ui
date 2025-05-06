import ComplianceItem from "./ComplianceItem";
import StatusCard from "./StatusCard";
import StatusProgressBar from "./StatusProgressBar";


export default function StatusSection() {

 return (
   <div className="mt-10">
     <h2 className="text-3xl mb-3">Account Status</h2>
     <div className="flex flex-col lg:flex-row gap-4 text-white">
       {/* Account Status */}
       <div className="bg-[#12172A] rounded-2xl p-4 flex-1 flex items-center justify-center">
         <StatusProgressBar />
       </div>

       {/* Compliance & Documentation */}
       <div className="bg-[#12172A] rounded-2xl p-4 flex-1">
         <div className="flex justify-between items-center mb-4">
           <h3 className="text-lg font-semibold">Compliance & Documentation</h3>
           <a href="#" className="text-blue-400 text-sm underline">
             See history →
           </a>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
           <ComplianceItem label="KYC verification" />
           <ComplianceItem label="Required Documentation" />
           <ComplianceItem label="Regulatory approval" />
           <ComplianceItem label="Financial Verification" />
         </div>
       </div>
     </div>
   </div>
 );
}
