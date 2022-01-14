import React from 'react';
import {Link} from 'react-router-dom';

import Button from './Button';
import logo from '../assets/img/apple-logo.svg'

function Footer(){

    return(
        <div className="footer">
            <div className="container">
            <Link to="/">
                <div className="footer__logo">
                <img width="38" src={logo} alt="Apple logo" />
                <div>
                    <h1>Apple Store</h1>
                </div>
                </div>
            </Link>
            <div className="footer__cart">
                <Link to="/cart">
                    <Button className="button--cart">
                        Связаться с нами!
                    </Button>
                </Link>
            </div>
            </div>
        </div>
    );
}

export default Footer