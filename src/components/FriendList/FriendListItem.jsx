import PropTypes from 'prop-types';
import css from './FriendList.module.css'
import friend from '../FriendList/friend.json'
export const FriendListItem = () => {
  return friend.map((prop) => {
    const { isOnline, avatar, name, id } = prop;
    return (
      <li className={css.item} key={id}>
         {prop.isOnline === true ? (
        <span className={css.status}>{isOnline}</span>
      ) : (
        <span className={css.off}>{isOnline}</span>
      )}
  
        <img className={css.avatar} src={avatar} alt="User avatar" style={{ width:48 }} />
        <p className={css.name}>{name}</p>
</li>
          
    )
  })
}
FriendListItem.propTypes = {
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string,
    status: PropTypes.string,
    isOnline: PropTypes.number.isRequired,
  }),
}
export default FriendListItem;
