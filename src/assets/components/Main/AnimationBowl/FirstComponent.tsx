import { useRef, useState } from "react";

function FirstComponent() {
  type TDataUser = {
    src: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
  };

  const data: TDataUser[] = [
    {
      src: "/img/granola-bowl-1.png",
      paragraph1: "Bổ sung năng lượng",
      paragraph2: "Chống oxi hóa",
      paragraph3: "Ăn sáng ngon miệng",
      paragraph4: "Đầy đủ dinh dưỡng",
    },
    {
      src: "/img/granola-bowl-2.png",
      paragraph1: "Ăn vặt cực ngon",
      paragraph2: "Kết hợp nhiều loại",
      paragraph3: "Làm việc hiệu quả",
      paragraph4: "Tinh thần tích cực",
    },
    {
      src: "/img/granola-bowl-3.png",
      paragraph1: "Dành chút thời gian",
      paragraph2: "Chăm sóc bản thân",
      paragraph3: "Mỗi ngày thức dậy",
      paragraph4: "Vui vẻ tươi trẻ",
    },
  ];

  const paragraphRef1 = useRef<HTMLParagraphElement | null>(null);
  const paragraphRef2 = useRef<HTMLParagraphElement | null>(null);
  const paragraphRef3 = useRef<HTMLParagraphElement | null>(null);
  const paragraphRef4 = useRef<HTMLParagraphElement | null>(null);
  const bowlElement = useRef<HTMLImageElement | null>(null);

  const [index, setIndex] = useState<number>(0);

  const { src, paragraph1, paragraph2, paragraph3, paragraph4 } = data[index];

  const clientHeight = window.innerHeight;

  const handleNext = () => {
    fowardAnimation();
    setTimeout(() => {
      setIndex((prev: number) => (prev + 1) % data.length);
      backwardAnimation();
    }, 1200);
  };

  const handleBack = () => {
    fowardAnimation();
    setTimeout(() => {
      setIndex((prev: number) => (prev - 1 + 3) % data.length);
      backwardAnimation();
    }, 1200);
  };

  function fowardAnimation() {
    bowlElement.current!.style.transform = `translateY(${clientHeight}px) rotate(360deg)`;
    paragraphRef1.current!.style.transform = `translateX(-350%)`;
    paragraphRef2.current!.style.transform = `translateX(350%)`;
    paragraphRef3.current!.style.transform = `translateX(-320%)`;
    paragraphRef4.current!.style.transform = `translateX(320%)`;
  }
  function backwardAnimation() {
    bowlElement.current!.style.transform = `translateY(0) rotate(0deg)`;
    paragraphRef1.current!.style.transform = `translateX(0)`;
    paragraphRef2.current!.style.transform = `translateX(0)`;
    paragraphRef3.current!.style.transform = `translateX(0)`;
    paragraphRef4.current!.style.transform = `translateX(0)`;
  }

  return (
    <div>
      <div className="z-[1] absolute w-full transition-all duration-500 ease-in-out md:max-w-[60%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] px-8">
        <img
          ref={bowlElement}
          className="max-w-full transition-all duration-[1200ms] ease-in-out"
          src={src}
          alt="granola bowl"
        />
      </div>
      <div className="absolute transition-all duration-[1200ms] ease-in-out left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] grid grid-cols-2 grid-rows-2 gap-x-[50vw] gap-y-[55vw] md:gap-x-[45vw] px-8 w-full md:gap-y-[25vw]">
        <p
          ref={paragraphRef1}
          className="p-4 transition-all duration-[900ms] text-black bg-white border-2 rounded-lg justify-self-end"
        >
          {paragraph1}
        </p>
        <p
          ref={paragraphRef2}
          className="p-4 transition-all duration-[900ms] text-black bg-white border-2 rounded-lg justify-self-start"
        >
          {paragraph2}
        </p>
        <p
          ref={paragraphRef3}
          className="p-4 transition-all duration-[1200ms] text-black bg-white border-2 rounded-lg justify-self-end"
        >
          {paragraph3}
        </p>
        <p
          ref={paragraphRef4}
          className="p-4 transition-all duration-[1200ms] text-black bg-white border-2 rounded-lg justify-self-start"
        >
          {paragraph4}
        </p>
      </div>
      <div className="z-10 absolute flex translate-x-[-50%] flex-row gap-4 bottom-12">
        <button
          onClick={handleBack}
          type="button"
          className="z-10 text-lg text-white btn"
        >
          {"<"}
        </button>
        <button
          onClick={handleNext}
          type="button"
          className="z-10 text-lg text-white btn"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default FirstComponent;
