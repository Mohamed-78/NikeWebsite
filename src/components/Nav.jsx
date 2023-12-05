import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons';
// import { navLinks } from '../constants';

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
              <img src={headerLogo} alt="Logo" width={130} height={29} />
            </a>
            <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
              <li>
                <a href="#home" className="font-montserrat leading-normal text-lg text-slate-gray">
                  Home
                </a>
              </li>
              <li>
                <a href="#about-us" className="font-montserrat leading-normal text-lg text-slate-gray">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="font-montserrat leading-normal text-lg text-slate-gray">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact-us" className="font-montserrat leading-normal text-lg text-slate-gray">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="hidden max-lg:block">
              <img src={hamburger} width={25} height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav