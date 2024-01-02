function Header() {
  type NavType = string[];

  const NavComponents: NavType = ["Home", "About", "Products", "Contact"];

  return (
    <header
      className=" h-[100vh] flex flex-col items-center justify-center"
      id="header"
    >
      <nav className="bg-transparent fixed flex flex-row items-center justify-between w-full px-[2rem] py-[1rem] top-0 ">
        <img
          src="/img/Logo.png"
          alt="pummi nuts shop logo"
          className="max-w-[80px]"
        />
        <ul className="flex flex-row gap-6">
          {NavComponents.map((component: string) => (
            <li>
              <a className="text-2xl text-white" href="#">
                {component}
              </a>
            </li>
          ))}
          {/* <li>
            <a className="text-2xl text-white" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-2xl text-white" href="#">
              About
            </a>
          </li>
          <li>
            <a className="text-2xl text-white " href="#">
              Products
            </a>
          </li>
          <li>
            <a className="text-2xl text-white" href="#">
              Contact
            </a>
          </li> */}
        </ul>
      </nav>
      <div className="flex flex-col items-center justify-center gap-10 text-center text-white">
        <h1 className="text-6xl">Tết đủ đầy, hạt ngon sum vầy</h1>
        <button className="btn" type="button">
          Xem thêm
        </button>
      </div>
    </header>
  );
}

export default Header;
