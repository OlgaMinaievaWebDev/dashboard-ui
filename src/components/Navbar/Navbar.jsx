import { useRef } from "react";
import TabsContainer from "./TabsContainer";
import ScrollButtons from "./ScrollButtons";

 function Navbar() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -100 : 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="text-white p-4 space-y-4">
      <div className="flex items-center gap-2">
        <TabsContainer scrollRef={scrollRef} />
        <ScrollButtons onScroll={scroll} />
      </div>
    </div>
  );
 }

 
export default Navbar;
