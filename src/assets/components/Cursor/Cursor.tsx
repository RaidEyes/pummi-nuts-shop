import { useEffect, useState } from "react";

function Cursor() {
  interface CursorType {
    name: string;
    duration: number;
    width: string;
  }

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const cursorComponent: CursorType[] = [
    {
      name: `circle 1`,
      duration: 100,
      width: `1.5rem`,
    },
    {
      name: `circle 2`,
      duration: 120,
      width: `1.25rem`,
    },
    {
      name: `circle 3`,
      duration: 140,
      width: `1rem`,
    },
    {
      name: `circle 4`,
      duration: 160,
      width: `.75rem`,
    },
    {
      name: `circle 5`,
      duration: 180,
      width: `.5rem`,
    },
  ];
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
    <>
      {cursorComponent.map(({ name, duration, width }) => (
        <div
          className="z-[-1] hidden lg:block absolute shadow-xl brightness-125 shadow-white transition-all translate-x-[-50%] translate-y-[-50%] rounded-[50%] ease-linear bg-white aspect-square"
          key={name}
          style={{
            top: `${mouse.y}px`,
            left: `${mouse.x}px`,
            width: `${width}`,
            transitionDuration: `${duration}ms`,
          }}
        ></div>
      ))}
    </>
  );
}

export default Cursor;
