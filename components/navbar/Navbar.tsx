import Image from "next/image";
import Button from "../button/Button";
import logo from "../../public/assets/logo.png";

const Navbar: React.FunctionComponent = () => {
  return (
    <>
      <section id="nav" className="container mx-auto pt-[56px] mb-[93.5px]">
        <nav className="md:flex flex-row justify-between space-x-0 items-center">
          <div className="logo-image">
            <Image src={logo} alt="Logo" />
          </div>

          <ul className="hidden md:flex flex-row gap-[40px] items-center">
            <li className="cursor-pointer font-secondary font-bold mx-[20px] text-xs leading-28">
              Product
            </li>
            <li className="cursor-pointer font-secondary font-bold mx-[20px] text-xs leading-28">
              Services
            </li>
            <li className="cursor-pointer font-secondary font-bold mx-[20px] text-xs leading-28">
              About
            </li>
            <Button type="outlined" content="Log in" />
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
