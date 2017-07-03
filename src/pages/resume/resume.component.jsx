// @flow
import React from 'react';
import * as ResumeTemplate from "./resume.template.jsx";

export default class Resume extends React.Component {
    render() {
        return ResumeTemplate.template()
    }
}
