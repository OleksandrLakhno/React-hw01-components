import PropTypes from 'prop-types';
import p from "./Profile.module.css";

function Profile({ username, tag, location, avatar, stats: { followers,views,likes}} ) {
    return (
        <div className={p.profile}>
            <div className={ p.description}>
                <img src={avatar} alt={username} height='300'/>
                <p className={p.name}>{ username}</p>
                <p className={ p.tag}>{ tag}</p>
                <p className={ p.location}>{ location}</p>
            </div>

            <ul className={ p.stats}>
                <li className={ p.list}>
                    <span className={ p.label}>Followers</span>
                    <span className={ p.quantity}>{ followers}</span>
                </li>
                <li className={ p.list}>
                    <span className={ p.label}>Views</span>
                    <span className={ p.quantity}>{ views}</span>
                </li>
                <li className={ p.list}>
                    <span className={ p.label}>Likes</span>
                    <span className={ p.quantity}>{ likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.propTypes = {
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats:PropTypes.objectOf(PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes:PropTypes.number.isRequired
        }))
};

export default Profile;