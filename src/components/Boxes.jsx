import { useState } from "react";

import "./css/Boxes.css";

const Box = (props) => {
    const [detailsDisplay, setDetailsDisplay] = useState("none");

    return (
        <div className="box">
            <div className="overview theme-light">
                <img src={props.overviewImgPath} alt={props.title} />
                <figcaption>{props.title}</figcaption>
                <div className="when">{props.when}</div>
                <div
                    onClick={() => setDetailsDisplay("block")}
                    className="view-more"
                >
                    View More
                </div>
            </div>
            <div className="details" style={{ display: detailsDisplay }}>
                <header>
                    <div className="title">{props.title}</div>
                    <div className="close">
                        <button onClick={() => setDetailsDisplay("none")}>
                            Close
                        </button>
                    </div>
                </header>
                <div className="contents">
                    <p className="when">{props.when}</p>
                    <div className="sentence">
                        {props.details.map((el) => {
                            return <p>{el}</p>;
                        })}
                    </div>
                    <p>　</p>
                    <ul className="links">
                        {props.links?.map((el) => {
                            return (
                                <li>
                                    <p>
                                        <a
                                            href={el.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {el.description}
                                        </a>
                                    </p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Boxes = (props) => {
    return (
        <div className="boxes">
            {props.data.map((el) => {
                return (
                    <Box
                        overviewImgPath={`${process.env.PUBLIC_URL}/${props.baseDir}/${el.overViewImgFilename}`}
                        title={el.title}
                        details={el.details}
                        links={el.links}
                        when={el.when}
                    />
                );
            })}
        </div>
    );
};

export default Boxes;
