import { BrowserRouter as Router, Route } from "react-router-dom";
import "./css/Base.css";

import Home from "./pages/home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Base = () => {
    return (
        <div className="container">
            <Router>
                <Header className="header-container" />
                <div className="body-container">
                    <Route exact path="/">
                        <Home />
                    </Route>
                </div>
                <Footer className="footer-container" />
            </Router>
        </div>
    );
};

export default Base;
