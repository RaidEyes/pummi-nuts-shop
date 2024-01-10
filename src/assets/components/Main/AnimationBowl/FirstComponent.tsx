import { useState } from "react";

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

  const [index, setIndex] = useState<number>(0);

  const { src, paragraph1, paragraph2, paragraph3, paragraph4 } = data[index];

  window.addEventListener("scroll", (e) => {
    console.log(Math.floor(window.scrollY));
  });

  const handleNext = () => {
    if (index === 2) return setIndex(0);
    setIndex((prev: number) => prev + 1);
  };
  return (
    <div>
      <div className="z-[1] absolute w-full transition-all duration-500 ease-in-out md:max-w-[60%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] px-8">
        <img className="max-w-full" src={src} alt="granola bowl" />
      </div>
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] grid grid-cols-2 grid-rows-2 gap-x-[50vw] gap-y-[55vw] md:gap-x-[45vw] px-8 w-full md:gap-y-[25vw]">
        <p className="p-4 text-black bg-white border-2 rounded-lg justify-self-end">
          {paragraph1}
        </p>
        <p className="p-4 text-black bg-white border-2 rounded-lg justify-self-start">
          {paragraph2}
        </p>
        <p className="p-4 text-black bg-white border-2 rounded-lg justify-self-end">
          {paragraph3}
        </p>
        <p className="p-4 text-black bg-white border-2 rounded-lg justify-self-start">
          {paragraph4}
        </p>
      </div>
      <div className="absolute flex translate-x-[-50%] flex-row gap-4 bottom-12">
        <button type="button" className="text-lg text-white btn">
          {"<"}
        </button>
        <button
          onClick={handleNext}
          type="button"
          className="text-lg text-white btn"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default FirstComponent;
