function Products() {
  type TProducts = {
    src: string;
    name: string;
    spice: string;
    price: string;
    quantity: number;
  };

  const productsData: TProducts[] = [
    {
      src: "/img/Cashew-product.png",
      name: "Hạt Điều",
      spice: "tỏi ớt",
      price: "55,000 Đ",
      quantity: 200,
    },
    {
      src: "/img/Peanuts-product.png",
      name: "Đậu Phộng",
      spice: "tỏi ớt",
      price: "35,000 Đ",
      quantity: 250,
    },
  ];

  return (
    <div className="min-h-[100vh]">
      <div className="flex flex-col items-center justify-center gap-10 px-4 pt-32 pb-8 text-2xl text-white lg:flex-row ">
        {productsData.map(
          ({ src, name, spice, price, quantity }: TProducts) => (
            <div
              className="group relative before:transition-all before:duration-500 hover:before:bg-black/[0.5] before:inset-0 transition-all duration-500 before:absolute rounded-xl overflow-hidden"
              key={name}
            >
              <img className="max-w-[20rem] w-full" alt={name} src={src} />
              <div className="opacity-0 group-hover:opacity-100 duration-500 transition-all absolute top-[40%] left-[10%] flex flex-col gap-8">
                <h2 className="text-3xl font-bold">
                  {name}{" "}
                  <span className="text-2xl italic font-light text-red-500">
                    {spice}
                  </span>
                </h2>
                <p className="text-5xl">
                  {price} / <span>{quantity}g</span>
                </p>

                <a
                  className="text-2xl italic btn"
                  href="https://zalo.me/0902815840"
                  target="blank"
                >
                  Liên hệ
                </a>
              </div>
            </div>
          )
        )}
      </div>
      <div className="p-6 text-center">
        <p className="text-3xl text-white">
          Đối với những sản phẩm khác (các loại hạt khác), mọi người liên hệ
          shop nhé
        </p>
      </div>
    </div>
  );
}

export default Products;
