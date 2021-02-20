import "./css/Base.css";

import Home from "./pages/home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Base = () => {
    return (
        <div className="container">
                <Header className="header-container" />
                <div className="body-container">
                    <Home />
                </div>
                <Footer className="footer-container" />
        </div>
    );
};

export default Base;
