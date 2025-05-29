import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { HiOutlineStar } from "react-icons/hi2";
import { TiFlashOutline } from "react-icons/ti";
import { FaAward } from "react-icons/fa6";

// main menu -> sub menu -> sub - sub menu
const subMenus = {
  "مردانه": {
    "کفش های مردانه": ["مجلسی", "تابستانه", "ورزشی", "پیاده‌روی", "بوت"],
    "لباس های مردانه": ["تیشرت", "پیراهن", "شلوار", "سوییشرت", "کت"],
    "اکسسوری مردانه": ["ساعت", "کلاه", "کمربند", "عینک", "جوراب"]
  },
  "زنانه": {
    "کفش های زنانه": ["پاشنه بلند", "کتانی", "صندل", "بوت", "کالج"],
    "لباس های زنانه": ["مانتو", "شومیز", "شلوار", "تاپ", "دامن"],
    "اکسسوری زنانه": ["کیف", "ساعت", "روسری", "عینک", "زیورآلات"]
  },
  "بچگانه" : {
    "پوشاک بچگانه": ['تابستانه', 'زمستانه' , 'اسپورت'],
    "کفش بچگانه": ['اسپورت', 'تابستانه' , 'کتونی', 'مجلسی'],
    "اکسسوری بچگانه": ['زیورآلات', 'دستبند' , 'گردنبند', 'کلاه']
  },
    "لوازم ورزشی" : {
    "تجهیزات باشگاهی": ['دمبل', 'تردمیل' , 'میز پرس سینه', 'کش های ورزشی' , 'طناب'],
    "لباس ورزشی": ['ست ورزشی', 'ست تیم فوتبال' , 'ست T-shirt , Short', 'عرق گیر'],
    "شیکر و جاگ": ['شیکر استیل', 'شیکر الکترونیکی' , 'شیکر 2 لیتری', 'انواع جاگ']
  }
};


export const RightMenu = ({ onHoverEnter, onHoverLeave }) => {
  const menuItems = Object.keys(subMenus);

  return (
    <ul className="hidden md:flex gap-x-2.5 lg:gap-x-5 xl:gap-x-10 text-gray-600 text-sm lg:text-base font-vazirB font-bold">
      {menuItems.map((item, index) => (
        <li
          key={index}
          onMouseEnter={() => onHoverEnter(item)}
          onMouseLeave={onHoverLeave}
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
  const [isHovering, setIsHovering] = useState(false);

  // زمان کمی تاخیر برای بستن منو (در صورت خروج ماوس)
  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!isHovering) {
        setActiveMenu(null);
      }
    }, 150); // می‌تونی اینو کم یا زیاد کنی
  };

  return (
    <div className="relative">
      {/* بک‌درآپ */}
      <div
        className={`fixed inset-0 z-10 transition backdrop-blur-sm duration-300 ${
          activeMenu ? "block" : "hidden"
        }`}
        onMouseEnter={() => setActiveMenu(null)}
      ></div>

      {/* نَو */}
      <nav className="hidden md:flex items-center justify-between bg-Neutral rounded-2xl px-5 lg:px-10 py-5 relative z-20">
        <RightMenu
          onHoverEnter={(item) => {
            setActiveMenu(item);
            setIsHovering(true);
          }}
          onHoverLeave={() => {
            setIsHovering(false);
            handleMouseLeave();
          }}
        />
        <LeftMenu />
      </nav>

      {/* دراپ‌داون */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            key={activeMenu}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              handleMouseLeave();
            }}
            className="absolute top-full right-0 left-0 bg-white shadow-lg rounded-4xl p-5 z-30 flex flex-wrap justify-center gap-4 text-sm font-vazirB text-gray-700"
          >
            {Object.entries(subMenus[activeMenu]).map(([category, items], idx) => (
              <div key={idx} className="w-40">
                <div className="font-bold text-lg md:text-xl mb-2 md:gap-x-5 text-primary transition cursor-pointer">{category}</div>
                <ul className="space-y-1">
                  {items.map((subItem, subIdx) => (
                    <li key={subIdx} className="text-sm md:text-lg hover:text-secondary font-bold cursor-pointer transition">
                      {subItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default NavLinks;
