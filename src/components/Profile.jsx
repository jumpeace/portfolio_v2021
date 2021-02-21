import "./css/Profile.css";

const Item = (props) => {
    return (
        <p className="item">
            <div className="title">{props.title}</div>

            <div className="separator">：</div>

            <div className="description">{props.description}</div>
        </p>
    );
};

const Profile = (props) => {
    return (
        <ul className="profile">
            {props.data.map((item) => {
                return (
                    <li>
                        <Item
                            title={item.title}
                            description={item.description}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default Profile;
