function AnimationBowl() {
  return (
    <div className="min-h-[100vh] bg-[url(/img/table-background.png)] content-center bg-no-repeat bg-cover bg-center grid justify-items-center">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="flex items-center justify-end">
            <p className="text-white sm:text-md md:text-lg lg:text-2xl ">
              Việt Quất - Blueberry
            </p>
            <img
              src="/img/Arrow.png"
              alt="Arrow icon"
              className="max-w-[20%] scale-[-1] rotate-[45deg]"
            />
          </div>
          <div className="flex items-center justify-end">
            <img
              src="/img/Arrow.png"
              alt="Arrow icon"
              className="max-w-[20%] scale-y-[-1] rotate-[-45deg]"
            />
            <p className="text-white sm:text-md md:text-lg lg:text-2xl ">
              Sữa Chua Hy Lạp - Greek Yogurt
            </p>
          </div>
          <div className="flex items-center justify-end">
            <p className="text-white sm:text-md md:text-lg lg:text-2xl ">
              Nho Khô - Raisin
            </p>
            <img
              src="/img/Arrow2.png"
              alt="Arrow icon"
              className="max-w-[20%] rotate-[45deg]"
            />
          </div>
        </div>
        <img
          className="max-w-[30rem] self-center"
          src="/img/granola-bowl.png"
          alt="granola bowl"
        />
        <div className="flex flex-col">
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
            <p className="text-white sm:text-md md:text-lg lg:text-2xl ">
              Việt Quất - Blueberry
            </p>
            <img
              src="/img/Arrow.png"
              alt="Arrow icon"
              className="max-w-[20%] scale-[-1] rotate-[45deg]"
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
        </div>
      </div>
    </div>
  );
}

export default AnimationBowl;
