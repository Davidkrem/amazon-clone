import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Header.css';
import { useStateValue } from './StateProvider';

function Header() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <div className="header__option">
            <span className="header__optionLineOne">Hello, Guest</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Retuns</span>
          <span className="header__optionLineTwo">& Orders </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: 'none' }}>
          <div className="header__optionCart">
            <span className="header__optionLineTwo header__cartCount">
              <span className="count">{cart?.length}</span>
            </span>
            <ShoppingCartOutlinedIcon />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
