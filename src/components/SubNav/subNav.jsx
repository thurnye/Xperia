import React from 'react';
import './subnav.css'
import {Link } from 'react-router-dom'

const subNav = () => {
    return (
        <React.Fragment>
            <div className="sub-nav">
                <ul>
                    <li>
                    <Link to={{
                            pathname: `/posts` ,
                            search: `?q=beaches`,
                            state: `Beaches`,
                        }}
                        className="btn sub-nav-items">Beaches</Link>
                    </li>
                    <li>
                    <Link to={{
                            pathname: `/posts` ,
                            search: `?q=animalfriendly`,
                            state: `Animal Friendly`,
                        }}
                        className="btn sub-nav-items">Animal Friendly</Link>
                    </li>
                    <li>
                    <Link to={{
                            pathname: `/posts` ,
                            search: `?q=resturants`,
                            state: `Resturants`,
                        }}
                        className="btn sub-nav-items">Resturants</Link>
                    </li>
                    <li>
                    <Link to={{
                            pathname: `/posts` ,
                            search: `?q=nightlife`,
                            state: `Night Life`,
                        }}
                        className="btn sub-nav-items">Night Life</Link>
                    </li>
                    <li>
                    <Link to={{
                            pathname: `/posts` ,
                            search: `?q=camping`,
                            state: `Camping`,
                        }}
                        className="btn sub-nav-items">Camping</Link>
                    </li>
                    <li>
                    <Link to={{
                            pathname: `/posts` ,
                            search: `?q=lowbudget`,
                            state: `Low Budgets`,
                        }}
                        className="btn sub-nav-items">Low Budgets</Link>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}

export default subNav;
