// @flow
import React from 'react';
import {NavLink} from 'react-router-dom';

export default class NavigationLinks extends React.Component {
    render() {
        return (
            <ul>
                <li><NavLink to="/" activeClassName="selected">About</NavLink></li>
                <li><NavLink to="/resume" activeClassName="selected">Resume</NavLink></li>
                <li><NavLink to="/portfolio" activeClassName="selected">Portfolio</NavLink></li>
            </ul>
        )
    }
}