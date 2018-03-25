import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
        <div className="container">
            <Link to="/" className="navbar-brand">CashPositive</Link>
            {/* <div className="collapse navbar-collapse justify-content-end pull-right" id="navbarCollapse">
                <span className="profile-text-new"> Awadhesh Kumar </span>
                <img className="imge-profile-header" alt='profile' role='presentation' src="../img/ProfilePhoto.jpg"/>
            </div> */}
        </div>
    </nav>
)

export default Header;