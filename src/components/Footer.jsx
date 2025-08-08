import { assets } from "../../assets/assets";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="mt-20 font-ovo">
      <div className="text-center">
        <Image
          src={assets.logo_light}
          alt="logo"
          className="w-36 mx-auto mb-2"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="mail" className="w-6" />
          robertgermandev@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Robert German. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/robertgermandev">
              GitHub
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/robertgerman578/"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
