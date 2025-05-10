import { CiSearch } from "react-icons/ci";
import { RiUserLine } from "react-icons/ri";
import { toPersianDigits } from "../../utils/ConvertToPersian";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const UserActions = () => {
  
    return (
      <div className="flex items-center gap-x-5 lg:gap-x-10 xl:gap-x-20 2xl:gap-x-40 gap-y-16 text-gray-600 text-lg">
        {/* search box */}
        <form className="flex items-center gap-x-2 text-start border border-gray-300 px-0 xl:px-3 py-4 rounded-2xl w-72 lg:w-96 xl:w-[638px] h-12 bg-[#F9F9F9]" action="">
          <CiSearch className="w-6 h-6 text-primary" />
          <input className="border-none outline-none" type="text" name="" placeholder="جستجو"/>
        </form>

        <div className="flex gap-x-3.5">
          {/* login & sign up btn */}
          <button className="flex items-center gap-x-1 font-bold cursor-pointer hover:shadow-[0_4px_14px_rgba(0,0,0,0.01),0_-4px_16px_rgba(0,0,0,0.01),4px_0_16px_rgba(0,0,0,0.01),-4px_0_16px_rgba(0,0,0,0.1)] rounded-xl p-3 transition-all duration-350">
            <span>ثبت نام | ورود</span>
            <RiUserLine className="w-5 h-5" />
          </button>

          {/* shopping cart */}
          <button className="z-40 relative w-12 h-12 flex items-center cursor-pointer justify-center rounded-xl bg-primary text-white hover:shadow-[0_4px_14px_rgba(0,0,0,0.1),0_-4px_16px_rgba(0,0,0,0.1),4px_0_16px_rgba(0,0,0,0.01),-4px_0_16px_rgba(0,0,0,0.1)] transition-all duration-350">
            <HiOutlineShoppingBag />
            <span className=" absolute -top-1 -left-1 w-4 h-4 bg-secondary text-sm rounded-full">
              {toPersianDigits(0)}
            </span>
          </button>
        </div>


      </div>
    );
  };
  
  export default UserActions;
  