export const RightMenu = () => {
  const menuItems = ['مردانه', 'زنانه', 'بچگانه' , 'لوازم ورزشی' , 'شیکر و جاگ']
  return (
    <>
        <ul className="hidden md:flex gap-x-10 text-gray-600 text-base font-vazirB font-bold">
          {
              menuItems.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="transition-all duration-300 hover:text-secondary">{item}</a>
                  </li>
              ))
          }

        </ul>
    </>
  )
}

export const LeftMenu = () => {
  return (
        <div className="hidden md:flex gap-6 font-medium text-gray-600">
          <a href="#" className="hover:text-black hover:shadow-md">Home</a>
          <a href="#" className="hover:text-black hover:shadow-md">Shop</a>
          <a href="#" className="hover:text-black hover:shadow-md">About</a>
          <a href="#" className="hover:text-black hover:shadow-md">Contact</a>
        </div>
  )
}

const NavLinks = () => {
    return (
      <>
        <nav className="flex items-center justify-between">
          <RightMenu />
          <LeftMenu />
        </nav>
      </>
    );
  };
  
  export default NavLinks;
  