// @flow
import React from 'react';
import {NavLink} from 'react-router-dom';
import NavigationLinks from "../molecules/navigation-links.component.jsx";
import NavigationSocialLinks from "../molecules/navigation-social-links.component.jsx";

export default class Navigation extends React.Component {
    render() {
        return (
            <div className="Navigation">
                <NavigationLinks/>
                <NavigationSocialLinks/>
            </div>
        )
    }
}