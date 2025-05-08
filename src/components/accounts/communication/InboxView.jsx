
import SearchBar from "./SearchBar";
import ButtonGroup from "./ButtonGroup";
import MessageList from "./MessageList";

function InboxView() {
  return (
    <div className="text-white mt-10">
      <h2 className="text-3xl mb-5">Communication</h2>
      <div className="bg-[#0F172A] text-white rounded-2xl p-4 space-y-4">
        <div className="flex justify-start gap-4 mb-4">
          <SearchBar />
          <ButtonGroup />
        </div>

        <MessageList />
      </div>
    </div>
  );
}

export default InboxView;
