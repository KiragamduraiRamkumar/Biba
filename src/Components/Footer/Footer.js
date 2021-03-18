import React,{Component} from 'react'
import FooterCss from './Footer.css'

class Footer extends Component
{
  render()
  {
      return(
        <div className="div5">
        <div className="container">
        <div className="row">
           <div className="col">
               <ul className="list-unstyled">
                  <h6>Top Categories</h6>
                  <li><a href="#">Anarkali Suits</a></li>
                  <li><a href="#">Kurtas For Women</a></li>
                  <li><a href="#">Salwar Suit Sets</a></li>
                  <li><a href="#">Girls Wear</a></li>
                  <li><a href="#">Palazzo Pants</a></li>
                  <li><a href="#">Jewellery for Women</a></li>
               </ul>
           </div>
           <div className="col">
               <ul className="list-unstyled">
                  <h6>Information</h6>
                 
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Business Enquiry</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Sitemap</a></li>
                  <li><a href="#">Sitemap.xml</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms Of Use</a></li>
               </ul>
           </div>
           <div className="col">
               <ul className="list-unstyled">
                  <h6>Customer Service</h6>
                  
                  <li><a href="#">Payment Options</a></li>
                  <li><a href="#">Delivery</a></li>
                  <li><a href="#">Returns&Cancellation</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Contact Us</a></li>
               </ul>
           </div>
           <div className="col">
               <ul className="list-unstyled">
                  <h6>My Account</h6>
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">Order History</a></li>
                  <li><a href="#">Track Order</a></li>
                  <li><a href="#">Wish List</a></li>
               </ul>
           </div>
           <div className="col">
               <ul className="list-unstyled">
                  <h6>Follow Us</h6>
                  <li> 
                     <a className="fa fa-facebook" href="#"></a>
                     <a className="fa fa-twitter" href="#"></a>
                     <a className="fa fa-youtube" href="#"></a>
                     <a className="fa fa-instagram" href="#"></a>
                     <a className="fa fa-pinterest" href="#"></a>
                  </li>
               </ul>
           </div>
           <div className="col">
               <ul className="list-unstyled">
                  <h6>Cards Accepted</h6>
                  <li> 
                  <span class="dc_payment_icons_bevel_32 dc_visa_bevel" title="Visa"></span>
                  <span class="dc_payment_icons_bevel_32 dc_mastercard_bevel" title="Mastercard"></span>
                  <span class="dc_payment_icons_bevel_32 dc_americanexpress_bevel" title="American Express"></span>
                  <span class="dc_payment_icons_bevel_32 dc_discover_bevel" title="Discover"></span>
                  </li>
                  <li><img src="https://ipv6-test.com/button-ipv6-big.png" /></li>
               </ul>
           </div>
           
         </div>
        </div>
       </div>
      );
  }
}

export default Footer;
