import React from 'react';
import './assets/style.css'
import './index.css';
import ReactRoundedImage from "react-rounded-image";
import ToolbarComponent from "./components/Toolbar";
import DrawerComponent from "./components/Drawer";

import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"></link>





class App extends React.Component {
  state = {
    left: false
    
  };

  toggleDrawer = () => {
    // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //   return;
    // }

    this.setState({ left: false });
  };


  openDrawer = () => {
    this.setState({
      left: true
      
    });
  };

  render() {
    return (
      
       

      <div className="img">
      <div className="App">
        <ToolbarComponent openDrawerHandler={this.openDrawer} />
        <DrawerComponent
          left={this.state.left}
          toggleDrawerHandler={this.toggleDrawer}

        />
        <img src=" /images/noon.png " alt=""  width="100%" />

        <div style={{ display: "flex" }}>
        <ReactRoundedImage image={"/images/img1.png"} />
        <ReactRoundedImage image={"/images/img2.png"} />
        <ReactRoundedImage image={"/images/img3.png"} />
        <ReactRoundedImage image={"/images/img8.png"} />
        <ReactRoundedImage image={"/images/img5.png"} />
        <ReactRoundedImage image={"/images/img7.png"} />
        <ReactRoundedImage image={"/images/img6.png"} />
      

        {/* <ReactRoundedImage
          image={"/images/pic2.jpg"}
          roundedColor="#321124"
          imageWidth="150"
          imageHeight="150"
          roundedSize="13"
          borderRadius="70"
        /> */}
        {/* <ReactRoundedImage image={"/images.pic2.jpg"} roundedSize="0" imageWidth="110" imageHeight="110" /> */}
      </div>
        

        <React.Fragment>

        <div className="container">
  <div className="row">
    <div className="col-sm">
    <div class="card" >
  <img class="card-img-top" src="/images/pic8.jpg" alt="Card image cap" />
  <div class="card-body">
    <h5 class="card-title">RS 30,000</h5>
    <p class="card-text"> Smart Tv Solution online classes </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div class="card" >
  <img class="card-img-top" src="/images/pic6.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Rs 2,650,000</h5>
    <p class="card-text"> Honda City 2019 model  </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div class="card"  >
  <img class="card-img-top" src="/images/pic7.jpg" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">4,250,000</h5>
    <p class="card-text"> 5 Marla plot in blue area </p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
 


    </div>
  </div>
</div>
    

      
        </React.Fragment>

        <div className="card bg-dark text-white">
  <img className="card-image" src="/images/noon2.gif" alt="Card image"  />
  <div className="card-img-overlay">
    <h5 className="card-title"></h5>
    {/* <p className="card-txt"></p>
    <p className="card-txt"></p> */}
  </div>
</div>



<footer className="footer-distributed">
  <div className="footer-left">
    <img src="/images/pic15.jpg "  />
    <h3>About<span>Noon</span></h3>
    <p className="footer-links">
      <a href="#">Home</a>
      |
      <a href="#">Blog</a>
      |
      <a href="#">About</a>
      |
      <a href="#">Contact</a>
    </p>
    <p className="footer-company-name">We're Always Here To Help</p>
  </div>
  <div className="footer-center">
    <div>
      <i className="fa fa-map-marker" />
      <p><span>
      Reach out to us through any of these support channels</span>
        </p>
    </div>
    <div>
      <i className="fa fa-phone" />
      <p>help.noon.com</p>
    </div>
    <div>
      <i className="fa fa-envelope" />
      <p><a href="mailto:support@eduonix.com">care@noon.com</a></p>
    </div>
  </div>
  <div className="footer-right">
    <p className="footer-company-about">
      <span>About the Noon</span>
      Starting in 2017 with noon.com, the region's homegrown e-commerce platform and leading online shopping destination, noon is now a digital ecosystem of products and services: noon.com The region's leading e-commerce platform and digital marketplace, offering incredible value across multiple categories with world-class     </p>
    {/* <div className="footer-icons">
      <a href="#"><i className="fab fa-facebook" /></a>
      <a href="#"><i className="fas fa-twitter" /></a>
      <a href="#"><i className="fas fa-instagram" /></a>
      <a href="#"><i className="fas fa-linkedin" /></a>
      <a href="#"><i className="fas fa-youtube" /></a>
    </div> */}
  </div>
</footer>

       
      
      

  


        
      </div>
      </div>
    );
  }
}
     
      
    export default App;