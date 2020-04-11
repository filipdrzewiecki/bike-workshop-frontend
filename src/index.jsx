import React from 'react';
import ReactDOM from 'react-dom';

import './JavaScript/Css/index.css';

import Navbar from './JavaScript/Page/Navbar/navbar';
import Logo from './JavaScript/Page/PageElements/logo.jsx';
import PageBody from './JavaScript/Page/PageElements/body';

import { BrowserRouter as Router } from "react-router-dom";
import Footer from './JavaScript/Page/PageElements/footer';
import SlidingNavbar from './JavaScript/Page/PageElements/slidingNavbar';


class App extends React.Component {

    render() {
        return (

                <Router>
                    <SlidingNavbar />
                    <Logo />
                    <Navbar />
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