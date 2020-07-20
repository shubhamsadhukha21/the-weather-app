import React, { PureComponent, Fragment } from 'react';
import GPSLocation from '../GPSLocation';
import Info from '../Info';
import './index.css';

class Navbar extends PureComponent {
    constructor() {
        super(); 
    }

    componentDidMount() {}

    render() {
        return (
            <div className="navbar">
                <GPSLocation onGPSLocationClick={() => {}} />
                <div className="stretch"></div>
                <Info onInfoClick={() => {}} onInfoClose={() => {}} />
            </div>

        );
    }
}

export default Navbar;