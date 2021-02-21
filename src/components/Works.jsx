import { useState } from "react";

import "./css/Works.css";

const Work = (props) => {
    const [detailsDisplay, setDetailsDisplay] = useState("none");

    return (
        <div className="work">
            <div className="overview">
                <img src={props.overviewImgPath} alt={props.title} />

                <figcaption>{props.title}</figcaption>

                <div className="date">{props.date}</div>

                <div
                    onClick={() => setDetailsDisplay("block")}
                    className="more"
                >
                    More
                </div>
            </div>

            <i
                className="clear material-icons"
                onClick={() => setDetailsDisplay("none")}
                style={{ display: detailsDisplay }}
            >
                clear
            </i>

            <div className="details" style={{ display: detailsDisplay }}>
                <div className="title">{props.title}</div>

                <div className="description">
                    <p className="date">{props.date}</p>

                    <div className="sentence">
                        {props.sentence.map((paragraph) => {
                            return <p>{paragraph}</p>;
                        })}
                    </div>

                    <p style={{ userSelect: "none" }}>　</p>

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

const Works = (props) => {
    return (
        <div className="works">
            {props.data.map((work) => {
                return (
                    <Work
                        overviewImgPath={`${process.env.PUBLIC_URL}/${props.baseDir}/${work.overViewImgFilename}`}
                        title={work.title}
                        date={work.date}
                        sentence={work.sentence}
                        links={work.links}
                    />
                );
            })}
        </div>
    );
};

export default Works;
