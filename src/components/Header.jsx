import { useState } from "react";

import "./css/Header.css";

const Link = (props) => {
    return (
        <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link"
        >
            {props.description}
        </a>
    );
};

const Header = () => {
    const [links] = useState([
        {
            url: "https://github.com/JPig-Main/",
            description: "GitHub",
        },
        { url: "mailto:jpig.main@gmail.com", description: "Contact" },
    ]);

    const [LinkDisplay, setLinkDisplay] = useState("none");
    const [buttonKind, setButtonKind] = useState("segment");

    const changeLinkDisplay = () => {
        if (LinkDisplay === "none") {
            setLinkDisplay("grid");
            setButtonKind("clear");
        } else if (LinkDisplay === "grid") {
            setLinkDisplay("none");
            setButtonKind("segment");
        }
    };

    return (
        <header>
            {/* font-family: "Caveat"; のための読み込み */}
            <link
                href="https://fonts.googleapis.com/css?family=Caveat"
                rel="stylesheet"
            />

            <div className="title">JPig</div>

            <i
                className="button material-icons"
                onClick={() => {
                    changeLinkDisplay();
                }}
            >
                {buttonKind}
            </i>

            <nav className="links" style={{ display: LinkDisplay }}>
                {links.map((link) => {
                    return (
                        <Link url={link.url} description={link.description} />
                    );
                })}
            </nav>
        </header>
    );
};

export default Header;
