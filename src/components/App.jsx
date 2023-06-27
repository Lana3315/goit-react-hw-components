import React from 'react';
import { Profile } from '../components/Profile/Profile'
import user from '../components/Profile/user.json'
import { StaticsSection } from './Statistics/StaticsSection'
import { FriendList } from './FriendList/FriendList'
import friend from './FriendList/friend.json'
import { TransactionBody } from './TransactionHistory/TransactionBody.jsx'
import transactions from './TransactionHistory/transactions.json'



export const App = () => {
  return (
    <React.StrictMode >
      <div> <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      /></div>
      <section>
        <StaticsSection
         />
        </section>
      <FriendList
        id={friend.id}
        name={friend.name}
        isOnline={friend.isOnline}
        avatar={friend.avatar}
      />
      <TransactionBody 
        id={transactions.id} 
        type ={transactions.type}
        amount={transactions.amount}
        currency={transactions.currency}
      />
  </React.StrictMode>
  )
};
export default App