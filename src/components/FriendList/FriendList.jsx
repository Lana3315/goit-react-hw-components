import { FriendListItem } from './FriendListItem'
import css from './FriendList.module.css'
export const FriendList = () => {
  return (
    <ul className={css.friendlist}>
      < FriendListItem
      />
</ul>)
}
export default FriendList;