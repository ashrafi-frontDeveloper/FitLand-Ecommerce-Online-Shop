import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserActions from "./UserActions";


const Header = () => {
  return (
    <>
      <div className="fixed flex items-center justify-center h-10 w-full font-vazirB font-medium text-sm text-white bg-secondary">
        <a href="#">:) با عضویت در فیت لند اولین ارسال را مهمون ما باش</a>
      </div>
      <header className="container p-0 2xl:px-10 pt-12 mx-auto w-full">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Logo /> 
          {/* <NavLinks /> */}
          <UserActions />
        </div>
      </header>
    </>
  );
};

export default Header;
