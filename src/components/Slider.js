import React from "react";
import "../style/Slider.css"


class Slider extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        images: [
          "https://p.kindpng.com/picc/s/718-7180335_fl-studio-logo-fl-studio-logo-transparent-hd.png",
          "https://images-na.ssl-images-amazon.com/images/I/71CsNirCl2L._AC_SL1500_.jpg",
          "https://images.samash.com/sa/SQC/SQCHORD-P.fpx?cvt=jpg",
          "https://media.musiciansfriend.com/is/image/MMGS7/S115V-2-Way-15-Club-Series-V-Speaker-Pair/600427000000000-00-500x500.jpg",
          "https://cdn.mos.cms.futurecdn.net/XVTTr5xRMduSFNLbk7bzd9.jpg",
          "https://static.bhphoto.com/images/images2500x2500/1582278336_1540279.jpg",
          "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/108058472/original/98024f5ce0702091bc1796b0e44f08388d2fb090/provide-cheap-logic-pro-x-download.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/81ujDbJmg6L._AC_SX425_.jpg",
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
  
 

  export default Slider;