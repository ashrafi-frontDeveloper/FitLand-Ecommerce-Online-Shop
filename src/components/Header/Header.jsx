import Logo from "./Logo";
import NavLinks from "./NavLinks";
import UserActions from "./UserActions";


const Header = () => {
  return (
    <header className="w-full shadow-sm border-b sticky top-0 bg-white z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Logo />
        <NavLinks />
        <UserActions />
      </div>
    </header>
  );
};

export default Header;
