function Service() {
  type ServiceType = {
    service: string;
    img: string;
    alt: string;
    description: string;
  };

  const Services: ServiceType[] = [
    {
      service: "Công thức",
      img: "/img/fomula.png",
      alt: "fomula img",
      description: "Các công thức mix hạt để bạn tận hưởng",
    },
    {
      service: "Sản phẩm",
      img: "/img/products.png",
      alt: "products img",
      description: "Chọn những sản phẩm tốt nhất cho sức khỏe",
    },
    {
      service: "Hỗ trợ",
      img: "/img/support.png",
      alt: "support img",
      description: "Hỗ trợ đặt hàng, thanh toán, vận chuyển,...",
    },
  ];
  return (
    <div className="bg-[#d7d0ae] lg:min-h-[100vh] px-12 py-12 flex flex-col gap-16">
      <h2 className="text-6xl font-bold text-center uppercase lg:pl-10 lg:text-left">
        Dịch vụ
      </h2>
      <div className="px-12">
        <ul className="grid grid-cols-1 grid-rows-3 gap-12 lg:grid-rows-1 sm:grid-rows-2 sm:grid-cols-2 lg:grid-cols-3">
          {Services.map(({ service, img, alt, description }: ServiceType) => (
            <li className="cursor-pointer" key={service}>
              <div className="group rounded-2xl overflow-hidden relative after:absolute after:inset-0 after:bg-black after:opacity-0 hover:after:opacity-60 after:transition-opacity after:duration-500 after:z-[0] ">
                <div className="absolute px-8 w-full top-[40%] left-[50%] translate-x-[-50%] z-10 opacity-0 group-hover:opacity-100 transition-opacity hover:duration-200">
                  <h2 className="font-bold z-10 mb-8 sm:text-3xl text-[7vw] uppercase text-white ">
                    {service}
                  </h2>
                  <p className="text-white text-[3.5vw] sm:text-sm lg:text-base">
                    {description}
                  </p>
                </div>
                <img
                  className="aspect-[3/4] object-cover group-hover:scale-110 group-transition-[scale] group-hover:duration-700"
                  src={img}
                  alt={alt}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Service;
