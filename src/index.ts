require("./assets/mark-thibault-logo.jpg");
require("./assets/mark-thibault-logo.png");
require("./assets/mark-thibault.ico");
require("./assets/apple-touch-icon.png");
require("./app.component.scss");

import * as angular from "angular";
import AppComponent from "./app.component";

angular
    .module("app", [
        "ngAnimate",
        "angularCheckboxModule",
        "angularDropdownModule",
        "angularFilterModule",
        "angularHeaderModule",
        "angularInputGroupModule",
        "angularModalModule",
        "angularSessionTimeoutModule",
        "angularToastMessagingModule"
    ])
    .component("app", new AppComponent());