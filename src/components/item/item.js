import React from 'react';
import { connect } from 'react-redux';
import "./item.scss";
import PropTypes from 'prop-types';

class Item extends React.Component {
  click = () => {
    this.props.dispatch({
      type: 'ITEM-CLICKED',
      name: this.props.name,
      points: this.props.points,
      bonusOn:this.props.bonusOn || 0,
      bonus:this.props.bonus || 0
    })
  }

  render() {
    return (
      <div className={`item type-${this.props.name.toLocaleLowerCase()}`} onClick={this.click} >
        <span className="content">
            {this.props.name}
        </span>
      </div>)
  }
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  bonus: PropTypes.number,
  bonusOn: PropTypes.number,
};

const mapStateToProps = state => ({})
export default connect(mapStateToProps)(Item)