import React from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';
import SearchBar from './SearchBar';
import UserActions from './UserActions';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md">
      <Logo />
      <NavMenu />
      <SearchBar />
      <UserActions />
    </header>
  );
};

export default Header;
