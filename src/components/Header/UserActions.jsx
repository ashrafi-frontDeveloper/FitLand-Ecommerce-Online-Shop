import { CiSearch } from "react-icons/ci";

const UserActions = () => {
    return (
      <div className="flex gap-4 items-center text-gray-600 text-lg">
        <form className="flex items-center gap-x-2 text-start border border-gray-300 px-3 py-4 rounded-2xl w-[638px] h-12 bg-[#F9F9F9]" action="">
          <CiSearch className="w-6 h-6 text-primary" />
          <input className="border-none outline-none" type="text" name="" placeholder="جستجو"/>
        </form>
      </div>
    );
  };
  
  export default UserActions;
  