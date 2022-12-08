import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from '../../redux/User/user.actions';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import './styles.scss';

import Logo from './../../assets/logo.png';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state),
});

const Header = (props) => {
  const dispatch = useDispatch();
  const { currentUser, totalNumCartItems } = useSelector(mapState);

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    <header className='header'>
      <div className='wrap'>
        <div className='logo'>
          <Link to='/'>
            <img src={Logo} alt='Bakery Logo' />
          </Link>
        </div>

        <nav role='navigation'>
          <ul>
            <li>
              <Link to='/cart'>Your Cart ({totalNumCartItems})</Link>
            </li>

            {currentUser && [
              <li key={1}>
                <Link to='/dashboard'>My Account</Link>
              </li>,
              <li key={2}>
                <span onClick={() => signOut()}>signOut</span>
              </li>,
            ]}

            {!currentUser && [
              <li key={1}>
                <Link to='/registration'>Register</Link>
              </li>,
              <li key={2}>
                <Link to='/login'>Login</Link>
              </li>,
            ]}
            <li>
              <a href='/search'>Products</a>
            </li>
            <li>
              <a href='#'>Customize</a>
              <ul class='dropdown'>
                <li>
                  <a href='/cake'>Cake</a>
                </li>
                <li>
                  <a href='/muffin'>Muffin</a>
                </li>
                <li>
                  <a href='/donut'>Donut</a>
                </li>
              </ul>
            </li>
            <li>
              <a href='/'>Home</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
