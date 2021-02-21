import Home from "./pages/home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./css/Base.css";

const Base = () => {
    return (
        <div className="container">
            <Header className="container-header" />

            <div className="container-body">
                <Home />
            </div>

            <Footer className="container-footer" />
        </div>
    );
};

export default Base;
