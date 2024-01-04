function Contact() {
  type FormType = {
    name: string;
    type: string;
    description: string;
  };

  const formComponent: FormType[] = [
    { name: "name", type: "text", description: "Tên Bạn" },
    { name: "email", type: "email", description: "Email Bạn" },
    { name: "phone", type: "number", description: "Số điện thoại Bạn" },
    { name: "demand", type: "text", description: "Bạn cần gì?" },
  ];
  return (
    <div className="grid items-center grid-cols-1 gap-12 px-12 py-24 text-center lg:grid-cols-2 place-items-center">
      <form
        className=" rounded-xl flex flex-col items-center lg:max-w-[70%] justify-center gap-8 px-4 py-8 text-center bg-amber-100"
        id="form"
        action="submit"
      >
        <h3 className="text-2xl font-bold">Liên hệ shop nhé!</h3>
        {formComponent.map(({ name, type, description }: FormType) => (
          <div
            className="flex flex-row items-center justify-between w-full gap-4"
            key={name}
          >
            <label htmlFor={name}>{description}</label>
            <input className="rounded-md" type={type} id={name} name={name} />
          </div>
        ))}
        <button className="btn" type="button">
          Gửi
        </button>
      </form>
      <div className="flex flex-col items-start justify-center gap-8 text-left text-white">
        <h3 className="text-3xl font-bold">Pummi nuts Shop</h3>
        <div>
          <p>pumminuts.shop@gmail.com</p>
        </div>
        <div>
          <p>(+84) 902 815 840</p>
        </div>
        <div>
          <p>facebook.com/pumminuts.shop</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
