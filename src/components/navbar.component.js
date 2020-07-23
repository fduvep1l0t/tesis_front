import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Home</Link>
                <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/landing_medic" className="nav-link">Medic Page</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/landing_patient" className="nav-link">Patient Page</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/landing_researcher" className="nav-link">Researcher Page</Link>
                    </li>
                </ul>
                </div>
            </nav>
        );
    }
}
