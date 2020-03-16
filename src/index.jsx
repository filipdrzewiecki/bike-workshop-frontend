import React from 'react';
import ReactDOM from 'react-dom';

import './Component/Css/index.css';

import Navbar from './Component/Page/Navbar/navbar';
import Logo from './Component/Page/PageElements/logo.jsx';
import PageBody from './Component/Page/PageElements/body';

import { BrowserRouter as Router } from "react-router-dom";
import Footer from './Component/Page/PageElements/footer';
import SlidingNavbar from './Component/Page/PageElements/slidingNavbar';


class App extends React.Component {

    render() {
        return ( 
            <div>
            <Router basename = { process.env.PUBLIC_URL } >
            <SlidingNavbar />
            <Logo />
            <Navbar />
            <PageBody />
            <Footer />
            </Router>  
            </div>
        );
    }
}

ReactDOM.render( <
    App / > ,
    document.getElementById('root')
);

export default App;