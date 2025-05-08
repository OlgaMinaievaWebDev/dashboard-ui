import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ScrollButtons({ onScroll }) {
  return (
    <>
      <button onClick={() => onScroll("left")} className="p-1">
        <ChevronLeft size={20} />
      </button>
      <button onClick={() => onScroll("right")} className="p-1">
        <ChevronRight size={20} />
      </button>
    </>
  );
}
