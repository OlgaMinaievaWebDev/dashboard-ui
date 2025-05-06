const steps = ["Submitted", "Review", "Quote", "Bind", "Issue", "Renew"];
const currentStep = 4; // index of the current completed step (0-based)

export default function StatusProgressBar() {
  return (
    <div className="flex items-center justify-between w-full px-2 relative">
      {steps.map((step, index) => (
        <div key={step} className="flex-1 flex flex-col items-center relative">
          {/* Dot */}
          <div
            className={`w-6 h-6 rounded-full z-10 flex items-center justify-center text-xs font-bold border-2
              ${
                index <= currentStep
                  ? "border-[#00D084] text-[#00D084]"
                  : "border-gray-400 text-[#2A2F45] border-t border-dashed"
              }`}
          >
            {index <= currentStep ? "✓" : "✓"}
          </div>

          {/* Label */}
          <span className="mt-2 text-xs text-white text-center">{step}</span>

          {/* Dashed line (except after last dot) */}
          {index < steps.length - 1 && (
            <div className="absolute top-3 left-10/12 w-1/3 h-0">
              <div
                className={`border-t border-dashed ${
                  index <= currentStep ? "border-[#00D084]" : "border-[#2A2F45]"
                }`}
              ></div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
