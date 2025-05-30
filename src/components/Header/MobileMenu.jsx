import { motion, AnimatePresence } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoIosClose } from "react-icons/io";
import { HiOutlineStar } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { TiFlashOutline } from "react-icons/ti";
import { toPersianDigits } from "../../utils/ConvertToPersian";
import { FaAward } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import clsx from "clsx";
import { Link } from "react-router-dom";

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


const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItemsRight = {
    title : ['جدیترین محصولات', 'تخفیفات ویژه' , 'پرفروش ترین ها'],
    icons: [HiOutlineStar ,TiFlashOutline ,FaAward]
    }

    const [activeMenu, setActiveMenu] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);


    return (
        <section className="md:hidden relative z-40">
            {/* overly */}
            {isOpen && (
            <div 
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
                onClick={toggleMenu} // این باعث می‌شه با کلیک روی بیرون منو، بسته بشه
            ></div>
            )}



            <div className="flex items-center justify-between">
                {/* shopping cart */}
                <button className="z-30 relative w-10 h-10 flex items-center cursor-pointer justify-center rounded-xl bg-primary text-white">
                    <HiOutlineShoppingBag />
                    <span className=" absolute -top-1 -left-1 w-4 h-4 bg-secondary text-sm rounded-full">
                    {toPersianDigits(0)}
                    </span>
                </button>
                {/* logo */}
                <div className="flex items-center justify-between px-4 py-3">
                    {/* logo */}
                    <div className="flex flex-col gap-y-2 text-start text-2xl font-bold text-gray-800">
                        <svg className="w-[120px] h-8"  viewBox="0 0 151 32" fill="none">
            <g clipPath="url(#clip0_7223_15625)">
            <path d="M9.07969 11.5071V16.1348H20.0172V22.9902H9.07969V31.6179H0.242188V4.66406H21.5547V11.5071H9.07969Z" fill="#FA541C"/>
            <path d="M32.5406 10.5469H24.0781V31.6176H32.5406V10.5469Z" fill="#FA541C"/>
            <path d="M33.4063 4.27077C33.4063 5.61231 32.9438 6.70769 32.0188 7.58154C31.0938 8.43077 29.8688 8.86154 28.3187 8.86154C26.7687 8.86154 25.5313 8.43077 24.6063 7.58154C23.6813 6.74461 23.2188 5.68615 23.2188 4.43077C23.2188 3.17538 23.6813 2.11692 24.6063 1.26769C25.5313 0.418461 26.7687 0 28.3187 0C29.8688 0 31.0938 0.393846 32.0188 1.19385C32.9438 1.99385 33.4063 3.01538 33.4063 4.27077Z" fill="#FA541C"/>
            <path d="M51.3922 30.8794C50.7422 31.2732 49.9547 31.5563 49.0297 31.7286C48.1297 31.9132 47.1797 31.9994 46.1797 31.9994C43.3672 31.9994 41.1672 31.3101 39.5922 29.9194C38.0172 28.504 37.2297 26.3501 37.2297 23.4455V18.0547H34.4297V11.704H37.2297V5.80859H45.6922V11.704H49.8922V18.0547H45.6922V23.3717C45.6922 24.0117 45.8547 24.5163 46.1797 24.8732C46.5297 25.2301 46.9547 25.4147 47.4547 25.4147C48.1797 25.4147 48.8172 25.2178 49.3672 24.8363L51.3922 30.8794Z" fill="#FA541C"/>
            <path d="M53.7812 31.6179V4.66406H62.6187V24.5779H74.4562V31.6302H53.7812V31.6179Z" fill="#FA541C"/>
            <path d="M94.3422 12.5906C92.4172 10.9783 89.7047 10.166 86.1797 10.166C84.5797 10.166 82.9422 10.3752 81.2672 10.7814C79.6047 11.1876 78.1672 11.7783 76.9672 12.5537L79.6672 18.2891C80.3422 17.7722 81.1422 17.3783 82.0922 17.0952C83.0422 16.7876 83.9797 16.6399 84.9047 16.6399C86.2797 16.6399 87.2672 16.9106 87.8672 17.4399C88.3422 17.8583 88.6422 18.4122 88.7422 19.1014H85.3547C83.2297 19.1014 81.4672 19.3476 80.0797 19.8276C78.7047 20.3199 77.6797 21.0337 77.0047 21.9937C76.3297 22.9414 75.9922 24.0983 75.9922 25.4522C75.9922 26.6583 76.2797 27.766 76.8547 28.7629C77.4297 29.7352 78.2797 30.5229 79.4047 31.1137C80.5297 31.7045 81.9172 31.9999 83.5922 31.9999C85.3672 31.9999 86.7797 31.6183 87.8297 30.8429C88.5047 30.3506 89.0297 29.6983 89.4047 28.8737V31.6183H97.2672V20.2952C97.2672 16.7752 96.2922 14.2152 94.3422 12.5906ZM87.7172 26.3014C87.2422 26.6091 86.7172 26.7568 86.1422 26.7568C85.5172 26.7568 85.0172 26.6091 84.6422 26.3014C84.2922 25.9691 84.1172 25.5506 84.1172 25.0706C84.1172 24.4799 84.3172 24.0368 84.7172 23.7537C85.1422 23.446 85.8047 23.2983 86.7047 23.2983H88.8047V24.7629C88.5797 25.4522 88.2172 25.9691 87.7172 26.3014Z" fill="#FA541C"/>
            <path d="M112.997 17.513C112.859 17.4884 112.722 17.4761 112.572 17.4761C111.997 17.4761 111.459 17.6238 110.959 17.9068C110.859 17.9561 110.759 18.0299 110.672 18.0914C110.884 17.5253 111.409 17.1191 112.022 17.1191C112.397 17.1191 112.747 17.2668 112.997 17.513Z" fill="#FA541C"/>
            <path d="M122.312 14.2152C121.587 12.8245 120.587 11.8029 119.312 11.1629C118.05 10.4983 116.625 10.166 115.05 10.166C113.375 10.166 111.85 10.5599 110.475 11.3599C109.887 11.7045 109.35 12.1352 108.875 12.6399V10.5476H100.812V31.6183H109.287C109.084 31.6183 109.843 31.6183 110.118 31.6183H113.778C114.228 31.6183 115.109 31.6183 114.975 31.6183H123.437V19.606C123.437 17.3906 123.062 15.5937 122.312 14.2152ZM116.237 28.7999C116.237 28.8737 116.238 28.9476 116.225 29.0214H107.6C107.6 28.9476 107.6 28.8737 107.6 28.7999V19.2245C107.6 18.5476 107.887 17.9076 108.387 17.4399L110.212 15.7414C111.175 14.8429 112.687 14.8429 113.65 15.7414L115.475 17.4399C115.975 17.9076 116.25 18.5476 116.25 19.2245V28.7999H116.237Z" fill="#FA541C"/>
            <path d="M141.78 3.03906V12.0114C141.53 11.7652 141.267 11.5437 140.992 11.3591C139.842 10.5591 138.367 10.1652 136.567 10.1652C134.767 10.1652 133.155 10.596 131.63 11.4698C130.13 12.3437 128.93 13.6114 128.03 15.2483C127.13 16.8606 126.68 18.8052 126.68 21.0575C126.68 23.3098 127.13 25.2791 128.03 26.916C128.93 28.5283 130.13 29.796 131.63 30.6945C133.155 31.5683 134.805 31.9991 136.567 31.9991C138.467 31.9991 139.98 31.6175 141.105 30.8421C141.505 30.5714 141.867 30.2514 142.192 29.8821V31.6175H150.242V3.03906H141.78ZM141.48 23.3714C141.18 23.9868 140.78 24.4545 140.28 24.7621C139.78 25.0698 139.217 25.2175 138.592 25.2175C137.967 25.2175 137.405 25.0698 136.905 24.7621C136.405 24.4545 136.005 23.9868 135.717 23.3714C135.417 22.7314 135.267 21.956 135.267 21.0575C135.267 20.1591 135.417 19.3837 135.717 18.7929C136.005 18.1775 136.405 17.7098 136.905 17.4021C137.405 17.0944 137.967 16.9468 138.592 16.9468C139.217 16.9468 139.78 17.0944 140.28 17.4021C140.78 17.7098 141.18 18.1775 141.48 18.7929C141.78 19.3837 141.93 20.1344 141.93 21.0575C141.93 21.9806 141.78 22.7314 141.48 23.3714Z" fill="#FA541C"/>
            <path d="M112.991 17.513C112.741 17.2668 112.391 17.1191 112.016 17.1191C111.403 17.1191 110.878 17.5253 110.666 18.0914C110.616 18.2514 110.578 18.4238 110.578 18.6084C110.578 19.4207 111.228 20.0976 112.016 20.0976C112.803 20.0976 113.466 19.4207 113.466 18.6084C113.466 18.1776 113.278 17.7838 112.991 17.513Z" fill="#EDEDEE" stroke="#FA541C"/>
            <path d="M113.466 18.6084C113.466 19.4207 112.816 20.0976 112.016 20.0976C111.216 20.0976 110.578 19.4207 110.578 18.6084C110.578 18.4238 110.616 18.2514 110.666 18.0914C110.878 17.5253 111.403 17.1191 112.016 17.1191C112.391 17.1191 112.741 17.2668 112.991 17.513C113.278 17.7838 113.466 18.1776 113.466 18.6084Z" fill="#FA541C"/>
            </g>
            <defs>
            <clipPath id="clip0_7223_15625">
            <rect width="150" height="32" fill="white" transform="translate(0.242188)"/>
            </clipPath>
            </defs>
                        </svg>
                    </div>
                </div>
                {/* Toggle Button */}
                <button className=" relative z-50" onClick={toggleMenu}>
                {isOpen ? <IoIosClose className="w-10 h-10 cursor-pointer" /> : <IoIosMenu className="w-10 h-10 cursor-pointer" />}
                </button>


                {/* Mobile Menu */}
                <nav className={clsx("flex absolute left-0 top-full w-full border-b-2 border-x-1 border-primary bg-Neutral bg-opacity-90 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl origin-top transform transition-all duration-700 z-50",{"scale-y-100 opacity-100 translate-y-0": isOpen,"scale-y-0 opacity-0 -translate-y-10": !isOpen,})}>
                    {/* menu left */}
                    <ul className="flex flex-col gap-y-4 p-6">
                        {Object.entries(subMenus).map(([menu, categories], i) => (
                            <li key={i} className="flex flex-col ">
                            {/* منوی اصلی */}
                            <div
                                onClick={() =>
                                setActiveMenu(activeMenu === menu ? null : menu)
                                }
                                className="text-right font-bold text-gray-800 hover:text-orange-500 cursor-pointer flex justify-between items-center transition-all duration-300"
                            >
                                {menu}
                                <span>{activeMenu === menu ? <RiArrowDropUpLine className="w-7 h-7" /> : <RiArrowDropDownLine className="w-7 h-7" />}</span>
                            </div>

                            {/* باز شدن دسته‌بندی‌ها با انیمیشن */}
                            <AnimatePresence initial={false}>
                                {activeMenu === menu && (
                                <motion.ul
                                    key="submenu"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className=" flex flex-col gap-y-2.5 mt-2.5 overflow-hidden"
                                >
                                    {Object.entries(categories).map(([category, items], j) => (
                                    <li key={j} className="text-[13px] font-bold flex flex-col">
                                        {/* دسته‌بندی داخلی */}
                                        <div
                                        onClick={() =>
                                            setActiveCategory(
                                            activeCategory === category ? null : category
                                            )
                                        }
                                        className="text-right font-medium text-gray-700 hover:text-secondary cursor-pointer flex justify-between items-center"
                                        >
                                        {category}
                                        <span>
                                            {activeCategory === category ? "−" : "+"}
                                        </span>
                                        </div>

                                        {/* باز شدن آیتم‌ها با انیمیشن */}
                                        <AnimatePresence initial={false}>
                                        {activeCategory === category && (
                                            <motion.ul
                                            key="sub-sub-menu"
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: "auto" }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className=" mt-1 text-sm text-gray-600 flex flex-col overflow-hidden"
                                            >
                                            {items.map((item, k) => (
                                                <li key={k}>
                                                <a
                                                    href="#"
                                                    className="hover:text-primary block transition-colors"
                                                >
                                                    {item}
                                                </a>
                                                </li>
                                            ))}
                                            </motion.ul>
                                        )}
                                        </AnimatePresence>
                                    </li>
                                    ))}
                                </motion.ul>
                                )}
                            </AnimatePresence>
                            </li>
                        ))}
                    </ul>

                    {/*  menu right */}
                    <ul className="flex flex-col gap-6 p-6">
                        {menuItemsRight.title.map((item, index) => {
                        const Icon = menuItemsRight.icons[index];
                        return (
                            <li
                            key={index}
                            className={clsx(
                                "flex items-center gap-2 text-gray-700 hover:text-primary font-bold transition-all duration-500 ease-in-out",
                                isOpen ? `delay-${index * 100}` : "delay-0"
                            )}
                            >
                            <Icon className="text-primary w-5 h-5" />
                            <a href="#">{item}</a>
                            </li>
                        );
                        })}
                        {/* login & sign up btn */}
                        <Link to="/login" className="flex items-center gap-x-1 font-bold cursor-pointer hover:shadow-[0_4px_14px_rgba(0,0,0,0.01),0_-4px_16px_rgba(0,0,0,0.01),4px_0_16px_rgba(0,0,0,0.01),-4px_0_16px_rgba(0,0,0,0.1)] rounded-xl p-3 transition-all duration-350">
                        <RiUserLine className="w-5 h-5" />
                        <span>ثبت نام | ورود</span>
                        </Link>
                    </ul>

                </nav>
            </div>

            {/* search box */}
            <div className="mt-3.5 flex items-center justify-center z-40">
                <form className="flex items-center gap-x-2 text-start border border-gray-300 px-0 xl:px-3 py-4 rounded-2xl w-full h-10 bg-[#F9F9F9]" action="">
                    <CiSearch className="w-6 h-6 text-primary" />
                    <input className="border-none outline-none" type="text" name="" placeholder="جستجو"/>
                </form>
            </div>
        </section>
    );
};

export default MobileMenu;
