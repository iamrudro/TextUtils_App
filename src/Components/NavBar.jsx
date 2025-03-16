import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router';

const NavBar = (props) => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to='/'>{props.title}</NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <NavLink className="nav-link" to='/'>
                                <li className="nav-item">Home</li>
                            </NavLink>
                            <NavLink className="nav-link" to='/about'>
                                <li className="nav-item">{props.aboutText}</li>
                            </NavLink>

                        </ul>

                        {/* <form className="d-flex mx-3">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}


                        {/*-------- Bootstrap Switch for using toggle Dark-Light Mode functionality----------*/}
                        {/* Ternary Operator to change the text-color  */}
                        <div className={`form-check form-switch 
                        text-${props.mode === 'light' ? 'dark' : 'light'}
                         mx-3`}>
                            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.darkLightMode} />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

NavBar.defaultProps = {
    title: 'set title here',
    aboutText: 'About'
}


export default NavBar;