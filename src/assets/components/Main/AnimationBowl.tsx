function AnimationBowl() {
  return (
    <div
      style={{ gridTemplateRows: `repeat(3,minmax(0,min-content))` }}
      className="min-h-[100vh] bg-[url(/img/table-background.png)] content-center bg-no-repeat bg-cover bg-center grid justify-items-center grid-cols-3"
    >
      <img
        className="max-w-[80%] col-start-2 col-end-3 row-start-1 row-end-4 self-center"
        src="/img/granola-bowl.png"
        alt="granola bowl"
      />
      <div className="flex items-center">
        <p className="text-white sm:text-md md:text-lg lg:text-2xl ">
          Việt Quất - Blueberry
        </p>
        <img
          src="/img/Arrow.png"
          alt="Arrow icon"
          className="max-w-[20%] scale-[-1] rotate-[45deg]"
        />
      </div>
      <div className="flex items-center ">
        <img
          src="/img/Arrow.png"
          alt="Arrow icon"
          className="max-w-[20%] scale-y-[-1] rotate-[-45deg]"
        />
        <p className="text-white sm:text-md md:text-lg lg:text-2xl ">
          Sữa Chua Hy Lạp - Greek Yogurt
        </p>
      </div>
      <div className="flex items-center">
        <p className="text-white sm:text-md md:text-lg lg:text-2xl ">
          Nho Khô - Raisin
        </p>
        <img
          src="/img/Arrow2.png"
          alt="Arrow icon"
          className="max-w-[20%] rotate-[45deg]"
        />
      </div>
      <div className="flex items-center">
        <img
          src="/img/Arrow.png"
          alt="Arrow icon"
          className="max-w-[20%] scale-[-1] rotate-[45deg]"
        />
        <p className="text-white sm:text-md md:text-lg lg:text-2xl ">
          Việt Quất - Blueberry
        </p>
      </div>
      <div className="flex items-center">
        <img
          src="/img/Arrow.png"
          alt="Arrow icon"
          className="max-w-[20%] scale-[-1] rotate-[45deg]"
        />
        <p className="text-white sm:text-md md:text-lg lg:text-2xl ">
          Việt Quất - Blueberry
        </p>
      </div>
      <div className="flex items-center">
        <img
          src="/img/Arrow.png"
          alt="Arrow icon"
          className="max-w-[20%] scale-[-1] rotate-[45deg]"
        />
        <p className="text-white sm:text-md md:text-lg lg:text-2xl ">
          Việt Quất - Blueberry
        </p>
      </div>
    </div>
  );
}

export default AnimationBowl;
