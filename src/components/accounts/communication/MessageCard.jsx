import { Paperclip } from "lucide-react";

function MessageCardOld({
  title,
  author,
  date,
  content,
  attachments,
  isNew,
  responded,
}) {
  return (
    <div
      className={`rounded-2xl p-4 border ${
        isNew ? "border-blue-500" : "border-transparent"
      } bg-[#1E2235] space-y-2`}
    >
      <div className="flex items-center gap-2">
        {isNew && (
          <span className="text-xs bg-blue-600 text-white rounded-full px-2 py-0.5">
            NEW
          </span>
        )}
        {responded && (
          <span className="text-xs bg-blue-900 text-blue-400 rounded-full px-2 py-0.5">
            Responded
          </span>
        )}
        <h2 className="text-lg font-semibold text-white">{title}</h2>
      </div>
      <p className="text-sm text-gray-400">
        {author} // {date}
      </p>
      <p className="text-gray-300 text-sm">{content}</p>
      <div className="flex items-center justify-between">
        {attachments > 0 && (
          <div className="flex items-center text-green-300 bg-[#2a3d33] text-sm rounded-full px-2 py-1 gap-1">
            <Paperclip className="w-4 h-4" />
            {attachments} attachments
          </div>
        )}
        <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm">
          Reply
        </button>
      </div>
    </div>
  );
}

export default MessageCardOld;
