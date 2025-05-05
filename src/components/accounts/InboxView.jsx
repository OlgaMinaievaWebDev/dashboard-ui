import MessageCard from "./MessageCard";

function InboxView() {
  return (
    <div className="bg-[#0F111D] text-white p-6 rounded-2xl max-w-screen-xl mx-auto space-y-4">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#1C1F2E] text-sm text-white px-4 py-2 rounded-xl w-1/3 outline-none"
        />
        <div className="flex gap-2">
          <button className="border border-blue-500 text-blue-500 px-3 py-1 rounded-xl text-sm">
            Filter
          </button>
          <button className="border border-blue-500 text-blue-500 px-3 py-1 rounded-xl text-sm">
            Group
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-4">
          <MessageCard
            title="Policy Renewal - Auto Insurance 5/15/25"
            author="Michael Roberts"
            date="Apr 5"
            content="Hello Arthur, I’m reaching out regarding the upcoming auto policy renewal for Real Estate Group, LLC..."
            attachments={3}
            isNew
          />
          <MessageCard
            title="New Quote Request - Workers Comp Insurance"
            author="Sarah Chen"
            date="Apr 5"
            content="Hi Arthur, Real Estate Group has expressed interest in adding workers compensation coverage..."
            attachments={3}
            isNew
          />
        </div>
        <div className="space-y-4">
          <MessageCard
            title="Fwd: New Submission - BPM Real Estate - EFF 4/1/24"
            author="Joshua Dunmire"
            date="Mar 25"
            content="Arthur, attached please find our submission for the above mentioned applicant..."
            attachments={0}
            responded
          />
          <MessageCard
            title="New Business: BPM Real Estate Group, LLC"
            author="Isabel Kreller"
            date="Feb 28"
            content="Hello Arthur, I am pleased to present you with a submission on this client’s upcoming policy..."
            attachments={5}
          />
        </div>
      </div>
    </div>
  );
}

export default InboxView;
