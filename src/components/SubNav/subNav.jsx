import React from 'react';
import './subnav.css'

const subNav = () => {
    return (
        <React.Fragment>
            <div className="sub-nav">
                <ul>
                    <li>
                        <a href="#">Beaches</a>
                    </li>
                    <li>
                        <a href="#">Dog-friendly</a>
                    </li>
                    <li>
                        <a href="#">Resturants</a>
                    </li>
                    <li>
                        <a href="#">Overnight</a>
                    </li>
                    <li>
                        <a href="#">Camping</a>
                    </li>
                    <li>
                        <a href="#">Low Budgets</a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default subNav;
