import React from 'react';

const NavMenu = () => {
  const links = ['Home', 'Shop', 'About', 'Contact'];

  return (
    <nav>
      <ul className="flex gap-6 text-gray-700">
        {links.map((link) => (
          <li key={link} className="hover:text-black cursor-pointer">{link}</li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
