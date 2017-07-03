// @flow
import React from 'react';
import {NavLink} from 'react-router-dom';

const socialLinks = [
    {
        href: "https://github.com/MarkThibault",
        target: "_blank",
        text: "GitHub"
    },
    {
        href: "https://www.linkedin.com/in/marklthibault",
        target: "_blank",
        text: "LinkedIn"
    },
    {
        href: "mailto:contact@markthibault.com",
        target: "",
        text: "Email"
    },
    {
        href: "tel:503-278-729",
        target: "_top",
        text: "Call"
    },
];

const listItems = socialLinks.map(function(item) {
    return (
        <li key={item.text}>
            <a href={item.href} target={item.target}>{item.text}</a>
        </li>
    );
});

export default class NavigationSocialLinks extends React.Component {
    render() {
        return (
            <ul>
                {listItems}
            </ul>
        )
    }
}