import { TransactionHistory } from "./TransactionHistory.jsx";
import css from './TransactionHistory.module.css'

export const TransactionBody = () => {
  return (
    <table className={css.transactionhistory}>
   <thead>
    <tr className={css.head}>
      <th >Type</th>
      <th >Amount</th>
      <th >Currency</th>
    </tr>
  </thead>

  <tbody>
  <TransactionHistory/>
  </tbody>
</table>
)
}
export default TransactionBody;