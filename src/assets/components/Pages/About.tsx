function About() {
  const windowWidth = window.innerWidth;
  return (
    <div className="min-h-[100vh] pb-8 h-full bg-teal-950 w-full px-8 flex flex-col justify-center items-center gap-8 text-white pt-32 text-center">
      <div className="leading-[5rem] text-[2.5vw]">
        <h2 className="text-[3.5rem]">
          Đam mê{" "}
          <span className="text-[5rem] relative md:bottom-8 italic text-green-200">
            Hạt
          </span>{" "}
          cùng
        </h2>
        <p className="text-[5rem] font-serif text-amber-300">Pummi Nuts</p>
      </div>
      <img
        className="max-w-[50%]"
        alt="illustration photos"
        src="/img/about-img.png"
      />
      <div className="flex flex-col items-center justify-center gap-8 pt-16 lg:block">
        <img
          className="lg:max-w-[50%] max-w-[90%] lg:float-left lg:mr-12 lg:order-0 order-1"
          alt="illustration photos of nuts"
          src={
            windowWidth <= 1008
              ? "img/side-img-mobile.png"
              : "/img/side-img.png"
          }
        />
        <p className="text-center lg:text-justify lg:text-[2.5vw]">
          <span className="font-bold text-amber-300 lg:text-[2.5vw]">
            Pummi Nuts shop
          </span>{" "}
          - Niềm vui từ những hạt dinh dưỡng, từ niềm mong muốn tìm ra một món
          ăn nhanh gọn, bổ dưỡng và tràn đầy niềm vui,{" "}
          <span className="font-bold text-amber-300 lg:text-[2.5vw]">
            Pummi nuts shop
          </span>{" "}
          ra đời. Chúng tôi chuyên cung cấp các loại hạt dinh dưỡng như đậu
          phộng, hạt điều,... với hương vị thơm ngon, dễ ăn, phù hợp với mọi lứa
          tuổi.{" "}
          <span className="font-bold text-amber-300 lg:text-[2.5vw]">
            Sứ mệnh
          </span>{" "}
          của chúng tôi là mang niềm vui tới mọi người, gắn kết tình thân khi
          mọi người cùng thưởng thức món ngon này. Chúng tôi mong muốn rằng
          những sản phẩm của Pummi nuts shop sẽ góp phần mang lại cho bạn và gia
          đình những giây phút thư giãn và hạnh phúc. #Pumminutsshop
          #Hạtdinhdưỡng #Ngonbổdễăn #Tìnhthầnvớihạt
        </p>
      </div>
    </div>
  );
}

export default About;
