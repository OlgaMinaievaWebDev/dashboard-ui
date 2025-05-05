function PerformanceMetrics() {
 return (
   <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
     <div className="bg-[#12172A] rounded-2xl p-4">
       <p className="text-sm text-gray-400 mb-2">Winnability</p>
       <h2 className="text-2xl font-semibold">Very Strong</h2>
       <a
         href="#"
         className="text-blue-400 text-sm underline mt-2 inline-block"
       >
         See all factors →
       </a>
     </div>
     <div className="bg-[#12172A] rounded-2xl p-4">
       <p className="text-sm text-gray-400 mb-2">Loss Ratio</p>
       <h2 className="text-2xl font-semibold">25%</h2>
       <p className="text-sm text-gray-400">vs 42% target</p>
       <a
         href="#"
         className="text-blue-400 text-sm underline mt-2 inline-block"
       >
         View history →
       </a>
     </div>
     <div className="bg-[#12172A] rounded-2xl p-4">
       <p className="text-sm text-gray-400 mb-2">Premium Growth</p>
       <h2 className="text-2xl font-semibold">12.4%</h2>
       <p className="text-sm text-gray-400">$123M vs $150M Target</p>
       <a
         href="#"
         className="text-blue-400 text-sm underline mt-2 inline-block"
       >
         View trend →
       </a>
     </div>
     <div className="bg-[#12172A] rounded-2xl p-4">
       <p className="text-sm text-gray-400 mb-2">Exposure Distribution</p>
       <div className="space-y-1">
         <div className="text-sm flex justify-between">
           <span>Marine Cargo</span>
           <span>71.4%</span>
         </div>
         <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
           <div className="bg-blue-500 h-full" style={{ width: "71.4%" }}></div>
         </div>
         <div className="text-sm flex justify-between">
           <span>General Liability</span>
           <span>20%</span>
         </div>
         <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
           <div className="bg-blue-400 h-full" style={{ width: "20%" }}></div>
         </div>
         <div className="text-sm flex justify-between">
           <span>Workers Comp</span>
           <span>8.6%</span>
         </div>
         <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
           <div className="bg-blue-300 h-full" style={{ width: "8.6%" }}></div>
         </div>
       </div>
     </div>
   </div>
 );
}

export default PerformanceMetrics
