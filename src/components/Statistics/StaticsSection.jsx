import Statisticsrender from "./Statisticsrender"
import css from './Statistics.module.css'

export const StaticsSection = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Upload stats</h2>
      <ul className={css.list}> <Statisticsrender /></ul>
    </div>
  )
};