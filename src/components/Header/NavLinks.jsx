// import { HiOutlineStar } from "react-icons/hi2";
// import { TiFlashOutline } from "react-icons/ti";
// import { FaAward } from "react-icons/fa6";

// export const RightMenu = () => {
//   const menuItems = ['مردانه', 'زنانه', 'بچگانه' , 'لوازم ورزشی' , 'شیکر و جاگ']
//   return (
//     <>
//         <ul className="hidden md:flex gap-x-2.5 lg:gap-x-5 xl:gap-x-10 text-gray-600 text-sm lg:text-base font-vazirB font-bold">
//           {
//               menuItems.map((item, index) => (
//                   <li key={index}>
//                     <a href="#" className="transition-all duration-300 hover:text-secondary">{item}</a>
//                   </li>
//               ))
//           }

//         </ul>
//     </>
//   )
// }

// export const LeftMenu = () => {
//   const menuItems = {
//     title : ['جدیترین محصولات', 'تخفیفات ویژه' , 'پرفروش ترین ها'],
//     icons: [HiOutlineStar ,TiFlashOutline ,FaAward]
//   }
//   return (
//         <ul className="hidden md:flex gap-x-2.5 lg:gap-x-5 xl:gap-x-10 text-gray-600 text-sm lg:text-base font-vazirB font-bold">
//             {menuItems.title.map((item, index) => {
//               const Icon = menuItems.icons[index];
//               return (
//                 <li key={index} className="flex items-center gap-x-0.5 lg:gap-x-2 hover:text-secondary transition-all duration-300">
//                   <Icon className="text-primary w-5 h-5" />
//                   <a href="#">{item}</a>
//                 </li>
//                 );
//             })}
//         </ul>
//   )
// }

// const NavLinks = () => {
//     return (
//       <>
//         <nav className="hidden md:flex items-center justify-between bg-Neutral rounded-2xl px-5 lg:px-10 py-5">
//           <RightMenu />
//           <LeftMenu />
//         </nav>
//       </>
//     );
//   };
  
//   export default NavLinks;

// import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiOutlineStar } from "react-icons/hi2";
import { TiFlashOutline } from "react-icons/ti";
import { FaAward } from "react-icons/fa6";

const subMenus = {
  "مردانه": ["کفش های مردانه", "لباس های مردانه", "اکسسوری مردانه"],
  "زنانه": ["کفش های زنانه", "لباس های زنانه", "اکسسوری زنانه"],
  "بچگانه": ["پوشاک بچگانه", "کفش بچگانه", "اکسسوری بچگانه"],
  "لوازم ورزشی": ["تجهیزات باشگاهی", "لباس ورزشی", "تجهیزات یوگا"],
  "شیکر و جاگ": ["شیکرهای پروتئین", "جاگ آب", "ست شیکر"]
};

export const RightMenu = ({ onHover }) => {
  const menuItems = Object.keys(subMenus);

  return (
    <ul className="hidden md:flex gap-x-2.5 lg:gap-x-5 xl:gap-x-10 text-gray-600 text-sm lg:text-base font-vazirB font-bold">
      {menuItems.map((item, index) => (
        <li
          key={index}
          onMouseEnter={() => onHover(item)}
          onMouseLeave={() => onHover(null)}
          className="relative"
        >
          <a href="#" className="transition-all duration-300 hover:text-secondary">
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};

export const LeftMenu = () => {
  const menuItems = {
    title: ["جدیترین محصولات", "تخفیفات ویژه", "پرفروش ترین ها"],
    icons: [HiOutlineStar, TiFlashOutline, FaAward]
  };

  return (
    <ul className="hidden md:flex gap-x-2.5 lg:gap-x-5 xl:gap-x-10 text-gray-600 text-sm lg:text-base font-vazirB font-bold">
      {menuItems.title.map((item, index) => {
        const Icon = menuItems.icons[index];
        return (
          <li
            key={index}
            className="flex items-center gap-x-0.5 lg:gap-x-2 hover:text-secondary transition-all duration-300"
          >
            <Icon className="text-primary w-5 h-5" />
            <a href="#">{item}</a>
          </li>
        );
      })}
    </ul>
  );
};

const NavLinks = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <div className="relative">
      <div
        className={`fixed inset-0 z-10 transition backdrop-blur-sm duration-300 ${
          activeMenu ? "block" : "hidden"
        }`}
        onMouseEnter={() => setActiveMenu(null)}
      ></div>
      <nav className="hidden md:flex items-center justify-between bg-Neutral rounded-2xl px-5 lg:px-10 py-5 relative z-20">
        <RightMenu onHover={setActiveMenu} />
        <LeftMenu />
      </nav>
      {activeMenu && (
        <div className="absolute top-full right-0 left-0 bg-white shadow-lg p-5 z-30 flex flex-wrap justify-center gap-4 text-sm font-vazirB text-gray-700">
          {subMenus[activeMenu].map((submenu, idx) => (
            <a
              href="#"
              key={idx}
              className="hover:text-secondary transition"
            >
              {submenu}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavLinks;
