import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
//<Route exact path="" component={Navbar}></Route>
import Navbar from "./Components/Navbar/CustomNavbar";
import Sign from "./Components/Sign/Sign";
import Items from "./Components/Items/Items"
import CustomCarousel from "./Components/Carousel/CustomCarousel"
import Footer from "./Components/Footer/Footer"
import Body from "./Components/Body/Body"
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import PreFooter from "./Components/PreFooter/PreFooter"

/*<div style={{position:"fixed",right:"0px",top:"206px",zIndex:"99"}}>
           <a style={{WebkitWritingMode:"verticalLr",MozWritingMode:"verticalLr",MsWritingMode:"tbRl",OWritingMode:"verticalLr",writingMode:"verticalLr",WebkitTransform:"rotate(180deg)",MozTransform:"rotate(180deg)",MsTransform:"rotate(180deg)",OTransform:"rotate(180deg)",transform: "rotate(180deg)",padding:"19px 5px",position:"initial"}} href="#">
             <strong>BEST SELLERS</strong>
           </a>
        </div>
*/
function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <hr></hr>
        <hr></hr>
        <hr></hr>
        <hr></hr>
        
        <Sign />
        <Items />
        <CustomCarousel />
        <Body />
        <PreFooter />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
