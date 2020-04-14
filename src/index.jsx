import React from 'react';
import ReactDOM from 'react-dom';

import './JavaScript/Css/index.css';

import Toolbar from './JavaScript/Page/Navbar/toolbar';
import PageBody from './JavaScript/Page/PageElements/body';

import { BrowserRouter as Router } from "react-router-dom";
import Footer from './JavaScript/Page/PageElements/footer';
import SlidingNavbar from './JavaScript/Page/PageElements/slidingNavbar';

class App extends React.Component {

    render() {
        return (
                <Router>
                    <SlidingNavbar />
                    <Toolbar />
                    <PageBody />
                    <Footer />
                </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);