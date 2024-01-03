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
    <div>
      <form id="form" action="submit">
        <h3>Liên hệ shop nhé!</h3>
        {formComponent.map(({ name, type, description }: FormType) => (
          <div key={name}>
            <label htmlFor={name}>{description}</label>
            <input type={type} id={name} name={name} />
          </div>
        ))}

        <button type="button">Gửi</button>
      </form>
      <div>
        <h3>Pummi nuts Shop</h3>
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
