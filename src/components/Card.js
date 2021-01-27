import React from 'react';
import "../style/Cards.css";

class Card extends React.Component {
    render() {
      return(
          
          <div className="card">
            <img src={this.props.img} />
            <div className="card-body">
              <h2>{this.props.title}</h2>
              <p>{this.props.paragraph} </p>
              <h5>{this.props.price}</h5>
              
              <br/>
              <button class= "button">Buy Now</button>
            </div>
          </div>
          
      )
    }
  }
  export default Card;