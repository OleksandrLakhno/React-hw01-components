import userProfile from './components/Profile/user.json';
import dataStat from './components/Statistic/data.json';
import friendsArr from './components/FriendList/friends.json';
import transactions from './components/Transaction/transactions.json';

import Profile from 'components/Profile/Profile';
import Statistic from 'components/Statistic/StatList';
import StatList from 'components/Statistic/Stat';
import FriendList from 'components/FriendList/FriendList';
import Friends from 'components/FriendList/Friends';
import TransactionHistory from 'components/Transaction/TransactionHistory';




function App() {
    return (
        <div>
            <Profile user={userProfile} />
            <StatList title={'Upload stats'} data={ dataStat}>
                <Statistic/>
            </StatList>
            <FriendList friends={friendsArr}>
                <Friends/>
            </FriendList>
            <TransactionHistory tsTable={transactions} />
            </div>
    )
};

export default App;

