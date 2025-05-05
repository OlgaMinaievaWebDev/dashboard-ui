import { tabs } from "../../../data/quickAction";
import Tabs from "./Tabs";

function QuickActions() {
 return (
   <div className="text-white rounded-2xl shadow-lg p-6 w-full max-w-md space-y-8 h-max flex flex-col">
   <h2 className="text-xl ">Quick actions</h2>
   <Tabs tabs={tabs}  />
   </div>
 );
}

export default QuickActions
