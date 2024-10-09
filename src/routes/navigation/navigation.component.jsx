import { Outlet, Link } from "react-router-dom";
import React, { useContext } from "react";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from '../../contexts/user.context';
import { SignOutUser } from "../../firebase/utils/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropown.component";
import {CartContext} from '../../contexts/cart.context'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  // console.log(currentUser);
  const {isCartOpen} = useContext(CartContext)
  console.log(isCartOpen);
  
  return (
    <React.Fragment>
      <div className="navigation">
        <Link to='/' className="logo-container">
          {/* <div>Logo</div> */}
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to='/shop' className='nav-link'>Shop</Link>
          {currentUser ? (
            <span className='nav-link' onClick={SignOutUser} >
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
          {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </React.Fragment>
  )
}

export default Navigation