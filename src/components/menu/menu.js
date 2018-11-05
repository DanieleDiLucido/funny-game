import React from 'react'
import { connect } from 'react-redux';
import "./menu.scss";

class Menu extends React.Component {
  reset = () => {
    this.props.dispatch({
      type: 'RESET',
    })
  }
  render() {
    const history = this.props.itemTypes.map((element, i) => {
      return (
        <div key={i} className="table-row">
          <div className="menu-item">{element.name}</div>
          <div>{element.count}</div>
          <div>{element.points}</div>
        </div>
      )
    })
    return (
      <div className="menu">
        <div className="menu-title">
          <h2>
            Player !tems
          </h2>
        </div>
        <div className="menu-content">

          <div className="menu-item-list">
            <div className="table">
                <div className="theader">
                  <div>Item</div>
                  <div>Qty</div>
                  <div>Score</div>
                </div>
              <div className="tbody">
                {this.props.itemTypes.length > 0 && history}
              </div>
            </div>
          </div>
          <div className="menu-points">
            <div className="menu-bonus">
              <span>Bonuses:</span>
              <span className="bonus">
                {this.props.bonus}
              </span>
            </div>
            <div className="menu-score">
              <div className="menu-total">
                <span>TOTAL</span>
                <span>{this.props.score}</span>
              </div>
              <div className="menu-reset">
                <div className="menu-reset-button" onClick={this.reset}>NEW GAME</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => (state)
export default connect(mapStateToProps)(Menu)