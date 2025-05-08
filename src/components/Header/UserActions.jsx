import { CiSearch } from "react-icons/ci";
import { RiUserLine } from "react-icons/ri";

const UserActions = () => {
    return (
      <div className="flex items-center gap-x-20 gap-4 text-gray-600 text-lg">
        {/* search box */}
        <form className="flex items-center gap-x-2 text-start border border-gray-300 px-3 py-4 rounded-2xl w-[638px] h-12 bg-[#F9F9F9]" action="">
          <CiSearch className="w-6 h-6 text-primary" />
          <input className="border-none outline-none" type="text" name="" placeholder="جستجو"/>
        </form>

        {/* login & sign up btn */}
        <button className="flex items-center gap-x-1 font-bold shadow-[0_4px_14px_rgba(0,0,0,0.01),0_-4px_16px_rgba(0,0,0,0.01),4px_0_16px_rgba(0,0,0,0.01),-4px_0_16px_rgba(0,0,0,0.1)] rounded-xl p-3">
          <span>ثبت نام | ورود</span>
          <RiUserLine className="w-5 h-5" />
        </button>

        {/* shopping cart */}
        <button className="">
          
        </button>

      </div>
    );
  };
  
  export default UserActions;
  