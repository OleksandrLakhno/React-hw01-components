import "./Friends.css";


function Friends({ avatar, name, isOnline }) {
    return (
        <li className="item__Friends">
            <span className={ isOnline ? "statusOnline" : "statusOffline" }></span>
            <img  src={avatar} alt={name} width='50' />
            <p className="friendName">{name}</p>
        </li>
    );  
};

export default Friends;