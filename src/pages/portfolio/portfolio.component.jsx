// @flow
import React from 'react';
import * as PortfolioTemplate from "./portfolio.template.jsx";

export default class Portfolio extends React.Component {
    render() {
        return PortfolioTemplate.template()
    }
}