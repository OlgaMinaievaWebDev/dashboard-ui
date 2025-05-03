const Arrow = ({ position }) => (
  <div
    className="absolute -top-3 w-0 h-0 border-l-4 border-r-4 border-b-8 border-transparent border-b-blue-500"
    style={{ left: `${position}%`, transform: "translateX(-50%)" }}
  />
);

export default Arrow;
