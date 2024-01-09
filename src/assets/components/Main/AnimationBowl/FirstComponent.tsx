function FirstComponent() {
  return (
    <div>
      <div className="transition-all ease-in-out duration-500 absolute w-full md:max-w-[60%] z-[2] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] px-8">
        <img
          className="max-w-full"
          src="/img/granola-bowl.png"
          alt="granola bowl"
        />
      </div>
      <div className="z-[1] absolute w-full transition-all duration-500 ease-in-out md:max-w-[60%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] px-8">
        <img
          className="max-w-full"
          src="/img/granola-bowl-animation.png"
          alt="granola bowl"
        />
      </div>
      <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] grid grid-cols-2 grid-rows-2 gap-x-[50vw] gap-y-[55vw] md:gap-x-[45vw] px-8 w-full md:gap-y-[25vw]">
        <p className="p-4 text-black bg-white border-2 rounded-lg justify-self-end">
          Bổ sung năng lượng
        </p>
        <p className="p-4 text-black bg-white border-2 rounded-lg justify-self-start">
          Chống oxi hóa
        </p>
        <p className="p-4 text-black bg-white border-2 rounded-lg justify-self-end">
          Ăn sáng ngon miệng
        </p>
        <p className="p-4 text-black bg-white border-2 rounded-lg justify-self-start">
          Đẩy đủ dinh dưỡng
        </p>
      </div>
      <div className="absolute flex translate-x-[-50%] flex-row gap-4 bottom-12">
        <button type="button" className="text-lg text-white btn">
          {"<"}
        </button>
        <button type="button" className="text-lg text-white btn">
          {">"}
        </button>
      </div>
    </div>
  );
}

export default FirstComponent;
