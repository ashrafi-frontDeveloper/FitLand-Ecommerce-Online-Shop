import { HiOutlineStar } from "react-icons/hi2";
import { TiFlashOutline } from "react-icons/ti";
import { FaAward } from "react-icons/fa6";

export const RightMenu = () => {
  const menuItems = ['مردانه', 'زنانه', 'بچگانه' , 'لوازم ورزشی' , 'شیکر و جاگ']
  return (
    <>
        <ul className="hidden md:flex gap-x-10 text-gray-600 text-base font-vazirB font-bold">
          {
              menuItems.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="transition-all duration-300 hover:text-secondary">{item}</a>
                  </li>
              ))
          }

        </ul>
    </>
  )
}

export const LeftMenu = () => {
  const menuItems = {
    title : ['جدیترین محصولات', 'تخفیفات ویژه' , 'پرفروش ترین ها'],
    icons: [HiOutlineStar ,TiFlashOutline ,FaAward]
  }
  return (
        <ul className="hidden md:flex gap-x-10 text-gray-600 text-base font-vazirB font-bold">
            {menuItems.title.map((item, index) => {
              const Icon = menuItems.icons[index];
              return (
                <li key={index} className="flex items-center gap-x-2 hover:text-secondary transition-all duration-300">
                  <Icon className="text-primary w-5 h-5" />
                  <a href="#">{item}</a>
                </li>
                );
            })}
        </ul>
  )
}

const NavLinks = () => {
    return (
      <>
        <nav className="flex items-center justify-between bg-Neutral rounded-2xl px-10 py-5">
          <RightMenu />
          <LeftMenu />
        </nav>
      </>
    );
  };
  
  export default NavLinks;
  