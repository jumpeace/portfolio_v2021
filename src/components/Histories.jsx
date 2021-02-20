import "./css/Histories.css";

const History = (props) => {
    return (
        <div className="history">
            <span className="when">{props.when}</span>
            <span className="what">{props.what}</span>
        </div>
    );
};

const Histories = (props) => {
    return (
        <div className="histories">
            {props.data.map((el) => {
                return <History when={el.when} what={el.what} />;
            })}
        </div>
    );
};

export default Histories;
