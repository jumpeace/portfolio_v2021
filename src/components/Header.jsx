import "./css/Header.css";

const Header = () => {
    return (
        <div className="header">
            {/* font-family: "Caveat"; のための読み込み */}
            <link
                href="https://fonts.googleapis.com/css?family=Caveat"
                rel="stylesheet"
            />

            <div className="header-title">JPig</div>

            <nav className="header-links">
                <a
                    href="https://github.com/JPig-Main/"
                    className="header-links-item"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a
                    href="mailto:jpig.main@gmail.com"
                    className="header-links-item"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contact
                </a>
            </nav>
        </div>
    );
};

export default Header;
