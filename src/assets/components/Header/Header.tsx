import { useRef, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  type NavType = { name: string; src: string }[];

  const NavComponents: NavType = [
    { name: "Home", src: "/icon/home.svg" },
    { name: "About", src: "/icon/information.svg" },
    { name: "Products", src: "/icon/cart.svg" },
    { name: "Contact", src: "/icon/contact.svg" },
  ];

  const ref = useRef<HTMLUListElement | null>(null);

  const [toggle, setToggle] = useState<boolean>(true);

  const [imgSource, setImgSource] = useState<string>("/icon/menu.png");

  const showMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setToggle((prev) => !prev);
    if (!ref.current || !event.target) return;
    ref.current.style.transform = toggle
      ? "translateX(0)"
      : "translateX(-100%)";
    setImgSource(toggle ? "/icon/close.png" : "/icon/menu.png");
  };

  return (
    <header className="flex flex-col items-center justify-center " id="header">
      <nav className="bg-transparent fixed flex flex-row items-center justify-center lg:justify-between w-full px-[2rem] py-[1rem] top-0 z-[100]">
        <img
          src="/img/Logo.png"
          alt="pummi nuts shop logo"
          className=" max-w-[90px]"
        />
        <img
          onClick={showMenu}
          src={imgSource}
          alt="menu icon"
          className="max-w-[20px] absolute right-6 cursor-pointer lg:hidden"
        />
        <ul
          ref={ref}
          className="transition-all duration-500 fixed top-0 left-0 flex flex-col h-full translate-x-[-100%] lg:bg-transparent lg:translate-x-0 gap-12 px-6 py-8 bg-black lg:h-auto lg:flex-row lg:static"
        >
          {NavComponents.map(({ name, src }: { name: string; src: string }) => (
            <li
              className="flex flex-row transition-transform duration-500 group hover:translate-x-8"
              key={name}
            >
              <img src={src} className="w-[40px] mr-8 lg:hidden" alt="icon" />
              <Link
                className="relative text-2xl text-white before:absolute before:inset-0 before:bg-amber-100 before:w-0 group-hover:before:w-full before:transition-[width] before:ease-in-out before:duration-[400ms] px-4 py-1 transition-colors group-hover:text-black before:z-[-1] duration-[450ms] before:rounded-md"
                to={name}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
