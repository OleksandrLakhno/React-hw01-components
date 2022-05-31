import PropTypes from 'prop-types';
import  './Profile.css';

function Profile({ user: { username, tag, location, avatar, stats: { followers,views,likes}} }) {
    return (
        <div className='profile'>
            <div className='description__Profile'>
                <img src={avatar} alt={username} height='300'/>
                <p className='name__Profile'>{ username}</p>
                <p className='tag__Profile'>{ tag}</p>
                <p className='location__Profile'>{ location}</p>
            </div>

            <ul className='stats__Profile'>
                <li className='listProfile'>
                    <span className='label'>Followers</span>
                    <span className='quantity'>{ followers}</span>
                </li>
                <li className='listProfile'>
                    <span className='label'>Views</span>
                    <span className='quantity'>{ views}</span>
                </li>
                <li className='listProfile'>
                    <span className='label'>Likes</span>
                    <span className='quantity'>{ likes}</span>
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