function Introduction() {
  const LunarNewYear = new Date("2024, 03, 03");
  const today = new Date();
  return (
    <div
      style={{
        backgroundImage:
          today.getTime() < LunarNewYear.getTime() ? "url(/img/Happy.png)" : "",
      }}
      className="min-h-[100vh] flex flex-col items-center justify-center bg-cover gap-12 text-center text-white"
    >
      <h1 className="hidden px-6 text-3xl md:text-6xl">
        Tết đủ đầy, hạt ngon sum vầy
      </h1>
      <button className="z-10 hidden btn" type="button">
        Xem thêm
      </button>
    </div>
  );
}

export default Introduction;
