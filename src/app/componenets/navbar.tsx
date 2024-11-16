
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 sticky top-0 z-30 w-full bg-main backdrop-blur-3xl print:hidden flex justify-center p-4">
      <div className="flex h-16 w-[95%] items-center justify-between md:h-20 lg:w-[90%] xl:w-[1300px]">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={90}
            height={113}
             className="mt-14 w-[70px] sm:mt-20 sm:w-[100px] md:w-[100px] filter-dark"
          />
        </Link>

        {/* Title */}
        <h1 className="hidden text-[15px] font-extrabold text-[#b9d8f3] lg:block  xl:text-2xl">
          Tuition Free Education Program on Latest Technologies
        </h1>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center gap-5 text-[#FAF9F6] lg:gap-10">
          {["home", "apply", "jobs", "result"].map((menu) => (
            <Link href={`/${menu}`} key={menu} className="menu_btns capitalize">
              {menu}
            </Link>
          ))}
          
          {/* Courses Dropdown */}
          <div className="relative">
            <button
              type="button"
              className="menu_btns flex items-center gap-1"
              aria-haspopup="menu"
              aria-controls="course-menu"
            >
              Courses
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
              </svg>
            </button>
            
           
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
