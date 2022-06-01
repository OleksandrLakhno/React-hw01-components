import f from"./Friends.module.css";


function Friends({ avatar, name, isOnline }) {
    return (
        <li className={f.item}>
            <span className={ isOnline ? f.statusOnline : f.statusOffline }></span>
            <img  src={avatar} alt={name} width='50' />
            <p className={f.friend }>{name}</p>
        </li>
    );  
};

export default Friends;