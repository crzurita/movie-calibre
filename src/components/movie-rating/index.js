import React from 'react';
import './index.scss';
import PropTypes from 'prop-types';
import starImage from '../../assets/star.png';
import starActive from '../../assets/star-active.png';

class MovieRating extends React.Component {
  constructor(props) {
    super(props);
    this.paintStar = this.paintStar.bind(this);
    this.selectStar = this.selectStar.bind(this);
  }
  stars = [1, 2, 3, 4, 5]

  paintStar(starId) {
    return starId <= this.props.rating ? starActive : starImage;
  }

  resetRates() {
    this.setState({selectedStar: 0});
  }

  selectStar(starId) {
    if (starId === this.props.rating) return false;
    this.props.onChangeValue && this.props.onChangeValue(starId);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.rating !== this.props.rating
  }

  render() {
    return (
      <ul className="rating">
        { this.stars.map(starId => (
          <li key={starId} className="rating__list">
            <button
              style={{cursor: !this.props.onChangeValue ? 'default' : 'pointer'}}
              disabled={!this.props.onChangeValue}
              onClick={() => this.selectStar(starId)}
              id={starId} className="rating__star">
              <img src={this.paintStar(starId)} alt=""/>
            </button>
          </li>
        )) }
      </ul>
    )
  }
}

MovieRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onChangeValue: PropTypes.func
}
export default MovieRating;

