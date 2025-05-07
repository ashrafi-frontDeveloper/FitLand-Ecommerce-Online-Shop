import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserActions from "./UserActions";


const Header = () => {
  return (
    <>
      <div className="font-vazirB font-medium text-sm text-white bg-secondary h-10 flex items-center justify-center">با عضویت در فیت لند اولین ارسال را مهمون ما باش</div>
      <header className=" container mx-auto w-full">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Logo />
          <NavLinks />
          <UserActions />
        </div>
      </header>
    </>
  );
};

export default Header;
