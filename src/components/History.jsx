import "./css/History.css";

const Event = (props) => {
    return (
        <div className="event">
            <div className="date">{props.date}</div>
            <div className="description">{props.description}</div>
        </div>
    );
};

const History = (props) => {
    return (
        <div className="history">
            {props.data.map((event) => {
                return (
                    <Event date={event.date} description={event.description} />
                );
            })}
        </div>
    );
};

export default History;
