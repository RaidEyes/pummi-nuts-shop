import { useEffect, useState } from "react";

function Cursor() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function styleCursor(e: MouseEvent) {
      const mouseX = e.pageX;
      const mouseY = e.pageY;
      setMouse({ x: mouseX, y: mouseY });
    }

    document.addEventListener("mousemove", styleCursor);
    return () => {
      document.removeEventListener("mousemove", styleCursor);
    };
  }, []);
  return (
    <div
      className="absolute w-6 transition-all duration-100 rounded-[50%] ease-linear bg-white aspect-square"
      style={{ top: `${mouse.y}px`, left: `${mouse.x}px` }}
    ></div>
  );
}

export default Cursor;
