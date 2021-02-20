import "./css/Map.css";

const Map = (props) => {
    return (
        <p>
            <span className="title">{props.title}</span>
            <span className="colon">：</span>
            <span>{props.value}</span>
        </p>
    );
}

export default Map;