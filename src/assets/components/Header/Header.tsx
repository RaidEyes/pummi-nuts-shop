function Header() {
  type NavType = string[];

  const NavComponents: NavType = ["Home", "About", "Products", "Contact"];

  return (
    <header
      className=" h-[100vh] flex flex-col items-center justify-center"
      id="header"
    >
      <nav className="bg-transparent fixed flex flex-row items-center justify-between w-full px-[2rem] py-[1rem] top-0 z-[100]">
        <img
          src="/img/Logo.png"
          alt="pummi nuts shop logo"
          className="max-w-[90px]"
        />
        <ul className="flex flex-row gap-12">
          {NavComponents.map((component: string) => (
            <li key={component}>
              <a
                className="relative text-2xl text-white before:absolute before:inset-0 before:bg-amber-100 before:w-0 hover:before:w-full before:transition-[width] before:ease-in-out before:duration-[400ms] px-4 py-1 transition-colors hover:text-black before:z-[-1] duration-[450ms] before:rounded-xl"
                href="#"
              >
                {component}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col items-center justify-center gap-12 text-center text-white">
        <h1 className="text-6xl">Tết đủ đầy, hạt ngon sum vầy</h1>
        <button className="btn" type="button">
          Xem thêm
        </button>
      </div>
    </header>
  );
}

export default Header;
