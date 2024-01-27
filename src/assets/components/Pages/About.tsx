function About() {
  const windowWidth = window.innerWidth;
  return (
    <div className="min-h-[100vh] h-full bg-teal-950 w-full px-8 flex flex-col gap-6 text-white pt-32 text-center">
      <div>
        <h2>
          Đam mê <span>hạt</span> cùng
        </h2>
        <p>Pummi Nuts</p>
      </div>
      <img alt="illustration photos" src="/img/about-img.png" />
      <div className="flex flex-col items-center justify-center gap-8 lg:block">
        <img
          className="lg:max-w-[50%] max-w-[80%] lg:float-left lg:mr-12"
          alt="illustration photos of nuts"
          src={
            windowWidth <= 1008
              ? "img/side-img-mobile.png"
              : "/img/side-img.png"
          }
        />
        <p className="text-center lg:text-justify">
          Pummi nuts shop - Niềm vui từ những hạt dinh dưỡng Từ niềm mong muốn
          tìm ra một món ăn nhanh gọn, bổ dưỡng và tràn đầy niềm vui, Pummi nuts
          shop ra đời. Chúng tôi chuyên cung cấp các loại hạt dinh dưỡng như đậu
          phộng, hạt điều,... với hương vị thơm ngon, dễ ăn, phù hợp với mọi lứa
          tuổi. Sứ mệnh của chúng tôi là mang niềm vui tới mọi người, gắn kết
          tình thân khi mọi người cùng thưởng thức món ngon này. Chúng tôi mong
          muốn rằng những sản phẩm của Pummi nuts shop sẽ góp phần mang lại cho
          bạn và gia đình những giây phút thư giãn và hạnh phúc. #Pumminutsshop
          #Hạtdinhdưỡng #Ngonbổdễăn #Tìnhthầnvớihạt
        </p>
      </div>
    </div>
  );
}

export default About;
