import PropTypes from 'prop-types';
import Friends from './Friends';


function FriendList({ friends}) {
    return (
        <ul className='listFriend'>
            {friends.map(({ id,avatar,name,isOnline }) => (
                <Friends 
                    key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={ isOnline}
                />
            )
            )}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf({
        avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id:PropTypes.number.isRequired
    })
    
};

export default FriendList;