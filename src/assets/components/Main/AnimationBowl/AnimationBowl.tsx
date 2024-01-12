import FirstComponent from "./FirstComponent";
import { useRef } from "react";

function AnimationBowl() {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={ref}
      className="overflow-hidden scroll-smooth min-h-[100vh] relative bg-[url(/img/table-background.png)] content-center bg-no-repeat bg-cover bg-center grid justify-items-center"
    >
      <FirstComponent />
    </div>
  );
}

export default AnimationBowl;
