export default function TableHeader() {
  return (
    <thead className="text-left text-gray-400 border-b border-gray-700 uppercase">
      <tr>
        <th className="py-2 px-2">Originator</th>
        <th className="py-2 px-2">Client/Line</th>
        <th className="py-2 px-2">Type</th>
        <th className="py-2 px-2">Status</th>
        <th className="py-2 px-2">Created</th>
        <th className="py-2 px-2"></th>
      </tr>
    </thead>
  );
}
