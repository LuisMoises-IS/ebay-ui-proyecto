import React from "react";
import {Link} from "react-router-dom";

const Header: React.FC = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
        <div className="container">
        <Link className="nav-link navbar-brand" to="/" >Ebay.hn</Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active headerText">
                <Link className="nav-link" to="/products">Products
                    <span className="sr-only">(current)</span>
                </Link>
            </li>
            <li className="nav-item active headerText">
                <Link className="nav-link" to="/categories" >Categories</Link>
            </li>       
            <li className="nav-item active headerText">
                <Link className="nav-link" to="/categories" ><i className="fas fa-shopping-cart"></i>  Cart</Link>
            </li> 
            <li className="nav-item active headerText">
                <Link className="nav-link" to="/user/new" ><i className="fas fa-user"></i>  SignIn</Link>
            </li>    
            </ul>
        </div>
        </div>
    </nav>
);

export default Header