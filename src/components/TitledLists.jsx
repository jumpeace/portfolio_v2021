import "./css/TitledLists.css";

const Lists = (props) => {
    return (
        <div className="lists">
            {props.data.map((list) => {
                return (
                    <div className="list">
                        <img
                            src={`${process.env.PUBLIC_URL}/${props.baseDir}/${list}.png`}
                            alt={list}
                        ></img>
                        <span>{list}</span>
                    </div>
                );
            })}
        </div>
    );
};

const TitledList = (props) => {
    return (
        <div className="titled-list">
            <header>{props.title}</header>
            <Lists data={props.lists} baseDir={props.baseDir} />
        </div>
    );
};

const TitledLists = (props) => {
    return (
        <div className="titled-lists">
            {props.data.map((el) => {
                return (
                    <TitledList
                        title={el.title}
                        lists={el.lists}
                        baseDir={props.baseDir}
                    />
                );
            })}
        </div>
    );
};

export default TitledLists;
