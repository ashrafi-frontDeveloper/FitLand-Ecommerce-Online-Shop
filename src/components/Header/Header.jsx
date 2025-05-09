import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserActions from "./UserActions";
import MainHeader from "./MainHeader";


const Header = () => {
  return (
    <>
      <div className="fixed flex items-center justify-center h-10 w-full font-vazirB font-medium text-sm text-white bg-secondary">
        <a href="#">:) با عضویت در فیت لند اولین ارسال را مهمون ما باش</a>
      </div>
      <header className="container px-4 p-0 2xl:px-10 pt-12 mx-auto w-full">
        {/* logo & seach box & login | sign up button */}
        <div className="py-3 flex items-center justify-between">
          <Logo /> 
          <UserActions />
        </div>
        {/* menu */}
        <div className="px-10 py-5 mt-9">
          <NavLinks />
          <MainHeader />
        </div>
      </header>
    </>
  );
};

export default Header;
