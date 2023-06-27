import PropTypes from 'prop-types';
import transactions from '../TransactionHistory/transactions.json'
import css from './TransactionHistory.module.css'

export const TransactionHistory = () => {
  return transactions.map((prop) => {
    const { id, type, amount, currency } = prop;
    return (
      
      <tr className={css.item} key ={id}>
          <td className={css.items}>{type}</td>
        <td className={css.items}>{amount}</td>
        <td className={css.items}>{currency }</td>
        </tr>
        
          
    )
  })
}
TransactionHistory.propTypes = {
  transactions: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    amount: PropTypes.string.isRequired,
    currency:PropTypes.string.isRequired,
  }),
}
export default TransactionHistory;