import { Link } from "react-router-dom";
import "./css/Header.css";

const Header = () => {
    return (
        <div bg="dark" variant="dark" className="header">
            {/* font-family: "Caveat"; のための読み込み */}
            <link
                href="https://fonts.googleapis.com/css?family=Caveat"
                rel="stylesheet"
            />

            <div className="header-title">JPig</div>

            <nav xs={9} className="header-nav">
                <a
                    href="mailto:jpig.main@gmail.com"
                    className="header-nav-item"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contact
                </a>
            </nav>
            <div xs={2} className="header-links">
                <a
                    href="https://github.com/JPig-Main/Portfolio"
                    className="header-links-item"
                >
                    <img
                        src={`${process.env.PUBLIC_URL}/img/sns_icons/github.png`}
                        alt="github"
                        target="_blank"
                        rel="noopener noreferrer"
                    />
                </a>
            </div>
        </div>
    );
};

export default Header;
