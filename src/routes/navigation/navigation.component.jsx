import { Outlet, Link } from "react-router-dom";
import React, { useContext } from "react";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg'
import './navigation.styles.scss'
import { UserContext } from '../../contexts/user.context';
import { SignOutUser } from "../../firebase/utils/firebase.utils";
const Navigation = () => {
  const { currentUser,setCurrentUser } = useContext(UserContext)
  console.log(currentUser);
  
  const SignOutHandler = async () => {
   await SignOutUser()
   
    setCurrentUser(null)
  }
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
            <span className='nav-link' onClick={SignOutHandler} >
              {' '}
              SIGN OUT{' '}
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}        </div>
      </div>
      <Outlet />
    </React.Fragment>
  )
}

export default Navigation