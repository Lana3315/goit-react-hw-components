import css from './Statistics.module.css'
import PropTypes from 'prop-types';
import data from '../Statistics/data.json'
export const Statisticsrender = () => {
  return data.map((prop) => {
    return (
          <li className={css.item} key ={prop.id}>
        <span className={css.label}>{prop.label}</span>
        <span className={css.percentage}>{prop.percentage}%</span>
          </li>
          
    )
  })
}
Statisticsrender.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string,
    percentage: PropTypes.number.isRequired,
  }),
}
export default Statisticsrender;