import "./css/Map.css";

const Map = (props) => {
    return (
        <p className="map">
            <span className="title">{props.title}</span>
            <span className="colon">：</span>
            <span className="value">{props.value}</span>
        </p>
    );
}

export default Map;