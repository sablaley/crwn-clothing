import { Outlet , Link } from "react-router-dom";
import React from "react";
import {ReactComponent as CrownLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
    return (
        <React.Fragment>
          <div className="navigation">
            <Link to='/' className="logo-container">
                {/* <div>Logo</div> */}
                <CrownLogo className="logo"/>
            </Link>
            <div className="nav-links-container">
                <Link to='/shop' className='nav-link'>Shop</Link>
                <Link to='/auth' className='nav-link'>Sign In</Link>
            </div>
          </div>
          <Outlet/>
        </React.Fragment>
      )
}

export default Navigation