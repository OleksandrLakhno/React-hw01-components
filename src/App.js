import user from './components/Profile/user.json';
import dataStat from './components/Statistic/data.json';
import friendsArr from './components/FriendList/friends.json';
import transactions from './components/Transaction/transactions.json';

import Profile from 'components/Profile/Profile';
import StatList from 'components/Statistic/Stat';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/Transaction/TransactionHistory';

function App() {
    return (
        <div>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={ user.stats}
            />
            <StatList title={'Upload stats'} data={ dataStat}/>
            <FriendList friends={friendsArr}/>
            <TransactionHistory tsTable={transactions} />
            </div>
    )
};

export default App;

