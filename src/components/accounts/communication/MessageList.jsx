import MessageCard from "./MessageCard";
function MessageList() {
  return (
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
  );
}

export default MessageList;
