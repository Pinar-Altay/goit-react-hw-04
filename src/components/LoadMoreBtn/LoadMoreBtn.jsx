import PropTypes from 'prop-types';
import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onClick }) => {
  return (
      <button className={s.load_btn} onClick={() => onClick()}>Load more</button>
  )
}

LoadMoreBtn.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default LoadMoreBtn