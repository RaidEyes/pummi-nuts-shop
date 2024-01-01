function Contact() {
  return (
    <div>
      <form action="submit">
        <label>Liên hệ shop nhé!</label>
        <label htmlFor="name">Tên Bạn</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Email Bạn</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="phone">Số điện thoại Bạn</label>
        <input type="number" id="phone" name="phone" />
        <label htmlFor="demand">Bạn cần gì</label>
        <input type="text" id="demand" name="demand" />
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
