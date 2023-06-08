import './header.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import memoriterLogo from '../../images/memoriter-logo.svg';
import chevronRight from '../../images/chevron-right.svg';
import searchIcon from '../../images/icons/search-icon.svg';
import pushPinIcon from '../../images/icons/push-pin-icon.svg';
import profileIcon from '../../images/icons/profile-icon.svg';
import ProfileDropdown from './profile-dropdown';
import BackdropTransparent from '../backdrops/backdrop-transparent/backdrop-transparent';

const Header = ({
  path,
  onSidebarButtonClick,
  onSidebarButtonHoverEnter,
  onSidebarButtonHoverLeave,
}: {
  path: string;
  onSidebarButtonClick: () => void;
  onSidebarButtonHoverEnter: () => void;
  onSidebarButtonHoverLeave: () => void;
}) => {
  const [openProfileDropdown, setOpenProfileDropdown] = useState(false);

  return (
    <header className='header'>
      <button
        className='header-sidebar-button'
        onClick={() => onSidebarButtonClick()}
        onMouseEnter={() => onSidebarButtonHoverEnter()}
        onMouseLeave={() => onSidebarButtonHoverLeave()}
      />
      <img className='header-logo' src={memoriterLogo} alt='Memoriter' />
      <p className='header-path'>
        <img className='header-path-chevron' src={chevronRight} alt='>' />
        <Link to='/'>Home</Link>
        {path === 'home' ? null : path === '' ? (
          <>
            <img className='header-path-chevron' src={chevronRight} alt='>' />
            <Link to='/topic'>New Folder</Link>
          </>
        ) : (
          <>
            <img className='header-path-chevron' src={chevronRight} alt='>' />
            <Link to='/topic'>{path}</Link>
          </>
        )}
      </p>
      <div className='header-flex-gap' />
      <div className='header-search'>
        <input className='header-search-input' placeholder='Search' />
        <img className='header-search-icon' src={searchIcon} alt='Search icon' />
      </div>
      <img className='header-pin-icon' src={pushPinIcon} alt='Push pin icon' />
      <div>
        <img
          className='header-profile'
          src={profileIcon}
          alt='Profile'
          onClick={() => setOpenProfileDropdown(true)}
        />
        {openProfileDropdown && (
          <>
            <ProfileDropdown />
            <BackdropTransparent onClick={() => setOpenProfileDropdown(false)} />
          </>
        )}
      </div>
    </header>
  );
};
export default Header;
