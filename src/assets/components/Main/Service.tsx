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
    <div>
      <h2>Dịch vụ</h2>
      <div>
        <ul>
          {Services.map(({ service, img, alt, description }: ServiceType) => (
            <li>
              <div>
                <h2>{service}</h2>
                <img src={img} alt={alt} />
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Service;
