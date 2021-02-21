import "./css/Profile.css";

const Item = (props) => {
    return (
        <p className="item">
            <span className="title">{props.title}</span>
            <span className="separator">：</span>
            <span className="description">{props.description}</span>
        </p>
    );
}

const Profile = (props) => {
    return (
        <ul className="profile">
            {props.data.map((item) => {
                return (
                    <li>
                        <Item title={item.title} description={item.description} />
                    </li>
                );
            })}
        </ul>
    );
}

export default Profile;