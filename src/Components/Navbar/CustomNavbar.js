import React,{ Component} from 'react'
//import free_shipping from './free_shipping.png'
//import lock from './lock.png'
import {Navbar,NavDropdown,Nav} from 'react-bootstrap'
import storeImg from './store.jpg'
import paymentsImg from './lock.png'
import shippingImg from './free_shipping.png'
import CustomNavbarCss from './CustomNavbar.css'
import TeleImg from './tele.png'
import MailImg from './mail.png'
import searchIcon from "../Sign/search.png"
import bibaImg from "../Sign/biba.jpg"
import bagImg from '../Sign/bag1.jpg'
//class="navbar fixed-top navbar-expand-sm bg-white"
//class="navbar navbar-expand-sm bg-white"
import Globe from './globe.jpg'
import IND from './india.png'
class CustomNavbar extends Component
{
    render()
    {
        return(
           <div>
            <nav class="navbar fixed-top navbar-expand-sm bg-white">
            <ul class="navbar-nav">
             <li class="nav-item">
              <a class="nav-link" disabled href="#" style={{color:"black"}}><img src={storeImg} style={{width:"25px",height:"25px"}}/>OFFICE STORE</a>
             </li>
             <li class="nav-item">
              <a class="nav-link" disabled href="#" style={{color:"black"}}><img src={paymentsImg} style={{width:"25px",height:"25px"}}/>SECURE PAYMENT</a>
             </li>
             <li class="nav-item">
              <a class="nav-link" disabled href="#" style={{color:"black"}}><img src={shippingImg} style={{width:"25px",height:"25px"}}/>FREE SHIPPING</a>
             </li>
             <li class="nav-item">
              <a  class="nav-link" style={{color:"#E10600",paddingLeft:"80px"}} href="#"><strong>REGISTER AND GET RS.300 OFF</strong></a>
             </li>
             <li class="nav-item">
              <a  class="nav-link" style={{paddingLeft:"50px"}} href="#"><img src={TeleImg} style={{width:"25px",height:"15px"}}/>|
              </a>
             </li>
             <li class="nav-item">
              <a  class="nav-link" style={{paddingLeft:"10px"}} href="#"><img src={MailImg} style={{width:"45px",height:"30px"}}/>|</a>
             </li>
             <li class="nav-item">
              <a  class="nav-link" style={{paddingLeft:"15px"}} href="#">Franchise</a>
             </li>
             <li class="nav-item">
              <a  class="nav-link" style={{paddingLeft:"1px"}} href="#">|
              </a>
             </li>
             <li class="nav-item">
              <a  class="nav-link" style={{paddingLeft:"5px"}} href="#">Store Locator
              </a>
             </li>
             <li class="nav-item">
              <a  class="nav-link" style={{paddingLeft:"1px"}} href="#">|
              </a>
             </li>
             
             <select style={{marginTop:"10px",width:"100px",height:"20px"}}>
                <option>INTL</option>
                <option>IND</option>
             </select>
            </ul>
           </nav>
           
           </div>
        );
    }
}

export default CustomNavbar;