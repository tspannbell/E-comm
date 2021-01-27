import React from "react";
import "../style/Slider.css"


class Slider2 extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        images: [
          "https://images.pexels.com/photos/936030/pexels-photo-936030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "https://images.pexels.com/photos/3400600/pexels-photo-3400600.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "https://images.pexels.com/photos/765139/pexels-photo-765139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "https://images.pexels.com/photos/2350325/pexels-photo-2350325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "https://images.pexels.com/photos/755416/pexels-photo-755416.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          "https://pilerats.com/assets/Uploads/soulection-radio-taku.jpg"
        ],
        currentIndex: 0,
        translateValue: 0
      }
    }
  
    goToPrevSlide = () => {
      if(this.state.currentIndex === 0)
        return;
      
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex - 1,
        translateValue: prevState.translateValue + this.slideWidth()
      }))
    }
  
    goToNextSlide = () => {
      if(this.state.currentIndex === this.state.images.length - 1) {
        return this.setState({
          currentIndex: 0,
          translateValue: 0
        })
      }
      
      this.setState(prevState => ({
        currentIndex: prevState.currentIndex + 1,
        translateValue: prevState.translateValue + -(this.slideWidth())
      }));
    }
  
    slideWidth = () => {
       return document.querySelector('.slide').clientWidth
    }
  
    render() {
      return (
        <div className="slider">
  
          <div className="slider-wrapper"
            style={{
              transform: `translateX(${this.state.translateValue}px)`,
              transition: 'transform ease-out 0.45s'
            }}>
              {
                this.state.images.map((image, i) => (
                  <Slide key={i} image={image} />
                ))
              }
          </div>
  
          <LeftArrow
           goToPrevSlide={this.goToPrevSlide}
          />
  
          <RightArrow
           goToNextSlide={this.goToNextSlide}
          />
        </div>
      );
    }
  }
  
  
  const Slide = ({ image }) => {
    const styles = {
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 60%'
    }
    return <div className="slide" style={styles}></div>
  }
  
  
  const LeftArrow = (props) => {
    return (
      <div className="backArrow arrow" onClick={props.goToPrevSlide}>
        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
  
  
  const RightArrow = (props) => {
    return (
      <div className="nextArrow arrow" onClick={props.goToNextSlide}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
      </div>
    );
  }
  
 

  export default Slider2;