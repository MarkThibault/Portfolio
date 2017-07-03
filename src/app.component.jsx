// @flow
import React from 'react'
import {BrowserRouter as Router, Redirect, Route, NavLink} from 'react-router-dom';
import Navigation from "./organisms/navigation.component.jsx";
import About from "./pages/about/about.component.jsx";
import Portfolio from "./pages/portfolio/portfolio.component.jsx";
import Resume from "./pages/resume/resume.component.jsx";

const routes = [
  { path: '/about',
    component: About
  },
  { path: '/resume',
    component: Resume,
  },
  { path: '/portfolio',
    component: Portfolio,
  }
]

const App = () => (
  <Router>
    <div className="Application">
      <Navigation/>
      <main className="Main">
        <Route exact path="/" render={() => (
            <Redirect to="/about"/>
        )}/>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} component={route.component} />
        ))}
      </main>
    </div>
  </Router>
)

export default App;