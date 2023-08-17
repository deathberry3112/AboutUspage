
  import './Hero.css';
  import Farm from '../../assets/farm1e.jpg';
  import Farm2 from '../../assets/farm2e.jpg';

  const Hero = () => {
    return (
      <div className="hero-container">
        <div className="slider">
          <input type="radio" name="toggle" id="btn-1" checked />
          <input type="radio" name="toggle" id="btn-2" />
          <input type="radio" name="toggle" id="btn-3" />
  
          <div className="slider-controls">
            <label htmlFor="btn-1"></label>
            <label htmlFor="btn-2"></label>
            <label htmlFor="btn-3"></label>
          </div>
          <ul className="slides">
            <li className="slide">
              <p className="slide-image">
                <img src={Farm2} alt="stuff" />
              </p>
            </li>
            <li className="slide">
              <p className="slide-image">
                <img src={Farm} alt="stuff" />
              </p>
            </li>
            <li className="slide">
              <p className="slide-image">
                <img src={Farm} alt="stuff"  />
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Hero;
  
