import ComplianceItem from "./ComplianceItem";
import StatusProgressBar from "./StatusProgressBar";


export default function StatusSection() {

 return (
  <div className="mt-10 text-white">

   <div className="flex flex-col lg:flex-row gap-4 mb-4">

    <div className="flex-1">
     <h2 className="text-3xl mb-3">Account Status</h2>
    </div>


    <div className="flex-1 flex items-center justify-between">
     <h3 className="text-3xl">Compliance & Documentation</h3>
     <a href="#" className="text-azure text-sm underline">
      See history →
     </a>
    </div>
   </div>

  
   <div className="flex flex-col lg:flex-row gap-4">
    {/* Progress bar box */}
    <div className="bg-[#12172A] rounded-2xl p-4 flex-1 flex items-center justify-center">
     <StatusProgressBar />
    </div>

    {/* Compliance items box */}
    <div className="bg-[#12172A] rounded-2xl p-4 flex-1">
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