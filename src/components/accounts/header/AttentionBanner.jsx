import { CircleAlert } from "lucide-react";

function AttentionBanner() {
  return (
    <div className="border border-yellow-400 p-4 rounded-2xl space-y-2">
      <div className="text-yellow-400 text-xl flex items-center">
        <span className="mr-2">
          <CircleAlert />
        </span>
        Needs Attention
      </div>

      <div className="flex justify-between gap-2 text-sm mt-3">
        {/* Item 1 */}
        <div >
          <p className="text-md">Marine Survey Required</p>
          <p className="text-gray-400">Scheduled for 06/12/2025</p>
          <a href="#" className="underline block text-blue-400">
            Review details link →
          </a>
        </div>

        {/* Item 2 */}
        <div >
          <p className="text-md">Loss Control Complete</p>
          <p className="text-gray-400">Last inspection: 02/15/2025</p>
          <a href="#" className="underline block text-blue-400">
            View report →
          </a>
        </div>

        {/* Item 3 */}
        <div >
          <p className="text-md">Claims Review Required</p>
          <p className="text-gray-400">3 open claims // $245,000 TTL</p>
          <a href="#" className="underline block text-blue-400">
            View claims →
          </a>
        </div>
      </div>
    </div>
  );
}

export default AttentionBanner;
