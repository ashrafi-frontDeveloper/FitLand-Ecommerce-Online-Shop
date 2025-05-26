import NavLinks from "../Header/NavLinks";
import MobileMenu from "../Header/MobileMenu";
import UserActions from "../Header/UserActions";
import Logo from "../Header/Logo";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    // <div className="text-center py-20">
    //   {/* <h1 className="text-4xl font-bold mb-4 text-red-600">404</h1>
    //   <p className="text-lg">صفحه مورد نظر پیدا نشد.</p> */}
    // </div>
    <>
        <div className="container px-0 xl:px-4 p-0 2xl:px-10 pt-12 mx-auto w-full">
            {/* logo & seach box & login | sign up button */}
            <div className="gap-x-20 lg:gap-x-32 xl:gap-x-0 hidden md:flex items-center justify-evenly xl:justify-between">
                <Logo /> 
                <UserActions />
            </div>
            {/* menu & main header */}
            <div className="px-5 lg:px-10 py-5 mt-0 md:mt-9">
                {/* mobile menu */}
                <MobileMenu className="block md:hidden" />
                {/* desktop menu */}
                <NavLinks className="hidden md:block" />
            </div>
            {/* NotFound */}
            <div className="flex flex-col items-center justify-center py-">
                <img src="images/NotFound/notFound.png" alt="" className="w-1/3 lg:w-auto" />
                <p className="text-secondary text-xl lg:text-2xl font-medium mt-5">متاسفانه صفحه مورد نظر پیدا نشد :(</p>
                <Link to="/" className="mt-5 bg-secondary hover:bg-secondery-700 text-white px-5 py-2 rounded-xl mb-3 transition-all duration-300">برگشت به صفحه اصلی</Link>
            </div>
        </div>
            {/* Footer */}
            <Footer></Footer>
    </>
  );
};

export default NotFound;
